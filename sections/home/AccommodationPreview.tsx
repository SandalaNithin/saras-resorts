import Image from 'next/image';
import Link from 'next/link';
import { Bed, Users, Maximize, ArrowRight } from 'lucide-react';
import { rooms } from '@/constants/data';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem } from '@/components/animation/Reveal';

export function AccommodationPreview() {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Accommodation"
          title="Rooms & Suites Designed for Serenity"
          description="Each space is thoughtfully curated with natural textures, soft lighting and modern comforts to make every stay feel like a retreat."
        />

        <Stagger className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {rooms.map((room) => (
            <StaggerItem key={room.id}>
              <Link href="/accommodation" className="group block">
                <article className="overflow-hidden rounded-3xl bg-cream-50 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                        {room.tagline}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-forest-800">
                      {room.name}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-forest-700/70">
                      <li className="flex items-center gap-1.5">
                        <Maximize className="h-3.5 w-3.5" /> {room.size}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> {room.capacity}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Bed className="h-3.5 w-3.5" /> {room.beds}
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center justify-between border-t border-forest-100 pt-4">
                      <div>
                        <span className="text-xs text-forest-700/60">from</span>
                        <p className="font-serif text-xl font-semibold text-forest-800">
                          {room.price}
                          <span className="text-xs font-normal text-forest-700/60"> /night</span>
                        </p>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-white transition-all group-hover:bg-gold-400 group-hover:text-forest-950">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link
            href="/accommodation"
            className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 px-7 py-3 text-sm font-semibold text-forest-800 transition-all hover:border-forest-800 hover:bg-forest-800 hover:text-white"
          >
            View All Accommodation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
