import { useState, useMemo } from 'react';
import { FEATURED_PROJECTS, NEWS_POSTS, TEAM_MEMBERS, AWARDS_LIST } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
}

export function SearchModal({ isOpen, onClose, navigate }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: Array<{ title: string; type: string; snippet: string; path: string }> = [];

    // Projects
    FEATURED_PROJECTS.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
      ) {
        results.push({
          title: p.title,
          type: p.category,
          snippet: p.summary,
          path: `/${p.slug}/`,
        });
      }
    });

    // News
    NEWS_POSTS.forEach((n) => {
      if (n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)) {
        results.push({
          title: n.title,
          type: 'News Update',
          snippet: n.summary,
          path: '/news/',
        });
      }
    });

    // Team
    TEAM_MEMBERS.forEach((t) => {
      if (t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q) || t.bio.toLowerCase().includes(q)) {
        results.push({
          title: `${t.name} - ${t.role}`,
          type: 'Team Member',
          snippet: t.bio,
          path: '/about-us/',
        });
      }
    });

    // Awards
    AWARDS_LIST.forEach((a) => {
      if (a.title.toLowerCase().includes(q) || a.development.toLowerCase().includes(q)) {
        results.push({
          title: a.title,
          type: 'Award',
          snippet: a.description,
          path: '/awards/',
        });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start justify-center pt-24 sm:pt-32 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#1c1c1c] border border-neutral-700 shadow-2xl p-6 rounded-none text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-700 pb-4">
          <div className="flex items-center space-x-3 w-full">
            <svg
              className="w-6 h-6 text-neutral-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Aspen Homes developments, updates, team..."
              id="search-site-input"
              className="w-full bg-transparent text-lg text-white placeholder-neutral-500 focus:outline-none font-light"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            id="close-search-btn"
            className="text-neutral-400 hover:text-white transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-2">
          {query.trim() && searchResults.length === 0 ? (
            <p className="text-sm text-neutral-400 py-6 text-center">
              No results found for &ldquo;{query}&rdquo;.
            </p>
          ) : searchResults.length > 0 ? (
            searchResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="w-full text-left p-3 hover:bg-neutral-800 transition-colors border-b border-neutral-800 last:border-0 group cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span className="uppercase tracking-widest text-[10px] text-neutral-300">
                    {item.type}
                  </span>
                  <span className="group-hover:text-white transition-colors">View →</span>
                </div>
                <div className="text-sm font-medium text-neutral-100 group-hover:text-white">
                  {item.title}
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 mt-1 font-light">
                  {item.snippet}
                </p>
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-neutral-300 font-light space-y-2">
              <p>Try searching for: <span className="text-neutral-200">Merrow Croft</span>, <span className="text-neutral-200">Horseshoe Lane</span>, <span className="text-neutral-200">Pewley Hill</span>, or <span className="text-neutral-200">Awards</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
