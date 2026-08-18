import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { FEATURED_PROJECTS, CURRENT_DEVELOPMENTS, PORTFOLIO_PROJECTS } from '../data/mockData';

interface ProjectDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export function ProjectDetailPage({ slug, navigate }: ProjectDetailPageProps) {
  const allProjects = [...CURRENT_DEVELOPMENTS, ...PORTFOLIO_PROJECTS, ...FEATURED_PROJECTS];
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const project = currentIndex >= 0 ? allProjects[currentIndex] : allProjects[0];

  const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
  const nextIndex = (currentIndex + 1) % allProjects.length;

  const prevProject = allProjects[prevIndex];
  const nextProject = allProjects[nextIndex];

  const splideRef = useRef<HTMLDivElement>(null);
  const splideInstance = useRef<Splide | null>(null);

  useEffect(() => {
    if (splideRef.current && project.gallery && project.gallery.length > 0) {
      if (splideInstance.current) {
        splideInstance.current.destroy();
      }
      splideInstance.current = new Splide(splideRef.current, {
        type: 'slide',
        rewind: true,
        autoplay: true,
        interval: 4500,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        speed: 700,
      });
      splideInstance.current.mount();
    }

    return () => {
      if (splideInstance.current) {
        splideInstance.current.destroy();
        splideInstance.current = null;
      }
    };
  }, [slug, project.gallery]);

  const scrollToContent = () => {
    const el = document.getElementById('project-text-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24 flex flex-col justify-between">
      <div>
        {/* Header Hero Area matching merrow-croft-guildford.png */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] bg-[#9ca3af] flex items-center justify-center text-center px-4">
          <div className="space-y-3">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
              {project.title}
            </h1>
            <div className="text-xs sm:text-sm font-light text-white/90 uppercase tracking-[0.2em] font-['Montserrat',sans-serif]">
              {project.category}
            </div>
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

        {/* Text Section */}
        <div
          id="project-text-content"
          className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-6 text-neutral-700 font-light text-sm sm:text-[15px] leading-relaxed"
        >
          {project.description.map((paragraph, idx) => (
            <p
              key={idx}
              className="[&_a]:text-neutral-900 [&_a]:underline [&_a]:hover:text-black font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {/* Carousel Gallery for Project */}
          {project.gallery && project.gallery.length > 0 ? (
            <div className="pt-8 sm:pt-12">
              <div ref={splideRef} className="splide w-full aspect-[3/2] max-h-[75vh] min-h-[300px] bg-black overflow-hidden shadow-md">
                <div className="splide__track h-full">
                  <ul className="splide__list h-full">
                    {project.gallery.map((imgSrc, idx) => (
                      <li key={idx} className="splide__slide h-full">
                        <div className="w-full h-full aspect-[3/2] relative bg-neutral-900">
                          <img
                            src={imgSrc}
                            alt={`${project.title} - view ${idx + 1}`}
                            className="w-full h-full object-cover aspect-[3/2]"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            /* Photo Section when no dedicated gallery is provided */
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full aspect-[3/2] overflow-hidden shadow-sm bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-[3/2] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Previous / Next Project Bar matching screenshot */}
      <div className="border-t border-neutral-200 bg-neutral-50 py-6 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs uppercase tracking-widest text-neutral-600 font-light">
          <button
            onClick={() => navigate(`/${prevProject.slug}/`)}
            id="prev-project-btn"
            className="flex items-center space-x-2 hover:text-neutral-900 transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Previous</span>
          </button>

          <button
            onClick={() => navigate(`/${nextProject.slug}/`)}
            id="next-project-btn"
            className="flex items-center space-x-2 hover:text-neutral-900 transition-colors cursor-pointer group"
          >
            <span>Next</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
