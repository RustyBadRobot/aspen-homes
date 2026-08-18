export interface NavItem {
  name: string;
  path: string;
  highlight?: boolean;
}

export interface SlideItem {
  id: string;
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export interface FeaturedProject {
  id: string;
  slug: string;
  title: string;
  category: string | string[];
  image: string;
  summary?: string;
  description: string[];
  gallery?: string[];
  status?: 'Current' | 'Completed' | 'Future' | string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  development: string;
  description?: string;
  projectImage: string;
  awardImage: string;
  fallbackProjectImage?: string;
  fallbackAwardImage?: string;
}

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  summary: string;
  content: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  image: string;
  quote: string;
  author: string;
  location: string;
  hasTextOverlayDefault?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  aspectRatio?: '16:9' | '4:3';
  isLarge?: boolean;
}

export interface CommunityItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  fallbackImage: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
  link?: {
    label: string;
    url: string;
  };
}

