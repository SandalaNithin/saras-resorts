export type NavItem = {
  label: string;
  href: string;
};

export type Room = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  gallery: string[];
  features: string[];
  size: string;
  capacity: string;
  beds: string;
};

export type Amenity = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type EventType = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: boolean;
};

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type CoreValue = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type NearbyAttraction = {
  name: string;
  distance: string;
  description: string;
  image: string;
};

export type DistanceCard = {
  from: string;
  distance: string;
  duration: string;
};
