import { useState } from 'react';
import { VIDEOS_LIST } from '../data/mockData';
import { VideoItem } from '../types';
import { VideoModal } from '../components/VideoModal';

export function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const mainVideo = VIDEOS_LIST.find((v) => v.isLarge) || VIDEOS_LIST[0];
  const otherVideos = VIDEOS_LIST.filter((v) => !v.isLarge);

  const scrollToContent = () => {
    const el = document.getElementById('videos-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header matching videos.png */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Aspen Homes Architecture"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Videos
          </h1>
        </div>

        <button
          onClick={scrollToContent}
          aria-label="Scroll down"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 hover:text-white p-2 animate-bounce transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

      {/* Videos Section */}
      <div id="videos-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
            Explore our video walkthroughs, development fly-throughs, and interviews showcasing the precision and craft of our Surrey homes.
          </p>
        </div>

        {/* Featured Main Video */}
        <div
          onClick={() => setActiveVideo(mainVideo)}
          id="featured-main-video"
          className="relative h-[320px] sm:h-[450px] md:h-[550px] overflow-hidden group cursor-pointer bg-black shadow-xl mb-12"
        >
          <img
            src={mainVideo.thumbnail}
            alt={mainVideo.title}
            className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 border border-white/80 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-2xl">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
            <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-300 font-light mb-1">
              Featured Walkthrough &bull; {mainVideo.duration}
            </div>
            <h3 className="text-lg sm:text-2xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-wider">
              {mainVideo.title}
            </h3>
          </div>
        </div>

        {/* Video Grid Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              id={`video-card-${video.id}`}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900 shadow-md mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-white/70 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg className="w-5 h-5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 tracking-wider font-light">
                  {video.duration}
                </span>
              </div>

              <h4 className="text-xs sm:text-sm font-medium tracking-wide uppercase text-neutral-800 group-hover:text-black transition-colors font-['Montserrat',sans-serif]">
                {video.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
