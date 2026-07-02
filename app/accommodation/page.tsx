import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Users, Maximize, Check, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem, Reveal } from '@/components/animation/Reveal';
import { CTABanner } from '@/sections/home/CTABanner';
import { rooms } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Accommodation',
  description:
    'Explore luxury rooms and suites at Saras Resorts — Deluxe Garden Rooms, Premium Lake Suites, Family Villas and the Presidential Suite.',
};

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay With Us"
        title="Rooms & Suites"
        description="Four distinct ways to experience Saras — each thoughtfully designed with natural textures, soft light and modern comfort."
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container space-y-16">
          {rooms.map((room, i) => (
            <Reveal key={room.id} direction={i % 2 === 0 ? 'right' : 'left'}>
              <article className="grid items-center gap-8 rounded-3xl bg-white p-6 shadow-soft md:p-8 lg:grid-cols-2 lg:gap-12">
                <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                    {room.tagline}
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-forest-800 md:text-3xl">
                    {room.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-forest-700/75">
                    {room.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-700/80">
                    <li className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-gold-500" /> {room.size}
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gold-500" /> {room.capacity}
                    </li>
                    <li className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-gold-500" /> {room.beds}
                    </li>
                  </ul>
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-forest-700/80">
                        <Check className="h-4 w-4 text-forest-600" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-forest-100 pt-5">
                    <div>
                      <span className="text-xs text-forest-700/60">Starting from</span>
                      <p className="font-serif text-2xl font-semibold text-forest-800">
                        {room.price}
                        <span className="text-sm font-normal text-forest-700/60"> /night</span>
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-forest-700 hover:shadow-soft-lg"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
