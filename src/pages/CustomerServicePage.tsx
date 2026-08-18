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
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/08/Butterfly-House-Kitchen_sm.jpg"
          alt="Aspen Homes Customer Care"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
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
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed font-['Montserrat',sans-serif]">
          At Aspen Homes we ensure our clients receive an exemplary service which starts from the day they reserve their home, and continues long after they’ve moved in.
        </h2>

        <div className="space-y-6 text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>Everything we do is to make their experience of home-buying as seamless and stress-free as possible.</p>
          <p>Shortly before your home is ready, we undertake a full inspection of your new home and identify any remaining issues so that the day you collect the keys, you are able to start enjoying your new home as soon as you step through the door. We will also demonstrate how your home ‘works’, as well as all the appliances and leave you with a comprehensive manual as a reminder. As a hands-on niche housebuilder, we’re able to continue to provide an after-sales service long after you’ve moved in to ensure you enjoy and settle in to your new home.</p>
          <p>All of our homes are also constructed to the highest standard which is strictly monitored by a surveyor at <a href="https://www.premierguarantee.com/" target="_blank" rel="noopener noreferrer" className="underline text-neutral-900 hover:text-black">Premier Guarantee</a>, which provides a 10-year new home guarantee; please click on their logo below if you would like any further information.</p>
        </div>

        <div className="pt-6 flex justify-center">
          <a
            href="https://www.premierguarantee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
            title="Visit Premier Guarantee"
          >
            <img
              src="/images/2017/09/premier-guarantee_logo_large2.png"
              alt="Premier Guarantee - 10 Year Warranty"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://www.premierguarantee.com/media/2513/premier-guarantee-logo.svg';
              }}
              className="max-h-20 sm:max-h-24 w-auto object-contain mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
