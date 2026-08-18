import { TEAM_MEMBERS } from '../data/mockData';
import { Mail, ArrowUpRight } from 'lucide-react';

export function AboutUsPage() {
  const scrollToContent = () => {
    const el = document.getElementById('about-us-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header matching about-us.png */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="/images/2017/08/Butterfly-House-Front_crop2.jpg"
          alt="Aspen Homes About Us"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em]">
            About Us
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

      {/* Main Narrative Section */}
      <div id="about-us-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center space-y-6">
        <p className="text-base sm:text-lg font-light text-neutral-800 leading-relaxed font-['Montserrat',sans-serif]">
          Aspen Homes is an established family-run business in Surrey with longstanding experience in delivering distinctive, high quality homes which provide the perfect environment for modern living.
        </p>

        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          We make sure our homes enhance the character of their locality and make a positive contribution to the street scene in which they are set.
        </p>

        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          Passionately committed to researching the latest in housing innovations, our homes combine the best new building techniques, quality interior architecture, fixtures and fittings as well as providing a contemporary design while retaining traditional values.
        </p>
      </div>

      {/* Team Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className="bg-neutral-50/60 border border-neutral-200/80 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-400/80 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <h3 className="text-base sm:text-lg font-medium tracking-[0.18em] uppercase text-neutral-900 font-['Montserrat',sans-serif]">
                  {member.name}
                </h3>
                <div className="text-xs font-light text-neutral-500 tracking-wider mt-1 mb-4">
                  {member.role}
                </div>

                <div className="w-8 h-[1px] bg-neutral-300 mb-5 group-hover:w-16 transition-all duration-500" />

                <p className="text-xs sm:text-[13px] font-light text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200/70">
                <a
                  href={`mailto:${member.email}`}
                  id={`email-team-btn-${member.id}`}
                  className="inline-flex items-center justify-center space-x-2 w-full bg-[#3c4043] hover:bg-black text-white text-[11px] uppercase tracking-[0.2em] px-5 py-3 rounded-none transition-all duration-300 shadow-sm group-hover:shadow cursor-pointer"
                  title={`Send email to ${member.email}`}
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Email {member.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
