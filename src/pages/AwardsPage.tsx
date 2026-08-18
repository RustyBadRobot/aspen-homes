export function AwardsPage() {
  const scrollToContent = () => {
    const el = document.getElementById('awards-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header matching awards.png */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/08/Pewley-Hill-Study_sm.jpg"
          alt="Luxury Surrey Interior"
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

      {/* Certificates and Award Displays matching awards.png */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Surrey Property Award Plaque */}
          <div className="bg-black text-white shadow-xl overflow-hidden flex flex-col border border-neutral-800">
            <div className="w-full aspect-[3/2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="50 Pewley Hill Guildford"
                className="w-full h-full object-cover aspect-[3/2]"
              />
            </div>
            <div className="p-8 text-center space-y-4 bg-gradient-to-b from-neutral-900 to-black">
              <div className="font-['Cormorant_Garamond',serif] text-red-600 italic text-3xl sm:text-4xl font-normal tracking-wide">
                Surrey
              </div>
              <div className="text-xs tracking-[0.25em] uppercase text-neutral-400 font-normal">
                Property Awards 2014
              </div>
              <div className="h-[1px] w-16 bg-red-600 mx-auto" />
              <div className="text-lg sm:text-xl uppercase tracking-[0.2em] font-normal text-white">
                Best New Homes Development
              </div>
              <p className="text-xs text-neutral-400 font-normal">
                50 Pewley Hill, Guildford
              </p>
            </div>
          </div>

          {/* Premier Guarantee Certificate Plaque */}
          <div className="bg-white text-neutral-900 border border-neutral-200 shadow-xl p-8 sm:p-10 flex flex-col justify-between text-center relative font-['Montserrat',sans-serif]">
            <div className="space-y-4">
              <div className="border-b-2 border-neutral-800 pb-4">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-900 font-['Cinzel',serif]">
                  EXCELLENCE
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-600 font-medium">
                  Top Developments AWARDS 2014
                </div>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-normal">
                  This is to recognise
                </p>
                <h4 className="text-lg sm:text-xl font-semibold tracking-wider uppercase text-neutral-900 font-['Cinzel',serif]">
                  ASPEN HOMES LTD
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal">
                  for their outstanding achievement on their development
                </p>
                <div className="text-base sm:text-lg font-medium tracking-wide uppercase text-neutral-800">
                  50 PEWLEY HILL
                </div>
                <p className="text-xs text-neutral-500 font-normal max-w-sm mx-auto">
                  being listed as a Premier Guarantee Excellence Awards 2014 &ldquo;Top Development&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200 flex flex-col items-center">
                <div className="font-['Cormorant_Garamond',serif] italic text-sm text-neutral-700">
                  Gary Devaney
                </div>
                <div className="text-xs text-neutral-500 tracking-wider uppercase mt-0.5 font-normal">
                  Group Chairman and CEO &bull; Premier Guarantee
                </div>
              </div>
            </div>

            {/* Geometric watermark stamp */}
            <div className="mt-6 flex justify-center opacity-80">
              <div className="h-6 w-32 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
