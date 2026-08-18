import { useState, useEffect } from 'react';
import { AspenLogo } from './AspenLogo';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../data/mockData';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export function Header({ currentPath, navigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10'
            : 'bg-black/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 flex items-center justify-between">
          {/* Left Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 w-1/4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aspen Homes on Facebook"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm font-semibold"
            >
              f
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aspen Homes on X"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aspen Homes on LinkedIn"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 text-[10px] sm:text-xs font-semibold"
            >
              in
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <AspenLogo onClick={() => handleNavClick('/')} />
          </div>

          {/* Right Action Icons (Menu Toggle) */}
          <div className="flex items-center justify-end space-x-3 sm:space-x-5 w-1/4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              id="header-menu-toggle-btn"
              className="text-white/90 hover:text-white p-2 focus:outline-none cursor-pointer flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            >
              <span
                className={`block h-[1.5px] w-6 bg-white transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-white transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Architectural Navigation Overlay */}
      <div
        id="navigation-drawer-overlay"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-between max-w-4xl mx-auto px-6 pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-y-auto no-scrollbar">
          {/* Centered Navigation Links List */}
          <div className="flex flex-col items-center justify-center my-auto py-2 sm:py-4 space-y-1 sm:space-y-2 md:space-y-2.5 text-center">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path !== '/' && currentPath.startsWith(item.path.replace(/\/$/, '')));

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  id={`nav-item-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-[0.18em] sm:tracking-[0.22em] transition-all duration-300 uppercase py-1 px-3 sm:px-4 relative group cursor-pointer font-['Montserrat',sans-serif] ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-300 inline-block group-hover:scale-105">
                    {item.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-white transition-all duration-300 ${
                      isActive ? 'w-10 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-80'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Menu Drawer Footer Contact Info */}
          <div className="border-t border-white/10 pt-4 sm:pt-5 text-center text-xs sm:text-sm text-neutral-400 font-normal tracking-wider space-y-1">
            <p>
              <a href="tel:01483614302" className="hover:text-white transition-colors">
                01483 614302
              </a>
              <span className="mx-2 text-neutral-600">&bull;</span>
              <a href="mailto:info@aspen-homes.co.uk" className="hover:text-white transition-colors">
                info@aspen-homes.co.uk
              </a>
            </p>
            <p className="text-neutral-500 text-xs">
              43 Meads Road, Guildford, Surrey GU1 2NA
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


