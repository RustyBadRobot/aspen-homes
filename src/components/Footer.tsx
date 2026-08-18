interface FooterProps {
  navigate: (path: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-black text-white/70 py-6 border-t border-neutral-900 text-xs sm:text-sm font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center text-center gap-4">
        <div className="tracking-wide text-neutral-300">
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
      </div>
    </footer>
  );
}
