import { NEWS_POSTS } from '../data/newsData';

interface NewsPageProps {
  navigate: (path: string) => void;
}

export function NewsPage({ navigate }: NewsPageProps) {
  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-28 pb-20">
      {/* News Grid Section */}
      <div id="news-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.25em] text-neutral-900 mb-3">
            Latest News
          </h1>
          <div className="h-[1px] w-16 bg-neutral-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {NEWS_POSTS.slice().reverse().map((post) => (
            <article
              key={post.id}
              onClick={() => navigate(`/news/${post.slug}/`)}
              id={`news-card-${post.id}`}
              className="bg-white flex flex-col justify-between group cursor-pointer"
            >
              <div>
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
                  {post.category && (
                    <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      {post.category}
                    </span>
                  )}
                </div>

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

              <div className="pt-4">
                <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-neutral-800 font-medium group-hover:text-black transition-colors">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
