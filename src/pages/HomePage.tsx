import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { HOME_SLIDER_ITEMS, FEATURED_PROJECTS } from '../data/mockData';

interface HomePageProps {
  navigate: (path: string) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const splideRef = useRef<HTMLDivElement>(null);
  const splideInstance = useRef<Splide | null>(null);

  useEffect(() => {
    if (splideRef.current) {
      splideInstance.current = new Splide(splideRef.current, {
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        speed: 1000,
        lazyLoad: 'nearby',
      });

      splideInstance.current.mount();
    }

    return () => {
      if (splideInstance.current) {
        splideInstance.current.destroy();
      }
    };
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('featured-projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Slider Section with Splide.js */}
      <section className="relative w-full aspect-[3/2] max-h-[85vh] min-h-[360px] bg-black overflow-hidden">
        <div ref={splideRef} className="splide h-full w-full">
          <div className="splide__track h-full">
            <ul className="splide__list h-full">
              {HOME_SLIDER_ITEMS.map((slide, idx) => (
                <li key={slide.id} className="splide__slide h-full relative">
                  <div className="w-full h-full aspect-[3/2] relative">
                    <img
                      data-splide-lazy={slide.image}
                      src={idx === 0 ? slide.image : undefined}
                      alt={slide.alt}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover aspect-[3/2] transition-transform duration-1000 ease-out"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll Down Arrow Indicator */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll to featured projects"
          id="hero-scroll-down-btn"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white p-2 animate-bounce transition-colors cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </section>

      {/* Featured Projects Grid Section */}
      <section id="featured-projects-section" className="py-12 sm:py-16 bg-white text-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-base sm:text-lg font-medium tracking-[0.25em] uppercase text-neutral-900 font-['Montserrat',sans-serif]">
              Featured Projects
            </h2>
          </div>

          {/* 4 Wide Column Grid matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FEATURED_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => navigate(`/portfolio/${proj.slug}/`)}
                id={`featured-card-${proj.id}`}
                className="group relative w-full aspect-[3/2] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-neutral-900"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[3/2] brightness-[0.95] group-hover:scale-110 group-hover:brightness-75 transition-all duration-700 ease-out"
                />

                {/* Hover Overlay with text appearing on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 sm:p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-normal block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-normal font-['Cormorant_Garamond',serif] uppercase tracking-wider text-white leading-tight">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/90 flex items-center space-x-1 group-hover:translate-x-1 transition-transform font-medium">
                    <span>View Project</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Introduction Statement Section */}
          <div className="max-w-4xl mx-auto text-center mt-12 sm:mt-16 px-4 space-y-5">
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed font-['Montserrat',sans-serif]">
              <strong className="font-medium text-neutral-900">Aspen Homes</strong> is a renowned and respected housebuilder and developer delivering award-winning bespoke homes with an exceptional attention to detail, build quality and design.
            </p>
            <p className="text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              We make sure our homes enhance the character of their locality whilst creating the perfect environment for modern living. We pride ourselves on the experience we have generated and take pleasure in being able to give this back by developing homes to the very highest standard using the latest innovations without ever compromising on the detail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
