import { useState } from 'react';
import { EmailModal } from '../components/EmailModal';

interface LandRequiredPageProps {
  navigate: (path: string) => void;
}

export function LandRequiredPage({ navigate }: LandRequiredPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContent = () => {
    const el = document.getElementById('land-required-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header matching land-required.png */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/09/Waverley-Heights_sm_crop.jpg"
          alt="Aspen Homes Development Land"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Land Required
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

      {/* Main Content Section */}
      <div id="land-required-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center space-y-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed font-['Montserrat',sans-serif] max-w-3xl mx-auto">
          As a company we are continuously looking for new development opportunities in the South East
        </h2>

        <div className="space-y-6 text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>
            At Aspen Homes we are always open to new development opportunities. So whether you are a private homeowner with a large garden, or an institution, business or school with land or buildings to spare or need to raise funds for other plans you may have, we’re always happy to provide advice as to the options available to you and take you through the complexities of the planning process. We can also assure you of our complete discretion in deciding what path best suits your needs.
          </p>

          <p>
            In all our projects we consult with the wider community to ensure that any plans meet with the approval of the local community and that subsequent planning approval can be achieved with their support rather than opposition. Our collaborative style of planning with all parties involved ensures the most beneficial and effective scheme is achieved.
          </p>

          <p>
            If you have a site with or without planning permission in the South East and would like to discuss how we can maximise the true value of your land please contact us.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            id="land-contact-btn"
            className="bg-[#b3b8bc] hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.25em] px-8 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Quick Land Enquiry Modal */}
      <EmailModal
        isOpen={isModalOpen}
        recipientName="Joe Jelley (Land Acquisition)"
        recipientEmail="info@aspen-homes.co.uk"
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
