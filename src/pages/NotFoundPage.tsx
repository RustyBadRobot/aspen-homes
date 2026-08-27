interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export function NotFoundPage({ navigate }: NotFoundPageProps) {
  return (
    <section className="min-h-[70vh] bg-white px-6 pb-20 pt-36 text-center sm:pt-44">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">404</p>
        <h1 className="mb-6 text-4xl font-light tracking-wide text-neutral-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-neutral-600">
          The page you requested may have moved or no longer exists.
        </p>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigate('/');
          }}
          className="inline-flex border border-neutral-900 px-7 py-3 text-sm uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          Return home
        </a>
      </div>
    </section>
  );
}
