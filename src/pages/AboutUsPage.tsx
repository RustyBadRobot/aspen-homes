import { useState } from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { TeamMember } from '../types';
import { EmailModal } from '../components/EmailModal';

export function AboutUsPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Aspen Homes Architecture"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between text-left p-2 sm:p-4"
            >
              <div>
                <h3 className="text-base sm:text-lg font-normal tracking-[0.2em] uppercase text-neutral-900 font-['Montserrat',sans-serif]">
                  {member.name}
                </h3>
                <div className="text-xs font-light text-neutral-500 tracking-wider mt-1 mb-4">
                  {member.role}
                </div>
                <p className="text-xs sm:text-[13px] font-light text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setSelectedMember(member)}
                  id={`email-team-btn-${member.id}`}
                  className="bg-[#b3b8bc] hover:bg-neutral-700 text-white hover:text-white text-[11px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                >
                  Email {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {selectedMember && (
        <EmailModal
          isOpen={!!selectedMember}
          recipientName={selectedMember.name}
          recipientEmail={selectedMember.email}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
