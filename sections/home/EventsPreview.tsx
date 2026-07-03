import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { eventTypes } from '@/constants/data';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem } from '@/components/animation/Reveal';

export function EventsPreview() {
  return (
    <section className="section-py bg-cream-100">
      <div className="container">
        <SectionHeading
          eyebrow="Celebrate With Us"
          title="Unforgettable Events, Beautifully Hosted"
          description="From grand weddings to intimate gatherings, our venues and dedicated planners turn every occasion into a cherished memory."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {eventTypes.map((event) => (
            <StaggerItem key={event.title}>
              <article className="group relative h-full overflow-hidden rounded-3xl shadow-soft">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/30 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                    <event.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/80">
                    {event.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {event.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-cream-100/90 backdrop-blur-sm"
                      >
                        <Check className="h-3 w-3 text-gold-300" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-forest-700 hover:shadow-soft-lg"
          >
            Explore All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
