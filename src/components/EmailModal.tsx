import React, { useState } from 'react';

interface EmailModalProps {
  isOpen: boolean;
  recipientName: string;
  recipientEmail: string;
  onClose: () => void;
}

export function EmailModal({
  isOpen,
  recipientName,
  recipientEmail,
  onClose,
}: EmailModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      onClose();
    }, 2200);
  };

  return (
    <div
      id="email-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#181818] border border-neutral-700 shadow-2xl p-6 sm:p-8 text-white relative rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          id="close-email-modal-btn"
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-normal mb-1">
            Aspen Homes Surrey
          </div>
          <h3 className="text-xl sm:text-2xl font-normal font-['Cormorant_Garamond',serif] uppercase text-white tracking-widest">
            {recipientName ? `Contact ${recipientName}` : 'Enquire With Aspen Homes'}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 font-normal">
            Directly contacting: <span className="text-neutral-200">{recipientEmail}</span>
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full border border-green-500/40 bg-green-500/10 flex items-center justify-center mx-auto text-green-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base font-normal text-white">Thank you for your message.</p>
            <p className="text-xs text-neutral-400 font-normal">Our team will be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm font-normal">
            <div>
              <label htmlFor="contact-form-name" className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-normal">
                Your Full Name *
              </label>
              <input
                id="contact-form-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Eleanor Vance"
                className="w-full bg-[#222222] border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-form-email" className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-normal">
                  Email Address *
                </label>
                <input
                  id="contact-form-email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@example.com"
                  className="w-full bg-[#222222] border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors text-base"
                />
              </div>

              <div>
                <label htmlFor="contact-form-phone" className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-normal">
                  Phone Number
                </label>
                <input
                  id="contact-form-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07123 456789"
                  className="w-full bg-[#222222] border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-form-message" className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-normal">
                Message / Enquiry Details *
              </label>
              <textarea
                id="contact-form-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please let us know how we can assist you..."
                className="w-full bg-[#222222] border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none text-base font-normal"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="send-enquiry-submit-btn"
                className="w-full bg-[#333333] hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-medium py-3 border border-neutral-600 hover:border-white transition-all duration-300 cursor-pointer"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
