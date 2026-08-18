import { AWARDS_LIST } from '../data/mockData';

export function AwardsPage() {
  const scrollToContent = () => {
    const el = document.getElementById('awards-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/08/Pewley-Hill-Study_sm.jpg"
          alt="Luxury Surrey Interior"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';
          }}
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Awards
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

      {/* Awards Story Section */}
      <div id="awards-content-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 text-center space-y-7">
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed font-['Montserrat',sans-serif]">
          Aspen Homes is proud to have been nationally and regionally recognised for its work in the residential property and construction sector.
        </p>

        <p className="text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          As a Surrey-based housebuilder we are particularly delighted to have received two Surrey Property Awards, the first in 2014 for our development at 50 Pewley Hill; two beautifully handcrafted six-bedroom homes in Guildford, and the second in 2016 for our development of Butterfly House also in Guildford – a beautiful five-bedroom family-home set in half an acre of stunning landscaped gardens.
        </p>

        <p className="text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          50 Pewley Hill was also awarded ‘Top Development’ at the Premier Guarantee Excellence Awards in 2014 – a nationally recognised accolade!
        </p>
      </div>

      {/* 3 Awards Grid - Each stacking 2 images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {AWARDS_LIST.map((award, index) => (
            <div
              key={award.id}
              id={`award-card-${index + 1}`}
              className="bg-neutral-900 text-white shadow-xl overflow-hidden flex flex-col border border-neutral-800 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Stacked Image 1: Development Image */}
              <div className="relative w-full aspect-[3/2] bg-neutral-950 overflow-hidden group">
                <img
                  src={award.projectImage}
                  alt={`${award.development} - ${award.title}`}
                  onError={(e) => {
                    if (award.fallbackProjectImage) {
                      (e.target as HTMLImageElement).src = award.fallbackProjectImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[11px] uppercase tracking-widest px-2.5 py-1 font-normal">
                  {award.development}
                </div>
              </div>

              {/* Stacked Image 2: Award Plaque / Certificate Image */}
              <div className="relative w-full aspect-square bg-neutral-950 overflow-hidden border-t border-neutral-800 group">
                <img
                  src={award.awardImage}
                  alt={`${award.organization} - ${award.title}`}
                  onError={(e) => {
                    if (award.fallbackAwardImage) {
                      (e.target as HTMLImageElement).src = award.fallbackAwardImage;
                    }
                  }}
                  className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
