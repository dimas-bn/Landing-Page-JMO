export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  highlightNote?: string;
}

export interface StudentItem {
  id: string;
  no: number;
  name: string;
  status: 'Hadir' | 'Izin' | 'Sakit' | 'Dispensasi' | 'Alpa';
  points: number;
  note?: string;
}

export interface JournalRecord {
  id: string;
  date: string;
  day: string;
  period: string; // e.g. "1-3"
  className: string;
  subject: string;
  topic: string;
  attendance: {
    hadir: number;
    izin: number;
    sakit: number;
    dispensasi: number;
    alpa: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  school: string;
  location: string;
  avatarText: string;
  content: string;
  highlight: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'penggunaan' | 'fitur' | 'pembelian' | 'teknis';
}

export interface FeatureHighlight {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: string;
  badge: string;
}
