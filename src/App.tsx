import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AwardsPage } from './pages/AwardsPage';
import { LandRequiredPage } from './pages/LandRequiredPage';
import { NewsPage } from './pages/NewsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { VideosPage } from './pages/VideosPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { CustomerServicePage } from './pages/CustomerServicePage';
import { LocalCommunityPage } from './pages/LocalCommunityPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { FEATURED_PROJECTS } from './data/mockData';

export default function App() {
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
    const p = window.location.pathname;
    return normalizePath(p || '/');
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  // Check if current route is a project slug
  const matchedProject = FEATURED_PROJECTS.find(
    (p) => normalizePath(p.slug) === currentPath || currentPath === `/${p.slug}/`
  );

  // Render the appropriate page based on currentPath
  const renderPage = () => {
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
        return <PortfolioPage navigate={navigate} title="Portfolio" />;

      case '/current-developments/':
        return <PortfolioPage navigate={navigate} title="Current Developments" />;

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
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Area with subtle fade transition */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Cookie Banner */}
      <CookieBanner onOpenPrivacy={() => navigate('/privacy-policy/')} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
      />
    </div>
  );
}
