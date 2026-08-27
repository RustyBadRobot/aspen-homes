import { CURRENT_DEVELOPMENTS, FEATURED_PROJECTS, PORTFOLIO_PROJECTS } from './data/mockData';
import { NEWS_POSTS, getNewsBySlug } from './data/newsData';

export const SITE_URL = 'https://aspen-homes.co.uk';
export const DEFAULT_IMAGE = '/images/2017/08/Butterfly-House-Front_crop2.jpg';

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type: 'website' | 'article';
  robots: string;
  publishedTime?: string;
}

const staticSeo: Record<string, { title: string; description: string; robots?: string }> = {
  '/': {
    title: 'Aspen Homes | Award-Winning Property Developers in Surrey',
    description: 'Aspen Homes creates exceptional new homes across Surrey, combining thoughtful design, quality craftsmanship and outstanding customer service.',
  },
  '/about-us/': {
    title: 'About Aspen Homes | Surrey Property Developers',
    description: 'Learn about Aspen Homes, an award-winning Surrey property developer creating distinctive homes with careful design and quality craftsmanship.',
  },
  '/portfolio/': {
    title: 'Luxury Property Development Portfolio | Aspen Homes',
    description: 'Explore Aspen Homes’ portfolio of completed luxury property developments across Guildford, Surrey and the surrounding areas.',
  },
  '/current-developments/': {
    title: 'Current Property Developments in Surrey | Aspen Homes',
    description: 'View Aspen Homes’ current residential property developments and discover thoughtfully designed new homes in sought-after Surrey locations.',
  },
  '/awards/': {
    title: 'Property Development Awards | Aspen Homes',
    description: 'Discover the property and business awards recognising Aspen Homes’ design, craftsmanship and residential developments across Surrey.',
  },
  '/land-required/': {
    title: 'Land Required in Surrey | Aspen Homes',
    description: 'Aspen Homes is seeking development land and property opportunities across Surrey. Contact our experienced land acquisition team in confidence.',
  },
  '/news/': {
    title: 'Latest News | Aspen Homes',
    description: 'Read the latest Aspen Homes news, development updates, community stories and property insights from our team in Guildford, Surrey.',
  },
  '/testimonials/': {
    title: 'Customer Testimonials | Aspen Homes',
    description: 'Read what homeowners and partners say about Aspen Homes, our customer service, build quality and attention to detail.',
  },
  '/videos/': {
    title: 'Aspen Homes Videos | Luxury Property Developments',
    description: 'Watch Aspen Homes videos showcasing our luxury homes, completed developments, interiors and construction projects across Surrey.',
  },
  '/contact-us/': {
    title: 'Contact Aspen Homes | Guildford, Surrey',
    description: 'Contact Aspen Homes in Guildford to discuss new homes, land opportunities, current developments or customer service enquiries.',
  },
  '/sustainability/': {
    title: 'Sustainable Property Development | Aspen Homes',
    description: 'Learn how Aspen Homes considers sustainability, energy efficiency and the local environment throughout the property development process.',
  },
  '/customer-service/': {
    title: 'Customer Service | Aspen Homes',
    description: 'Find out how Aspen Homes supports customers before, during and after the purchase of a new home, with a focus on responsive personal service.',
  },
  '/local-community/': {
    title: 'Supporting Our Local Community | Aspen Homes',
    description: 'Discover how Aspen Homes supports charities, schools and community initiatives in Guildford and across Surrey.',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | Aspen Homes',
    description: 'Read the Aspen Homes privacy policy and learn how we collect, use and protect personal information.',
    robots: 'noindex, follow',
  },
};

export function normalizePath(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || '/';
  const withLeadingSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
  return withLeadingSlash === '/' ? '/' : `${withLeadingSlash.replace(/\/+$/, '')}/`;
}

function plainText(value: string): string {
  return value
    .replace(/\[[^\]]+\]/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function description(value: string, fallback: string): string {
  const text = plainText(value) || fallback;
  if (text.length <= 158) return text;
  return `${text.slice(0, 155).replace(/\s+\S*$/, '')}…`;
}

function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getSeoForPath(pathname: string): SeoData {
  const path = normalizePath(pathname);
  const canonicalPath = path === '/home/' ? '/' : path;
  const staticEntry = staticSeo[canonicalPath];

  if (staticEntry) {
    return {
      title: staticEntry.title,
      description: staticEntry.description,
      canonical: absoluteUrl(canonicalPath),
      image: absoluteUrl(DEFAULT_IMAGE),
      type: 'website',
      robots: staticEntry.robots || 'index, follow',
    };
  }

  const newsMatch = path.match(/^\/(?:news|horseshoe-lane-west-updates)\/([^/]+)\/$/);
  const post = newsMatch ? getNewsBySlug(newsMatch[1]) : undefined;
  if (post) {
    const canonical = `/news/${post.slug}/`;
    return {
      title: `${plainText(post.title)} | Aspen Homes`,
      description: description(post.summary || post.content[0] || '', 'Read the latest news from Aspen Homes.'),
      canonical: absoluteUrl(canonical),
      image: absoluteUrl(post.image || DEFAULT_IMAGE),
      type: 'article',
      robots: 'index, follow',
      publishedTime: post.formattedDate,
    };
  }

  const projectSlug = path.match(/^\/portfolio\/([^/]+)\/$/)?.[1] || path.match(/^\/([^/]+)\/$/)?.[1];
  const projects = [...CURRENT_DEVELOPMENTS, ...PORTFOLIO_PROJECTS, ...FEATURED_PROJECTS];
  const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : undefined;
  if (project) {
    const canonical = `/portfolio/${project.slug}/`;
    return {
      title: `${plainText(project.title)} | Aspen Homes`,
      description: description(project.summary || project.description[0] || '', 'Explore this Aspen Homes property development.'),
      canonical: absoluteUrl(canonical),
      image: absoluteUrl(project.image || DEFAULT_IMAGE),
      type: 'website',
      robots: 'index, follow',
    };
  }

  return {
    title: 'Page Not Found | Aspen Homes',
    description: 'The requested page could not be found.',
    canonical: absoluteUrl(path),
    image: absoluteUrl(DEFAULT_IMAGE),
    type: 'website',
    robots: 'noindex, follow',
  };
}

export function getPrerenderRoutes(): string[] {
  const staticRoutes = Object.keys(staticSeo).filter((route) => staticSeo[route].robots !== 'noindex, follow');
  const projectRoutes = [...CURRENT_DEVELOPMENTS, ...PORTFOLIO_PROJECTS, ...FEATURED_PROJECTS].map(
    (project) => `/portfolio/${project.slug}/`,
  );
  const newsRoutes = NEWS_POSTS.map((post) => `/news/${post.slug}/`);
  return [...new Set([...staticRoutes, '/privacy-policy/', ...projectRoutes, ...newsRoutes])];
}
