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
            {/* Menu Toggle Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              id="header-menu-toggle-btn"
              className="text-white/90 hover:text-white p-1.5 focus:outline-none cursor-pointer flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Sliding Navigation Overlay */}
      <div
        id="navigation-drawer-overlay"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-between max-w-4xl mx-auto px-6 pt-28 pb-12 overflow-y-auto">
          <div className="flex flex-col items-center justify-center my-auto space-y-3 sm:space-y-4 text-center">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path !== '/' && currentPath.startsWith(item.path.replace(/\/$/, '')));

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  id={`nav-item-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`text-base sm:text-xl md:text-2xl font-light tracking-[0.18em] transition-all duration-300 uppercase py-1 px-4 relative group cursor-pointer ${
                    isActive
                      ? 'text-white font-normal'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-white transition-all duration-300 ${
                      isActive ? 'w-12' : 'w-0 group-hover:w-8'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Menu Drawer Footer Contact Info */}
          <div className="border-t border-white/10 pt-6 text-center text-xs sm:text-sm text-neutral-400 font-light tracking-wider space-y-2">
            <p>01483 614302 &nbsp;|&nbsp; info@aspen-homes.co.uk</p>
            <p className="text-neutral-400">43 Meads Road, Guildford, Surrey GU1 2NA</p>
          </div>
        </div>
      </div>
    </>
  );
}
