import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem, Reveal } from '@/components/animation/Reveal';
import { CTABanner } from '@/sections/home/CTABanner';
import { eventTypes } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Host weddings, pre-wedding celebrations, corporate events, birthdays and family gatherings at Saras Resorts — premium venues with dedicated planners.',
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrate With Us"
        title="Events & Celebrations"
        description="Grand or intimate, every occasion finds its perfect setting at Saras — with venues, decor and planning handled end to end."
        image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container">
          <Stagger className="grid gap-8 md:grid-cols-2" stagger={0.12}>
            {eventTypes.map((event) => (
              <StaggerItem key={event.title}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-forest-950 shadow-soft">
                      <event.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-xl font-semibold text-forest-800">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-forest-700/75">
                      {event.description}
                    </p>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {event.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-forest-700/80"
                        >
                          <Check className="h-4 w-4 text-gold-500" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-gold-600"
                    >
                      Enquire Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-forest-800 py-16">
        <div className="container">
          <Reveal className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                Planning a celebration?
              </h2>
              <p className="mt-2 text-sm text-cream-100/80">
                Our event concierge will help you design every detail — from decor to catering.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-all hover:bg-gold-300"
            >
              Talk to a Planner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
