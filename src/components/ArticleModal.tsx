import { NewsPost } from '../types';

interface ArticleModalProps {
  post: NewsPost | null;
  onClose: () => void;
  navigate: (path: string) => void;
}

export function ArticleModal({ post, onClose, navigate }: ArticleModalProps) {
  if (!post) return null;

  return (
    <div
      id="article-read-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#181818] border border-neutral-700 shadow-2xl text-white my-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          id="close-article-modal-btn"
          aria-label="Close article"
          className="absolute top-4 right-4 z-10 bg-black/70 text-white hover:bg-black p-2 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-64 sm:h-80 w-full overflow-hidden relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-10 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-light">
            {post.formattedDate} &nbsp;|&nbsp; Horseshoe Lane West Updates
          </div>
          <h3 className="text-2xl sm:text-3xl font-light font-['Cormorant_Garamond',serif] uppercase tracking-wider text-white">
            {post.title}
          </h3>

          <div className="pt-2 space-y-4 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                navigate('/contact-us/');
              }}
              className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs uppercase tracking-widest px-6 py-3 border border-neutral-600 transition-colors cursor-pointer"
            >
              Enquire About This Site
            </button>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Back to Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
