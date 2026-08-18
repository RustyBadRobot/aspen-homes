import { useState } from 'react';
import { NEWS_POSTS, getNewsBySlug, getLatestNews } from '../data/newsData';
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight, Facebook, Linkedin, Twitter, Share2, Link2, Check } from 'lucide-react';

interface NewsDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export function NewsDetailPage({ slug, navigate }: NewsDetailPageProps) {
  const [copied, setCopied] = useState(false);
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

  const articleUrl = typeof window !== 'undefined' ? window.location.href : `https://aspen-homes.co.uk/news/${post.slug}/`;

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareX = () => {
    const text = `${post.title} | Aspen Homes`;
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=600');
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <button
          onClick={() => navigate('/news/')}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-black transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all news</span>
        </button>

        {/* Header Social Share Icons */}
        <div className="flex items-center space-x-2">
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium hidden sm:inline mr-1">
            Share:
          </span>
          <button
            onClick={handleShareFacebook}
            title="Share on Facebook"
            aria-label="Share on Facebook"
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#1877F2] text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Facebook className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleShareX}
            title="Share on X"
            aria-label="Share on X"
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-black text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Twitter className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleShareLinkedIn}
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#0A66C2] text-neutral-600 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Information */}
        <header className="space-y-4 text-center sm:text-left">
          {post.category && (
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              <span>{Array.isArray(post.category) ? post.category.join(', ') : post.category}</span>
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
        {post.image && post.image.trim() !== '' && (
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

        {/* Social Share Callout Box */}
        <div className="bg-neutral-50 border border-neutral-200/80 p-5 sm:p-6 rounded-xs mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 flex items-center space-x-2">
                <Share2 className="w-3.5 h-3.5 text-neutral-500" />
                <span>Share this article</span>
              </div>
              <p className="text-xs text-neutral-500">
                Share this update with your network or contacts
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Share on Facebook */}
              <button
                onClick={handleShareFacebook}
                id="share-facebook-btn"
                className="inline-flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-[#1877F2] text-neutral-800 hover:text-white border border-neutral-200 hover:border-[#1877F2] rounded-xs text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </button>

              {/* Share on X */}
              <button
                onClick={handleShareX}
                id="share-x-btn"
                className="inline-flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-black text-neutral-800 hover:text-white border border-neutral-200 hover:border-black rounded-xs text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>X</span>
              </button>

              {/* Share on LinkedIn */}
              <button
                onClick={handleShareLinkedIn}
                id="share-linkedin-btn"
                className="inline-flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-[#0A66C2] text-neutral-800 hover:text-white border border-neutral-200 hover:border-[#0A66C2] rounded-xs text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                id="share-copy-link-btn"
                className={`inline-flex items-center space-x-2 px-3.5 py-2 border rounded-xs text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shadow-2xs ${
                  copied
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
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
                  {item.image && item.image.trim() !== '' && (
                    <div className="w-full aspect-[3/2] overflow-hidden bg-neutral-100 mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
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
