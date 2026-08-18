interface CustomerServicePageProps {
  navigate: (path: string) => void;
}

export function CustomerServicePage({ navigate }: CustomerServicePageProps) {
  const scrollToContent = () => {
    const el = document.getElementById('customer-service-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Aspen Homes Customer Care"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Customer Service
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
      <div id="customer-service-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
        <h2 className="text-lg sm:text-xl font-normal text-neutral-900 tracking-wide font-['Montserrat',sans-serif]">
          Dedicated Care Before, During, and Long After Key Handover
        </h2>

        <div className="space-y-6 text-xs sm:text-sm font-light text-neutral-600 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>
            Purchasing an Aspen Home is an exceptional milestone, and we believe our relationship with our purchasers is paramount. From your initial reservation right through to moving day and beyond, our directors and customer care team are directly reachable.
          </p>

          <p>
            Every Aspen Home comes backed with a comprehensive 10-Year Premier Guarantee or NHBC structural warranty, accompanied by our dedicated 2-year Aspen developer warranty covering all fixtures, fittings, and mechanical installations.
          </p>

          <p>
            On completion, you receive a full bespoke Homeowner Demonstration, comprehensive digital and printed handover manuals, and direct emergency contact protocols for 24/7 peace of mind.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => navigate('/contact-us/')}
            className="bg-[#b3b8bc] hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.25em] px-8 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
          >
            Contact Customer Care
          </button>
        </div>
      </div>
    </div>
  );
}
