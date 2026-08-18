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
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
          alt="Surrey Local Community"
          className="w-full h-full object-cover brightness-75"
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

      {/* Main Content */}
      <div id="local-community-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
        <h2 className="text-lg sm:text-xl font-normal text-neutral-900 tracking-wide font-['Montserrat',sans-serif]">
          Proudly Rooted in Surrey Heritage and Community Life
        </h2>

        <div className="space-y-6 text-xs sm:text-sm font-light text-neutral-600 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>
            As a local Guildford-based housebuilder, we believe that development must serve the long-term benefit of the wider community. We work actively with parish councils, local residents, schools, and environmental groups across Guildford, Merrow, Farnham, and surrounding Surrey villages.
          </p>

          <p>
            During construction, we implement rigorous clean-site protocols, maintain continuous communication with adjacent neighbours, and invest in local infrastructure, s106 community contributions, and local artisan supply chains.
          </p>
        </div>
      </div>
    </div>
  );
}
