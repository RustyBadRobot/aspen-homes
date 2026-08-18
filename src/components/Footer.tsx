interface FooterProps {
  navigate: (path: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-black text-white/70 py-6 border-t border-neutral-900 text-xs sm:text-sm font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left tracking-wide text-neutral-300">
          © {new Date().getFullYear()} Aspen Homes Ltd. All rights reserved. &nbsp;|&nbsp;{' '}
          <a href="tel:01483614302" className="hover:text-white transition-colors">
            01483 614302
          </a>{' '}
          &nbsp;|&nbsp;{' '}
          <a href="mailto:info@aspen-homes.co.uk" className="hover:text-white transition-colors">
            info@aspen-homes.co.uk
          </a>{' '}
          &nbsp;|&nbsp;{' '}
          <button
            onClick={() => navigate('/privacy-policy/')}
            className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
        </div>

        {/* PDF / Document Icon representation on bottom right as in screenshots */}
        <div className="flex items-center space-x-2 text-neutral-400">
          <button
            onClick={() => navigate('/contact-us/')}
            title="Download Brochure / Contact"
            className="hover:text-neutral-200 transition-colors p-1"
            aria-label="Aspen Homes Brochure"
          >
            <svg
              className="w-5 h-5 text-red-700/80 hover:text-red-600 transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
