import React, { useState } from 'react';
import { NEWS_POSTS } from '../data/newsData';
import { ChevronLeft, ChevronRight, Facebook, Linkedin, Twitter } from 'lucide-react';

interface NewsPageProps {
  navigate: (path: string) => void;
}

const ITEMS_PER_PAGE = 12;

export function NewsPage({ navigate }: NewsPageProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Chronological latest-first list
  const allPosts = NEWS_POSTS.slice().reverse();
  const totalPages = Math.ceil(allPosts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getArticleUrl = (slug: string) => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/news/${slug}/`;
    }
    return `https://aspen-homes.co.uk/news/${slug}/`;
  };

  const handleShareFacebook = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getArticleUrl(slug))}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareX = (e: React.MouseEvent, slug: string, title: string) => {
    e.stopPropagation();
    const text = `${title} | Aspen Homes`;
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(getArticleUrl(slug))}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareLinkedIn = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getArticleUrl(slug))}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=600');
  };

  // Generate visible page numbers with ellipsis support
  const getPaginationItems = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-28 pb-20">
      {/* News Grid Section */}
      <div id="news-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em] text-neutral-900 mb-3">
            Latest News
          </h1>
          <div className="h-[1px] w-16 bg-neutral-300 mx-auto" />
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-3 uppercase tracking-widest">
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, allPosts.length)} of {allPosts.length} updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => navigate(`/news/${post.slug}/`)}
              id={`news-card-${post.id}`}
              className="bg-white flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {post.image && post.image.trim() !== '' && (
                  <div className="w-full aspect-[3/2] overflow-hidden bg-neutral-100 relative mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <h2 className="text-base sm:text-lg font-medium tracking-wide uppercase text-neutral-900 font-['Montserrat',sans-serif] group-hover:text-neutral-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <div className="text-xs text-neutral-500 font-normal mt-1.5 mb-2">
                  {post.formattedDate || post.date}
                </div>

                <p className="text-sm sm:text-base font-normal text-neutral-700 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-neutral-100 mt-4">
                <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-neutral-800 font-medium group-hover:text-black transition-colors">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>

                <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => handleShareFacebook(e, post.slug)}
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                    className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-[#1877F2] text-neutral-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Facebook className="w-3 h-3" />
                  </button>
                  <button
                    onClick={(e) => handleShareX(e, post.slug, post.title)}
                    title="Share on X"
                    aria-label="Share on X"
                    className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-black text-neutral-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Twitter className="w-3 h-3" />
                  </button>
                  <button
                    onClick={(e) => handleShareLinkedIn(e, post.slug)}
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                    className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-[#0A66C2] text-neutral-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Linkedin className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Navigation */}
        {totalPages > 1 && (
          <nav
            aria-label="News pagination"
            className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-200/80 pt-8 gap-4"
          >
            <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center space-x-1 sm:space-x-1.5">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                id="news-pagination-prev"
                className={`inline-flex items-center space-x-1 px-3 py-2 rounded-xs text-xs uppercase tracking-wider font-medium transition-colors ${
                  currentPage === 1
                    ? 'text-neutral-300 cursor-not-allowed'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Numbers */}
              {getPaginationItems().map((item, idx) => {
                if (item === '...') {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
                      className="px-2 py-1.5 text-xs text-neutral-400 select-none"
                    >
                      &hellip;
                    </span>
                  );
                }

                const pageNum = Number(item);
                const isActive = pageNum === currentPage;

                return (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-w-[34px] h-[34px] flex items-center justify-center text-xs font-medium uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-black'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                id="news-pagination-next"
                className={`inline-flex items-center space-x-1 px-3 py-2 rounded-xs text-xs uppercase tracking-wider font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'text-neutral-300 cursor-not-allowed'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100 cursor-pointer'
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
