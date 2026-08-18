import { useState, useEffect } from 'react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export function CookieBanner({ onOpenPrivacy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aspen_cookie_consent');
    if (!consent) {
      // Small delay for smooth entry
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aspen_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent"
      id="aspen-cookie-notice"
      className="fixed bottom-4 left-4 z-40 max-w-[280px] sm:max-w-[320px] bg-[#333333]/95 backdrop-blur-md text-white p-5 rounded-none shadow-2xl border border-neutral-700/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5"
    >
      <h2 className="text-sm font-semibold tracking-wider uppercase mb-2 text-neutral-100 font-['Montserrat',sans-serif]">
        COOKIES
      </h2>
      <p className="text-xs text-neutral-300 leading-relaxed font-normal mb-4">
        This website or its third party tools use cookies, which are necessary to its
        functioning and required to achieve the purposes illustrated in the cookie
        policy. If you want to know more or withdraw your consent to all or some of the
        cookies, please refer to the{' '}
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-white underline font-medium hover:text-neutral-200 focus:outline-none cursor-pointer"
        >
          Cookie Policy
        </button>
      </p>
      <button
        onClick={handleAccept}
        id="accept-cookies-btn"
        className="bg-black hover:bg-neutral-900 text-white text-xs font-semibold px-4 py-2 uppercase tracking-wider border border-neutral-600 hover:border-white transition-all duration-300 cursor-pointer"
      >
        I Accept
      </button>
    </aside>
  );
}
