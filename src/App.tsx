import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AwardsPage } from './pages/AwardsPage';
import { LandRequiredPage } from './pages/LandRequiredPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { VideosPage } from './pages/VideosPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { CustomerServicePage } from './pages/CustomerServicePage';
import { LocalCommunityPage } from './pages/LocalCommunityPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { FEATURED_PROJECTS, CURRENT_DEVELOPMENTS, PORTFOLIO_PROJECTS } from './data/mockData';
import { NEWS_POSTS, getNewsBySlug } from './data/newsData';

export default function App() {
  const ALL_PROJECTS = [...CURRENT_DEVELOPMENTS, ...PORTFOLIO_PROJECTS, ...FEATURED_PROJECTS];
  // Ensure path ends with trailing slash (except empty string which normalizes to '/')
  const normalizePath = (p: string): string => {
    let path = p;
    if (path.startsWith('#')) {
      path = path.substring(1);
    }
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    if (!path.endsWith('/')) {
      path = path + '/';
    }
    return path;
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check if redirected from a static 404 fallback
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParam = urlParams.get('p') || urlParams.get('path');
      if (redirectParam) {
        const cleanPath = normalizePath(redirectParam);
        window.history.replaceState({}, '', cleanPath);
        return cleanPath;
      }
      const sessionRedirect = sessionStorage.getItem('spa_redirect');
      if (sessionRedirect) {
        sessionStorage.removeItem('spa_redirect');
        const cleanPath = normalizePath(sessionRedirect);
        window.history.replaceState({}, '', cleanPath);
        return cleanPath;
      }
    } catch {
      // Ignore errors in sandboxed environments
    }
    const p = window.location.pathname;
    return normalizePath(p || '/');
  });

  const navigate = useCallback((targetPath: string) => {
    const normalized = normalizePath(targetPath);
    setCurrentPath(normalized);

    // Update browser URL bar with trailing slash
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const p = normalizePath(window.location.pathname);
      setCurrentPath(p);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check if current route is a news article (e.g. /news/:slug/ or /horseshoe-lane-west-updates/:slug/)
  let newsSlugFromPath = '';
  if (currentPath.startsWith('/news/') && currentPath !== '/news/') {
    newsSlugFromPath = currentPath.replace(/^\/news\//, '').replace(/\/$/, '');
  } else if (currentPath.startsWith('/horseshoe-lane-west-updates/') && currentPath !== '/horseshoe-lane-west-updates/') {
    newsSlugFromPath = currentPath.replace(/^\/horseshoe-lane-west-updates\//, '').replace(/\/$/, '');
  }

  const matchedNews = newsSlugFromPath ? getNewsBySlug(newsSlugFromPath) : NEWS_POSTS.find(
    (n) =>
      currentPath === `/news/${n.slug}/` ||
      normalizePath(`/news/${n.slug}`) === currentPath
  );

  // Check if current route is a project slug (supports /portfolio/:slug/ and /:slug/)
  const matchedProject = ALL_PROJECTS.find(
    (p) =>
      currentPath === `/portfolio/${p.slug}/` ||
      normalizePath(`/portfolio/${p.slug}`) === currentPath ||
      normalizePath(p.slug) === currentPath ||
      currentPath === `/${p.slug}/`
  );

  // Render the appropriate page based on currentPath
  const renderPage = () => {
    if (matchedNews || newsSlugFromPath) {
      return <NewsDetailPage slug={newsSlugFromPath || (matchedNews ? matchedNews.slug : '')} navigate={navigate} />;
    }

    if (matchedProject) {
      return <ProjectDetailPage slug={matchedProject.slug} navigate={navigate} />;
    }

    switch (currentPath) {
      case '/':
      case '/home/':
        return <HomePage navigate={navigate} />;

      case '/about-us/':
        return <AboutUsPage />;

      case '/portfolio/':
        return <PortfolioPage navigate={navigate} title="Portfolio" items={PORTFOLIO_PROJECTS} />;

      case '/current-developments/':
        return <PortfolioPage navigate={navigate} title="Current Developments" items={CURRENT_DEVELOPMENTS} />;

      case '/awards/':
        return <AwardsPage />;

      case '/land-required/':
        return <LandRequiredPage navigate={navigate} />;

      case '/news/':
      case '/horseshoe-lane-west-updates/':
        return <NewsPage navigate={navigate} />;

      case '/testimonials/':
        return <TestimonialsPage />;

      case '/videos/':
        return <VideosPage />;

      case '/contact-us/':
        return <ContactUsPage />;

      case '/sustainability/':
        return <SustainabilityPage />;

      case '/customer-service/':
        return <CustomerServicePage navigate={navigate} />;

      case '/local-community/':
        return <LocalCommunityPage />;

      case '/privacy-policy/':
        return <PrivacyPolicyPage />;

      default:
        // Default fallback to Home if unmatched
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Fixed Header */}
      <Header
        currentPath={currentPath}
        navigate={navigate}
      />

      {/* Main Page Area with subtle fade transition */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Cookie Banner */}
      <CookieBanner onOpenPrivacy={() => navigate('/privacy-policy/')} />
    </div>
  );
}
