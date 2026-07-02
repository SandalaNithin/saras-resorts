import { Hero } from '@/sections/home/Hero';
import { AboutPreview } from '@/sections/home/AboutPreview';
import { AccommodationPreview } from '@/sections/home/AccommodationPreview';
import { EventsPreview } from '@/sections/home/EventsPreview';
import { AmenitiesPreview } from '@/sections/home/AmenitiesPreview';
import { GalleryPreview } from '@/sections/home/GalleryPreview';
import { Testimonials } from '@/sections/home/Testimonials';
import { CTABanner } from '@/sections/home/CTABanner';
import { siteConfig } from '@/constants/site';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.line2,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: 'IN',
    },
    priceRange: '₹₹₹',
    starRating: { '@type': 'Rating', ratingValue: '5' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <AboutPreview />
      <AccommodationPreview />
      <EventsPreview />
      <AmenitiesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
