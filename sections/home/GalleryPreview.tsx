'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { galleryItems } from '@/constants/data';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem } from '@/components/animation/Reveal';
import { cn } from '@/lib/utils';

export function GalleryPreview() {
  const [active, setActive] = useState<string | null>(null);
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="section-py bg-cream-100">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse of the Saras Experience"
          description="Scroll through moments captured across our gardens, rooms, events and dining spaces."
        />

        <Stagger className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4" stagger={0.1}>
          {preview.map((item, i) => (
            <StaggerItem
              key={item.src}
              className={cn(
                'group relative cursor-pointer overflow-hidden rounded-2xl shadow-soft',
                (i === 0 || i === 4) && 'md:col-span-2 md:row-span-2'
              )}
            >
              <button
                type="button"
                onClick={() => setActive(item.src)}
                className="block h-full w-full"
                aria-label={`View ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/40">
                  <span className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-white/90 text-forest-800 transition-transform duration-300 group-hover:scale-100">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-forest-950/60 px-3 py-1 text-[11px] font-medium text-cream-100 backdrop-blur-sm">
                  {item.category}
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 px-7 py-3 text-sm font-semibold text-forest-800 transition-all hover:border-forest-800 hover:bg-forest-800 hover:text-white"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active}
              alt="Gallery preview"
              fill
              sizes="100vw"
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
