import { FEATURED_PROJECTS } from '../data/mockData';

interface PortfolioPageProps {
  navigate: (path: string) => void;
  title?: string;
}

export function PortfolioPage({ navigate, title = 'Current Developments' }: PortfolioPageProps) {
  const scrollToContent = () => {
    const el = document.getElementById('portfolio-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header matching portfolio.png */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
          alt="Surrey Landscape Developments"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            {title}
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

      {/* Grid of Developments with hover effect */}
      <div id="portfolio-grid-section" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => navigate(`/${proj.slug}/`)}
              id={`portfolio-item-${proj.id}`}
              className="group relative w-full aspect-[3/2] overflow-hidden cursor-pointer bg-neutral-900"
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                className="w-full h-full object-cover aspect-[3/2] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Persistent / Hover Info Panel matching screenshot */}
              <div className="absolute inset-0 bg-[#2d3032]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 sm:p-12 text-white">
                <div className="max-w-md">
                  <h3 className="text-xl sm:text-2xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.2em] mb-2">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-light text-neutral-300 tracking-widest uppercase mb-4">
                    {proj.category}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed mb-6">
                    {proj.summary}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white border-b border-white pb-1 group-hover:border-neutral-300">
                    <span>Explore Development</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
