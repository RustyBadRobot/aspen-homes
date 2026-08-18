import { useState } from 'react';
import { NEWS_POSTS } from '../data/mockData';
import { NewsPost } from '../types';
import { ArticleModal } from '../components/ArticleModal';

interface NewsPageProps {
  navigate: (path: string) => void;
}

export function NewsPage({ navigate }: NewsPageProps) {
  const [selectedPost, setSelectedPost] = useState<NewsPost | null>(null);

  const scrollToContent = () => {
    const el = document.getElementById('news-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24">
      {/* Hero Header matching news.png */}
      <div className="relative w-full aspect-[3/2] max-h-[60vh] min-h-[300px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=85"
          alt="Horseshoe Lane West Site"
          className="w-full h-full object-cover aspect-[3/2] brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.2em] max-w-3xl">
            Horseshoe Lane West Updates
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

      {/* News Grid Section matching news.png */}
      <div id="news-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {NEWS_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              id={`news-card-${post.id}`}
              className="bg-white flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-full aspect-[3/2] overflow-hidden bg-neutral-100 relative mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-medium tracking-wide uppercase text-neutral-900 font-['Montserrat',sans-serif] group-hover:text-neutral-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <div className="text-xs text-neutral-500 font-normal mt-1.5 mb-2">
                  {post.formattedDate}
                </div>

                <p className="text-sm sm:text-base font-normal text-neutral-700 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4">
                <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-neutral-800 font-medium group-hover:text-black transition-colors">
                  <span>Read More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        navigate={navigate}
      />
    </div>
  );
}
