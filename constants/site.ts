export const siteConfig = {
  name: 'Saras Resorts',
  shortName: 'Saras',
  tagline: 'Where Nature Meets Luxury',
  description:
    'Saras Resorts is a premium luxury resort in Peddapur, Telangana offering elegant accommodations, world-class amenities, stunning event venues, and an unforgettable escape into nature.',
  url: 'https://sarasresorts.in',
  ogImage:
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
  address: {
    line1: 'Saraswathi Enclave',
    line2: 'Peddapur',
    district: 'Sangareddy District',
    state: 'Telangana',
    pincode: '502306',
    country: 'India',
    full: 'Saraswathi Enclave, Peddapur, Telangana 502306, India',
  },
  contact: {
    phone: '+91 98765 43210',
    phoneHref: '+919876543210',
    altPhone: '+91 91234 56789',
    email: 'stay@sarasresorts.in',
    reservations: 'reservations@sarasresorts.in',
  },
  hours: {
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    reception: '24 Hours',
  },
  social: {
    instagram: 'https://www.instagram.com/sarasresorts/?hl=en',
    twitter: 'https://x.com/sarasresorts',
    youtube: 'https://www.youtube.com/@sarasresorts',
    pinterest: 'https://in.pinterest.com/sarasresorts/',
  },
  mapEmbed:
    'https://www.google.com/maps?q=Peddapur,Telangana,502306&output=embed',
  mapLink: 'https://maps.google.com/?q=Peddapur,Telangana,502306',
  keywords: [
    'Saras Resorts',
    'luxury resort Telangana',
    'resort in Peddapur',
    'resort near Hyderabad',
    'wedding venue Telangana',
    'corporate events resort',
    'family getaway resort',
    'nature resort India',
  ],
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
] as const;
