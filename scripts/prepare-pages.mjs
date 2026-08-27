import { spawn } from 'node:child_process';
import { readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';

import ffmpegPath from 'ffmpeg-static';

const outputDirectory = path.resolve('dist');
const cloudflareFileLimit = 25 * 1024 * 1024;

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
  }));

  return files.flat();
}

function runFfmpeg(arguments_) {
  return new Promise((resolve, reject) => {
    const process = spawn(ffmpegPath, arguments_, { stdio: 'inherit' });
    process.on('error', reject);
    process.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`FFmpeg exited with code ${code}.`));
    });
  });
}

async function optimizeVideo(file) {
  const temporaryFile = `${file}.pages.mp4`;
  const relativePath = path.relative(outputDirectory, file);
  console.log(`Optimizing ${relativePath} for Cloudflare Pages...`);

  try {
    await runFfmpeg([
      '-hide_banner',
      '-loglevel', 'error',
      '-y',
      '-i', file,
      '-map', '0:v:0',
      '-map', '0:a?',
      '-vf', 'scale=1280:-2',
      '-c:v', 'libx264',
      '-preset', 'fast',
      '-b:v', '1800k',
      '-maxrate', '2000k',
      '-bufsize', '4000k',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '96k',
      '-movflags', '+faststart',
      temporaryFile,
    ]);

    const optimized = await stat(temporaryFile);
    if (optimized.size > cloudflareFileLimit) {
      throw new Error(`${relativePath} is still larger than 25 MiB after optimization.`);
    }

    await rm(file);
    await rename(temporaryFile, file);
    console.log(`Optimized ${relativePath} to ${(optimized.size / 1024 / 1024).toFixed(1)} MiB.`);
  } catch (error) {
    await rm(temporaryFile, { force: true });
    throw error;
  }
}

const files = await listFiles(outputDirectory);
const oversizedFiles = [];

for (const file of files) {
  const fileStats = await stat(file);
  if (fileStats.size > cloudflareFileLimit) {
    oversizedFiles.push(file);
  }
}

const unsupportedFiles = oversizedFiles.filter((file) => path.extname(file).toLowerCase() !== '.mp4');
if (unsupportedFiles.length > 0) {
  throw new Error(`Cloudflare Pages cannot upload these files because they exceed 25 MiB:\n${unsupportedFiles.join('\n')}`);
}

for (let index = 0; index < oversizedFiles.length; index += 2) {
  await Promise.all(oversizedFiles.slice(index, index + 2).map(optimizeVideo));
}
