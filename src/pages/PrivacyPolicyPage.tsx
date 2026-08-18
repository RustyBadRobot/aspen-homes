export function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8 text-neutral-800">
        <div className="border-b border-neutral-200 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-wider text-neutral-900">
            Privacy &amp; Cookie Policy
          </h1>
          <p className="text-xs text-neutral-500 font-light mt-2 uppercase tracking-widest">
            Aspen Homes Ltd &bull; Last updated {new Date().getFullYear()}
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm font-light leading-relaxed text-neutral-600">
          <section className="space-y-2">
            <h2 className="text-base font-medium uppercase tracking-wide text-neutral-900 font-['Montserrat',sans-serif]">
              1. Information We Collect
            </h2>
            <p>
              Aspen Homes Ltd collects personal information that you provide directly to us when making an enquiry, requesting brochures, or contacting our team regarding land acquisition and developments. This may include your name, email address, telephone number, and postal address.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-medium uppercase tracking-wide text-neutral-900 font-['Montserrat',sans-serif]">
              2. Use of Your Information
            </h2>
            <p>
              We process personal data to respond to your specific enquiries, administer customer care, send updates regarding developments you have expressed interest in, and meet legal and regulatory obligations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-medium uppercase tracking-wide text-neutral-900 font-['Montserrat',sans-serif]">
              3. Cookies and Tracking
            </h2>
            <p>
              This website uses essential cookies to ensure site functionality and anonymous analytical cookies to measure site traffic and optimize user experience. You may modify your browser settings to reject cookies at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-medium uppercase tracking-wide text-neutral-900 font-['Montserrat',sans-serif]">
              4. Contacting the Data Protection Officer
            </h2>
            <p>
              For questions regarding this policy or to request removal of your personal information, please write to: Aspen Homes Ltd, 43 Meads Road, Guildford, Surrey, GU1 2NA or email <a href="mailto:info@aspen-homes.co.uk" className="underline text-neutral-900 font-normal">info@aspen-homes.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
