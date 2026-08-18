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
  category: string;
  location: string;
  image: string;
  summary: string;
  description: string[];
  bedrooms?: number;
  bathrooms?: number;
  status: 'Current' | 'Completed' | 'Future';
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
  description: string;
  image?: string;
  certificateText?: string;
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
