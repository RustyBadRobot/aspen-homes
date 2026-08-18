import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/mockData';

export function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  const scrollToContent = () => {
    const el = document.getElementById('contact-content-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header matching contact-us.png */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Aspen Homes Architecture"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.2em] text-neutral-900 mb-4">
                Aspen Homes Ltd
              </h2>
              <address className="not-italic text-sm text-neutral-600 font-light leading-relaxed space-y-1">
                <p>43 Meads Road</p>
                <p>Guildford</p>
                <p>Surrey</p>
                <p>GU1 2NA</p>
              </address>
            </div>

            <div className="space-y-2 text-sm text-neutral-600 font-light">
              <p>
                <strong className="font-normal text-neutral-800 uppercase text-xs tracking-wider">Telephone:</strong>{' '}
                <a href="tel:01483614302" className="hover:text-black transition-colors">
                  01483 614302
                </a>
              </p>
              <p>
                <strong className="font-normal text-neutral-800 uppercase text-xs tracking-wider">Email:</strong>{' '}
                <a href="mailto:info@aspen-homes.co.uk" className="hover:text-black transition-colors">
                  info@aspen-homes.co.uk
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-neutral-500 font-light mb-3">
                Follow Us
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aspen Homes Facebook"
                  className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all text-xs font-semibold"
                >
                  f
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aspen Homes on X"
                  className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all text-xs"
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
                  className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition-all text-[10px] font-semibold"
                >
                  in
                </a>
              </div>
            </div>

            {/* Map representation */}
            <div className="pt-4">
              <div className="w-full h-48 bg-neutral-100 border border-neutral-200 overflow-hidden relative shadow-inner flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                    Guildford, Surrey Office
                  </div >
                  <p className="text-xs text-neutral-400 font-light">43 Meads Road &bull; GU1 2NA</p>
                  <a
                    href="https://maps.google.com/?q=43+Meads+Road+Guildford+Surrey+GU1+2NA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[11px] uppercase tracking-wider text-neutral-700 hover:text-black underline font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 bg-neutral-50 p-8 sm:p-10 border border-neutral-200">
            <h3 className="text-lg font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.2em] text-neutral-900 mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-green-500 bg-green-50 flex items-center justify-center mx-auto text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-base font-medium text-neutral-900">Message Received</h4>
                <p className="text-xs text-neutral-600 font-light max-w-sm mx-auto">
                  Thank you for reaching out to Aspen Homes. We will respond to your enquiry as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm font-light">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-page-name" className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5">
                      Name *
                    </label>
                    <input
                      id="contact-page-name"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-page-email" className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-page-email"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-page-phone" className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5">
                      Telephone Number
                    </label>
                    <input
                      id="contact-page-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01483 ..."
                      className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-page-subject" className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-page-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Development enquiry / Land opportunity"
                      className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-page-message" className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-page-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-page-btn"
                  className="bg-[#2d3032] hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-medium px-8 py-3.5 transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
