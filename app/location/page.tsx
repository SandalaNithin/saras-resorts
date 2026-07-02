import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Navigation, Clock, CloudSun, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem, Reveal } from '@/components/animation/Reveal';
import { CTABanner } from '@/sections/home/CTABanner';
import { nearbyAttractions, distanceCards } from '@/constants/data';
import { siteConfig } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Location',
  description:
    'Find Saras Resorts in Peddapur, Telangana 502306. Explore nearby attractions, road directions and distance cards from major cities.',
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Us"
        title="How to Reach Saras"
        description="Conveniently located in Peddapur, Telangana — a short, scenic drive from Hyderabad."
        image="https://images.unsplash.com/photo-1505691938895-1758d1c5d1f4?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="overflow-hidden rounded-3xl shadow-soft-lg">
                <div className="relative h-[400px] w-full">
                  <iframe
                    title="Saras Resorts location map"
                    src={siteConfig.mapEmbed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading eyebrow="Our Address" title="Visit Saras Resorts" align="left" />
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-forest-800">Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest-700/75">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-forest-800">Reception Hours</h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest-700/75">
                      Open 24 hours · Check-in {siteConfig.hours.checkIn} · Check-out{' '}
                      {siteConfig.hours.checkOut}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                    <CloudSun className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-forest-800">Weather Today</h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest-700/75">
                      Pleasant &amp; breezy · 24°C · Ideal for outdoor activities
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-forest-700"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 px-6 py-3 text-sm font-semibold text-forest-800 transition-all hover:bg-forest-800 hover:text-white"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Getting Here"
            title="Distance From Major Cities"
            description="Saras Resorts is easily accessible by road from Hyderabad and surrounding towns."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {distanceCards.map((d) => (
              <StaggerItem key={d.from}>
                <article className="rounded-2xl border border-forest-100 bg-cream-50 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
                    <Navigation className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-base font-semibold text-forest-800">
                    {d.from}
                  </h3>
                  <p className="mt-2 font-serif text-2xl font-semibold text-gold-600">
                    {d.distance}
                  </p>
                  <p className="mt-1 text-xs text-forest-700/60">approx. {d.duration} drive</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Nearby"
            title="Attractions Around Saras"
            description="Make the most of your stay with visits to these nearby gems."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {nearbyAttractions.map((a) => (
              <StaggerItem key={a.name}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-forest-950/70 px-3 py-1 text-xs font-medium text-gold-300 backdrop-blur-sm">
                      {a.distance}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-base font-semibold text-forest-800">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                      {a.description}
                    </p>
                  </div>
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
