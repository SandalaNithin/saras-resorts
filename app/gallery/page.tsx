'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/constants/data';
import { PageHero } from '@/components/shared/PageHero';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('All');
  const [active, setActive] = useState<string | null>(null);

  const filtered =
    filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Moments at Saras"
        title="Gallery"
        description="A visual journey through our gardens, rooms, celebrations, cuisine and amenities."
        image="https://images.unsplash.com/photo-1505691938895-1758d1c5d1f4?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-py bg-cream-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                  filter === cat
                    ? 'bg-forest-800 text-white shadow-soft'
                    : 'bg-white text-forest-700 hover:bg-forest-50'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(item.src)}
                className={cn(
                  'group relative overflow-hidden rounded-2xl shadow-soft',
                  item.span && 'md:col-span-2 md:row-span-2'
                )}
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
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
