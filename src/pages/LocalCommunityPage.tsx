import { COMMUNITY_LIST } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

export function LocalCommunityPage() {
  const scrollToContent = () => {
    const el = document.getElementById('local-community-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/09/Chestnut-House-Gates_sm.jpg"
          alt="Surrey Local Community"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80';
          }}
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Local Community
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

      {/* Intro Narrative Section */}
      <div id="local-community-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center space-y-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed font-['Montserrat',sans-serif]">
          Proudly Rooted in Surrey Heritage and Community Life
        </h2>
        <p className="text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          As a local Surrey-based housebuilder, we are committed to making a meaningful, positive contribution to the towns, charities, and neighbourhoods in which we live and build.
        </p>
      </div>

      {/* Community Initiatives List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16 sm:space-y-24">
        {COMMUNITY_LIST.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article
              key={item.id}
              id={`community-${item.id}`}
              className="bg-white border border-neutral-200/80 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Column */}
                <div className={`lg:col-span-5 relative bg-neutral-900 min-h-[260px] sm:min-h-[340px] overflow-hidden ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      if (item.fallbackImage) {
                        (e.target as HTMLImageElement).src = item.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-normal block mb-2">
                      Community &amp; Charity Support
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-wider text-neutral-900 leading-tight">
                      {item.title}
                    </h3>
                    <div className="h-[1px] w-12 bg-neutral-300 mt-3" />
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed">
                    {item.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Testimonial Quote if present */}
                  {item.quote && (
                    <blockquote className="bg-neutral-50 border-l-2 border-neutral-800 p-4 sm:p-5 mt-4 space-y-2 text-neutral-800">
                      <p className="text-sm sm:text-base italic leading-relaxed text-neutral-700">
                        {item.quote.text}
                      </p>
                      {item.quote.author && (
                        <cite className="block text-xs uppercase tracking-wider text-neutral-500 not-italic font-medium">
                          — {item.quote.author}
                        </cite>
                      )}
                    </blockquote>
                  )}

                  {/* External Link if present */}
                  {item.link && (
                    <div className="pt-2">
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:text-black hover:border-black transition-colors"
                      >
                        <span>Visit {item.link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

