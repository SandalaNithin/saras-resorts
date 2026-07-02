import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem } from '@/components/animation/Reveal';
import { CTABanner } from '@/sections/home/CTABanner';
import { amenities } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Amenities',
  description:
    'Discover world-class amenities at Saras Resorts — swimming pool, restaurant, kids play area, indoor and outdoor games, WiFi, gardens and conference hall.',
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Resort Amenities"
        description="Every comfort considered. Every detail refined. Everything you need for a seamless, indulgent stay."
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Our Facilities"
            title="Designed for Your Comfort"
            description="From recreation to relaxation, our amenities cater to every kind of traveller — families, couples, corporate groups and solo explorers."
          />

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {amenities.map((amenity) => (
              <StaggerItem key={amenity.title}>
                <article className="group h-full rounded-3xl border border-forest-100 bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-soft-lg">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-50 text-forest-800 transition-all duration-400 group-hover:bg-forest-800 group-hover:text-gold-300">
                    <amenity.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-forest-800">
                    {amenity.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                    {amenity.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
