import { NEWS_POSTS, getNewsBySlug, getLatestNews } from '../data/newsData';
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export function NewsDetailPage({ slug, navigate }: NewsDetailPageProps) {
  const post = getNewsBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-3xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-wider text-neutral-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-neutral-600 mb-8 max-w-md text-base">
          The requested news article could not be located or may have been updated.
        </p>
        <button
          onClick={() => navigate('/news/')}
          className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.2em] px-8 py-3 rounded-full transition-all duration-300"
        >
          Return to News
        </button>
      </div>
    );
  }

  // Find index for prev/next navigation
  const currentIndex = NEWS_POSTS.findIndex(
    (p) => p.slug === post.slug || p.id === post.id
  );
  const prevPost = currentIndex > 0 ? NEWS_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < NEWS_POSTS.length - 1
      ? NEWS_POSTS[currentIndex + 1]
      : null;

  const relatedPosts = getLatestNews(4).filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-28 pb-24">
      {/* Top Breadcrumb / Back Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/news/')}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-black transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all news</span>
        </button>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Information */}
        <header className="space-y-4 text-center sm:text-left">
          {post.category && (
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              <span>{post.category}</span>
            </div>
          )}

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-900 font-['Cormorant_Garamond',serif] uppercase tracking-wide leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 font-normal border-b border-neutral-200/80 pb-6">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <span>{post.formattedDate || post.date}</span>
            </div>
            {post.author && (
              <>
                <span className="text-neutral-300">&bull;</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-100 overflow-hidden shadow-xs">
            <img
              src={post.image}
              alt={post.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="prose max-w-none text-base sm:text-[18px] font-normal text-neutral-800 leading-relaxed space-y-6 pt-4">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Previous / Next Article Navigation */}
        <div className="border-t border-b border-neutral-200 py-8 my-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevPost ? (
            <button
              onClick={() => navigate(`/news/${prevPost.slug}/`)}
              className="text-left group cursor-pointer p-4 rounded-sm border border-neutral-100 hover:border-neutral-300 transition-all"
            >
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-neutral-500 mb-1">
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Previous Story</span>
              </div>
              <div className="text-sm font-medium text-neutral-900 group-hover:text-black line-clamp-2">
                {prevPost.title}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextPost && (
            <button
              onClick={() => navigate(`/news/${nextPost.slug}/`)}
              className="text-right sm:text-right group cursor-pointer p-4 rounded-sm border border-neutral-100 hover:border-neutral-300 transition-all sm:ml-auto w-full"
            >
              <div className="flex items-center justify-end space-x-2 text-xs uppercase tracking-wider text-neutral-500 mb-1">
                <span>Next Story</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-medium text-neutral-900 group-hover:text-black line-clamp-2">
                {nextPost.title}
              </div>
            </button>
          )}
        </div>
      </article>

      {/* Related News Section */}
      {relatedPosts.length > 0 && (
        <aside className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-[0.2em] text-neutral-900 mb-2">
              More Updates
            </h2>
            <div className="h-[1px] w-12 bg-neutral-300 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/news/${item.slug}/`)}
                className="bg-white group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[3/2] overflow-hidden bg-neutral-100 mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-xs text-neutral-500 mb-1">{item.formattedDate}</div>
                  <h3 className="text-base font-medium tracking-wide uppercase text-neutral-900 font-['Montserrat',sans-serif] group-hover:text-neutral-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="pt-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-800 font-medium group-hover:text-black">
                    Read Update &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
}
