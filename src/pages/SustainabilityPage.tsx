export function SustainabilityPage() {
  const scrollToContent = () => {
    const el = document.getElementById('sustainability-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2022/01/noah-buscher-x8ZStukS2PM-unsplash.jpg"
          alt="Sustainability & Modern Construction"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            Sustainability
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
      <div id="sustainability-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed font-['Montserrat',sans-serif]">
          We strive to make sure all of our developments are sustainable and environmentally friendly. We look to build solid, traditional houses but with the environment in mind.
        </h2>

        <div className="space-y-6 text-base sm:text-[17px] font-normal text-neutral-700 leading-relaxed text-left max-w-3xl mx-auto">
          <p>On all of our developments we liaise with a professional energy consultant to look at the fabric of our buildings to ensure we are using the latest advancements in insulation, ventilation and renewable energies. We always look to push the boundaries and exceed standard practice so our houses are not only sustainable for the future but they are also more economical to run. In terms of our environmental approach we would look to landscape the communal areas and gardens in such a way that it protects and enhances the biodiversity of the area. We would look to add log piles and specific planting to suitable areas of the site to encourage wildlife to remain within the area. We would also ensure that lighting within the development would be downward facing and softened in communal areas so any bat roosts would not be affected as well as ensuring their flight paths are maintained. Obviously, every site is different and if we are in a position to move forward with a planning application we would seek to use our ecologist to provide site specific solutions and ideas.</p>
          <p>In addition to the above we have also been looking at sustainability as a whole, in respect to the overall running of our business as well as improving and identifying ways to create higher levels of sustainability within our developments. Sustainability is paramount to the ongoing contribution we can make to our environment as well as welfare for the individuals within our business and network. It is an ethos that we want to be ingrained within our business to enhance how we operate as a whole. Sustainability focuses on three main areas as covered by the term ESG, Environmental, Social &amp; Governance. All are equally important in ensuring we deliver sustainability throughout the whole of our business. Environmental elements focuses on carbon emissions, renewables, waste, water efficiency, air quality etc. Social aspects focuses on safety &amp; well-being, diversity, product safety, responsible sourcing, education etc. Governance elements focuses on business ethics, legal compliance, political lobbying.</p>
          <p>As a company Aspen homes is committed to enhanced sustainability across all of our developments and as such have listed below an example of how we look to achieve this within our proposals.</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-base text-neutral-700 font-normal">
            <li>An increase in renewable energy on site, above the recommended standard.</li>
            <li>The use of triple glazed windows to all of the new houses to increase the thermal performance.</li>
            <li>The air tightness of our houses is vitally important and measures are put in place to seal the houses throughout the construction process so we can minimise any air leakage once the houses have been completed.</li>
            <li>The increased movement of fresh air within the property through enhanced ventilation, mechanically and through trickle vents.</li>
            <li>Increased Water Efficiency on site through reduced flow rates from taps and showers through air performance showers and fittings.</li>
            <li>EV charging points to encourage the use of electric cars.</li>
            <li>Highly energy efficient appliances – A** rating</li>
            <li>Enhanced insulation within the cavity, floor and roof of all houses.</li>
            <li>Responsibly sourced materials where we look at the carbon footprint of the materials coming into our site. We have a focus on sourcing materials locally.</li>
            <li>Sustainable urban drainage systems (SUD’s) where applicable within each development.</li>
            <li>Waste management is conducted throughout the development to ensure waste leaving site is recycled wherever possible.</li>
            <li>Assessing the sustainability of our suppliers and contractors to ensure they are also looking at enhancing sustainability within their business.</li>
            <li>We continuously look at evolving technologies and methods of construction to see if we feel there are any appropriate measures we can take to further enhance the sustainability our developments.</li>
            <li>Ensure all timber used on site is responsible and sustainably sourced.</li>
            <li>Enhanced biodiversity, to include nature habitats and wildflower areas to ensure local wildlife can flourish.</li>
            <li>Protective measures are put in place on sites to ensure all wildlife is preserved during the construction process.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
