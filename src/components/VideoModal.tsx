import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-black border border-neutral-800 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          id="close-video-modal-btn"
          aria-label="Close video"
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white bg-black/60 p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="aspect-video w-full bg-black">
          <video
            controls
            autoPlay
            poster={video.thumbnail}
            className="w-full h-full object-cover"
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-4 sm:p-6 bg-[#181818] border-t border-neutral-800 flex items-center justify-between text-white">
          <div>
            <h4 className="text-base sm:text-lg font-light font-['Cormorant_Garamond',serif] tracking-wider">
              {video.title}
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-0.5">
              Duration: {video.duration} &nbsp;|&nbsp; Aspen Homes Showcase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
