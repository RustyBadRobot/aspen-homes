import { useState } from 'react';
import { TESTIMONIALS_LIST } from '../data/mockData';

export function TestimonialsPage() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const scrollToContent = () => {
    const el = document.getElementById('testimonials-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Aspen Homes Architecture"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Testimonials
          </h1>
          <p className="text-neutral-300 text-xs sm:text-sm font-light uppercase tracking-[0.2em] mt-3">
            What our homeowners and partners say
          </p>
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

      {/* Testimonials Interactive Grid matching testimonials.png */}
      <div id="testimonials-grid-section" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_LIST.map((item) => {
            const isHovered = activeHoverId === item.id;
            const showDefault = item.hasTextOverlayDefault;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHoverId(item.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                id={`testimonial-tile-${item.id}`}
                className="group relative w-full aspect-[3/2] overflow-hidden cursor-pointer bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.author}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[3/2] transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Subtle dark backdrop */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition-colors duration-500" />

                {/* Testimonial Quote Overlay that smoothly appears on hover (or default) */}
                <div
                  className={`absolute inset-0 p-8 sm:p-10 flex flex-col justify-center text-white transition-all duration-500 ease-in-out ${
                    showDefault && !activeHoverId
                      ? 'bg-black/75 opacity-100'
                      : isHovered
                      ? 'bg-black/80 opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl text-neutral-400 mb-2 leading-none">
                    &ldquo;
                  </div>

                  <p className="text-xs sm:text-sm font-light text-neutral-200 leading-relaxed italic mb-6">
                    {item.quote}
                  </p>

                  <div className="pt-4 border-t border-white/20">
                    <div className="text-xs sm:text-sm font-medium tracking-wide uppercase text-white font-['Montserrat',sans-serif]">
                      {item.author}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-light mt-0.5 tracking-wider">
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
