export function AspenLeafIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Aspen Homes leaf emblem"
    >
      <defs>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="35%" stopColor="#d1d5db" />
          <stop offset="70%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
        <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#subtleGlow)">
        {/* Central stem */}
        <path
          d="M50 8 C49.5 35 49.5 65 50 92"
          stroke="#4b5563"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Top tip */}
        <path
          d="M50 8 C46 15 45 22 50 26 C55 22 54 15 50 8 Z"
          fill="url(#silverGrad)"
        />
        {/* Left tier 1 */}
        <path
          d="M48 20 C36 22 26 28 22 36 C30 38 42 34 48 30 Z"
          fill="url(#silverGrad)"
        />
        {/* Right tier 1 */}
        <path
          d="M52 20 C64 22 74 28 78 36 C70 38 58 34 52 30 Z"
          fill="url(#silverGrad)"
        />
        {/* Left tier 2 */}
        <path
          d="M48 34 C32 38 20 46 18 56 C28 58 40 52 48 44 Z"
          fill="url(#silverGrad)"
        />
        {/* Right tier 2 */}
        <path
          d="M52 34 C68 38 80 46 82 56 C72 58 60 52 52 44 Z"
          fill="url(#silverGrad)"
        />
        {/* Left tier 3 */}
        <path
          d="M48 48 C34 54 24 64 22 74 C32 74 42 66 48 58 Z"
          fill="url(#silverGrad)"
        />
        {/* Right tier 3 */}
        <path
          d="M52 48 C66 54 76 64 78 74 C68 74 58 66 52 58 Z"
          fill="url(#silverGrad)"
        />
        {/* Left tier 4 */}
        <path
          d="M48 62 C38 68 30 76 28 84 C38 82 44 76 48 70 Z"
          fill="url(#silverGrad)"
        />
        {/* Right tier 4 */}
        <path
          d="M52 62 C62 68 70 76 72 84 C62 82 56 76 52 70 Z"
          fill="url(#silverGrad)"
        />
        {/* Base stem */}
        <path
          d="M49 84 C48.5 87 48.5 90 49 93 L51 93 C51.5 90 51.5 87 51 84 Z"
          fill="url(#silverGrad)"
        />
      </g>
    </svg>
  );
}

interface AspenLogoProps {
  onClick?: () => void;
  className?: string;
  imageSrc?: string;
}

export function AspenLogo({
  onClick,
  className = '',
  imageSrc = '/images/2017/08/Aspen_Homes_Logo_white-grey.png',
}: AspenLogoProps) {
  return (
    <button
      onClick={onClick}
      id="aspen-header-logo-btn"
      className={`flex flex-col items-center justify-center text-center cursor-pointer group focus:outline-none ${className}`}
      aria-label="Aspen Homes Home"
    >
      <img
        src={imageSrc}
        alt="Aspen Homes"
        className="h-10 sm:h-12 md:h-22 w-auto object-contain max-w-[220px] sm:max-w-[280px] transition-opacity duration-300"
        referrerPolicy="no-referrer"
      />
    </button>
  );
}
