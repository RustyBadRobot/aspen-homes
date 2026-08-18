import { SOCIAL_LINKS } from '../data/mockData';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export function ContactUsPage() {
  const scrollToContent = () => {
    const el = document.getElementById('contact-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header matching contact-us.png */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/09/Pinehurst-Front_sm.jpg"
          alt="Aspen Homes Contact Us"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Contact Us
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
      <div id="contact-content-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-neutral-50/70 p-8 sm:p-10 border border-neutral-200">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.2em] text-neutral-900">
                  Aspen Homes
                </h2>
                <div className="w-10 h-[1px] bg-neutral-300 mt-3" />
              </div>

              <div className="flex items-start space-x-3 text-neutral-700 font-normal">
                <MapPin className="w-4 h-4 text-neutral-500 mt-1 flex-shrink-0" />
                <address className="not-italic text-base leading-relaxed text-neutral-800">
                  <p className="font-medium text-neutral-900">43 Meads Road</p>
                  <p>Guildford</p>
                  <p>Surrey</p>
                  <p>GU1 2NA</p>
                </address>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-200/80">
                <div className="flex items-center space-x-3 text-base font-normal text-neutral-800">
                  <Phone className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 block font-normal">Telephone</span>
                    <a href="tel:01483614302" className="hover:text-black font-medium transition-colors">
                      01483 614302
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-base font-normal text-neutral-800">
                  <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 block font-normal">Email</span>
                    <a href="mailto:info@aspen-homes.co.uk" className="hover:text-black font-medium transition-colors">
                      info@aspen-homes.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & External Directions */}
            <div className="pt-6 border-t border-neutral-200/80 space-y-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-normal mb-3">
                  Connect With Us
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aspen Homes Facebook"
                    className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all text-xs font-semibold hover:bg-white shadow-xs"
                  >
                    f
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aspen Homes on X"
                    className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all text-xs hover:bg-white shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aspen Homes LinkedIn"
                    className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all text-xs font-semibold hover:bg-white shadow-xs"
                  >
                    in
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=43+Meads+Road+Guildford+Surrey+GU1+2NA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-neutral-800 hover:text-black underline font-medium pt-2 transition-colors"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Embedded Google Map */}
          <div className="lg:col-span-7 bg-neutral-100 border border-neutral-200 overflow-hidden relative min-h-[420px] sm:min-h-[500px] lg:min-h-full flex flex-col">
            <iframe
              id="google-maps-embed-contact"
              title="Aspen Homes Location - 43 Meads Road, Guildford"
              src="https://maps.google.com/maps?q=43%20Meads%20Road,%20Guildford,%20Surrey,%20GU1%202NA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', flexGrow: 1 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
