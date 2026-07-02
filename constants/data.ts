import {
  Waves,
  UtensilsCrossed,
  Baby,
  Gamepad2,
  Dumbbell,
  Car,
  Wifi,
  Trees,
  Building2,
  Heart,
  Briefcase,
  Cake,
  Users,
  CalendarHeart,
  type LucideIcon,
} from 'lucide-react';

export type Amenity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const amenities: Amenity[] = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description:
      'Crystal-clear infinity pool surrounded by lush greenery and sun loungers.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    description:
      'Multi-cuisine fine dining with locally sourced organic ingredients.',
  },
  {
    icon: Baby,
    title: "Kids' Play Area",
    description:
      'Safe, supervised play zone with engaging activities for little guests.',
  },
  {
    icon: Gamepad2,
    title: 'Indoor Games',
    description:
      'Carrom, chess, table tennis and a dedicated games lounge for all ages.',
  },
  {
    icon: Dumbbell,
    title: 'Outdoor Games',
    description:
      'Sprawling lawns for cricket, volleyball, badminton and team sports.',
  },
  {
    icon: Car,
    title: 'Parking',
    description:
      'Ample, secure, well-lit parking space for cars, buses and coaches.',
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description:
      'Complimentary fibre internet across the entire resort campus.',
  },
  {
    icon: Trees,
    title: 'Garden',
    description:
      'Landscaped tropical gardens with walking trails and quiet sit-outs.',
  },
  {
    icon: Building2,
    title: 'Conference Hall',
    description:
      'State-of-the-art hall seating 200+ with AV systems for corporate events.',
  },
];

export type EventType = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const eventTypes: EventType[] = [
  {
    icon: Heart,
    title: 'Weddings',
    description:
      'A fairy-tale setting for your big day — manicured lawns, themed mandaps and a dedicated wedding concierge.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    features: ['Open-air mandap', 'Themed decor', 'Bridal suite', 'Live counters'],
  },
  {
    icon: CalendarHeart,
    title: 'Pre-Wedding',
    description:
      'Romantic backdrops for haldi, mehndi, engagement and couple shoots across our scenic gardens.',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af5148c8d?auto=format&fit=crop&w=1200&q=80',
    features: ['Couple shoot', 'Mehndi lawn', 'Haldi setup', 'Candid photography'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description:
      'Off-sites, conferences and team-building retreats with full AV support and seamless catering.',
    image:
      'https://images.unsplash.com/photo-1511578314322-37984718f320?auto=format&fit=crop&w=1200&q=80',
    features: ['200-seat hall', 'AV systems', 'Breakout rooms', 'Tea breaks'],
  },
  {
    icon: Cake,
    title: 'Birthday Celebrations',
    description:
      'From milestone birthdays to themed kids parties — we make every celebration memorable.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    features: ['Themed decor', 'Cake cutting', 'DJ & music', 'Kids activities'],
  },
  {
    icon: Users,
    title: 'Family Gatherings',
    description:
      'Reunions, anniversaries and kitty parties in a warm, private and spacious setting.',
    image:
      'https://images.unsplash.com/photo-1529543544282-ea669957c28c?auto=format&fit=crop&w=1200&q=80',
    features: ['Private dining', 'Custom menu', 'Lawn access', 'Photo corner'],
  },
  {
    icon: CalendarHeart,
    title: 'Weekend Getaways',
    description:
      'Curated weekend packages with activities, bonfires and a relaxed nature escape.',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f99f6a3d0?auto=format&fit=crop&w=1200&q=80',
    features: ['Bonfire night', 'Nature walk', 'Adventure sports', 'Spa session'],
  },
];

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

export const rooms: Room[] = [
  {
    id: 'deluxe-garden',
    name: 'Deluxe Garden Room',
    tagline: 'Cozy comfort with garden views',
    description:
      'A serene 320 sq.ft. retreat opening onto landscaped gardens, featuring a plush king bed, rain shower and a private sit-out.',
    price: '₹4,999',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70395?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70395?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae40dc85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['King bed', 'Garden view', 'Rain shower', 'Smart TV', 'Mini bar', 'Coffee maker'],
    size: '320 sq.ft.',
    capacity: '2 Guests',
    beds: '1 King Bed',
  },
  {
    id: 'premium-lake',
    name: 'Premium Lake Suite',
    tagline: 'Spacious suite with lake views',
    description:
      'An elegant 480 sq.ft. suite with a separate living area, panoramic lake-facing windows and a luxurious soaking tub.',
    price: '₹7,499',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733415?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049552057-403cce8fc958?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['King bed', 'Lake view', 'Living area', 'Soaking tub', 'Smart TV', 'Mini bar'],
    size: '480 sq.ft.',
    capacity: '3 Guests',
    beds: '1 King + Sofa',
  },
  {
    id: 'family-villa',
    name: 'Family Garden Villa',
    tagline: 'Private villa for the whole family',
    description:
      'A sprawling 720 sq.ft. villa with two bedrooms, a private lawn, outdoor seating and a dedicated butler on call.',
    price: '₹11,999',
    image:
      'https://images.unsplash.com/photo-1568084680786-a84f91d5537b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568084680786-a84f91d5537b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['2 Bedrooms', 'Private lawn', 'Outdoor seating', 'Butler service', 'Kitchenette', 'Smart TVs'],
    size: '720 sq.ft.',
    capacity: '5 Guests',
    beds: '2 King Beds',
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    tagline: 'The pinnacle of resort luxury',
    description:
      'Our flagship 1100 sq.ft. suite with a private plunge pool, wraparound deck, dining room and panoramic forest views.',
    price: '₹18,999',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733415?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733415?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae40dc85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['Plunge pool', 'Private deck', 'Dining room', 'Butler service', 'King bed', 'Premium bar'],
    size: '1100 sq.ft.',
    capacity: '4 Guests',
    beds: '1 King + 1 Queen',
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: 'Nature' | 'Rooms' | 'Events' | 'Food' | 'Amenities';
  span?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Resort garden pathway',
    category: 'Nature',
    span: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70395?auto=format&fit=crop&w=1200&q=80',
    alt: 'Deluxe room interior',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wedding setup',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989332540?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fine dining plate',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Resort swimming pool',
    category: 'Amenities',
    span: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1445019940545-be00c92a6d9b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Forest landscape',
    category: 'Nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    alt: 'Suite living area',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Birthday celebration',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e33e0c3112?auto=format&fit=crop&w=1200&q=80',
    alt: 'Restaurant ambience',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1575429198301-9c1a3c5b2a3e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Conference hall',
    category: 'Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d1c5d1f4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Lake view at sunset',
    category: 'Nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
    alt: 'Villa bedroom',
    category: 'Rooms',
  },
];

export const galleryCategories = ['All', 'Nature', 'Rooms', 'Events', 'Food', 'Amenities'] as const;

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Ananya Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'An absolutely magical stay. The gardens are breathtaking and the service is impeccable. We hosted our wedding here and every guest was blown away.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bengaluru',
    rating: 5,
    text: 'Perfect weekend getaway from the city chaos. The Presidential Suite with a private plunge pool was worth every rupee. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'We had our corporate off-site here. The conference facilities were top-notch and the team-building activities were beautifully organised.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Vikram Naidu',
    location: 'Warangal',
    rating: 5,
    text: 'The food was exceptional and the staff treated us like family. My kids loved the play area and the pool. We are coming back for sure.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Sneha Iyer',
    location: 'Chennai',
    rating: 5,
    text: 'A hidden gem in Telangana. The sunrise over the lake is unforgettable. The spa session was the most relaxing I have had in years.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-3d8344d6e0b3?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Arjun Mehta',
    location: 'Pune',
    rating: 5,
    text: 'Hosted my parents 50th anniversary here. The decor, the private dining and the attention to detail were beyond our expectations.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: '15+', label: 'Years of Hospitality' },
  { value: '50+', label: 'Luxury Rooms & Suites' },
  { value: '10K+', label: 'Happy Guests' },
  { value: '500+', label: 'Events Hosted' },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: '2009',
    title: 'The Beginning',
    description:
      'Saras Resorts opened its doors as a boutique getaway on the outskirts of Peddapur, with just 12 rooms and a vision.',
  },
  {
    year: '2014',
    title: 'Expansion',
    description:
      'Added the garden wing and a multi-cuisine restaurant, growing to 30 rooms and earning regional recognition.',
  },
  {
    year: '2018',
    title: 'Events Destination',
    description:
      'Launched our flagship banquet lawn and conference hall, becoming a preferred wedding and corporate venue.',
  },
  {
    year: '2022',
    title: 'Luxury Reimagined',
    description:
      'Unveiled the Presidential Suite and Family Villas, completing our premium accommodation portfolio.',
  },
  {
    year: '2026',
    title: 'Sustainable Luxury',
    description:
      'Embraced solar power, organic kitchen gardens and zero-waste events as part of our green commitment.',
  },
];

export type CoreValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: 'Heartfelt Hospitality',
    description:
      'Every guest is family. We anticipate needs before they are spoken and serve with genuine warmth.',
  },
  {
    icon: Trees,
    title: 'Nature First',
    description:
      'We exist in harmony with our surroundings — preserving green cover and native biodiversity.',
  },
  {
    icon: Briefcase,
    title: 'Uncompromising Quality',
    description:
      'From linens to cuisine, we hold every detail to an exacting standard of excellence.',
  },
  {
    icon: Users,
    title: 'Community Roots',
    description:
      'We employ locally, source locally and give back to the Peddapur community that hosts us.',
  },
];

export type NearbyAttraction = {
  name: string;
  distance: string;
  description: string;
  image: string;
};

export const nearbyAttractions: NearbyAttraction[] = [
  {
    name: 'Sri Lakshmi Narasimha Temple',
    distance: '8 km',
    description: 'A historic hilltop temple with panoramic valley views.',
    image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Manjeera Wildlife Sanctuary',
    distance: '22 km',
    description: 'Wetland reserve home to migratory birds and crocodiles.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sangameshwar Temple',
    distance: '15 km',
    description: 'Ancient confluence temple at the meeting of two rivers.',
    image: 'https://images.unsplash.com/photo-1564507592333-c6062eea5778?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kondapur Fort',
    distance: '30 km',
    description: 'Scenic hill fort ideal for a morning trek and photography.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff217c?auto=format&fit=crop&w=800&q=80',
  },
];

export type DistanceCard = {
  from: string;
  distance: string;
  duration: string;
};

export const distanceCards: DistanceCard[] = [
  { from: 'Hyderabad (Begumpet)', distance: '62 km', duration: '1 hr 20 min' },
  { from: 'Rajiv Gandhi Intl. Airport', distance: '78 km', duration: '1 hr 45 min' },
  { from: 'Sangareddy Town', distance: '18 km', duration: '25 min' },
  { from: 'Medak Town', distance: '35 km', duration: '50 min' },
];
