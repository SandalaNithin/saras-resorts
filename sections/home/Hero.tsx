'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown, Star, Sparkles } from 'lucide-react';
import { siteConfig } from '@/constants/site';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80"
          alt="Saras Resorts luxury pool and gardens"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-900/35 to-forest-950/80" />
      </div>

      <div className="container relative z-10 py-32 text-center">
        <div className="flex flex-col items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-forest-950 shadow-gold transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Opening Soon
          </span>

          <span
            className={`inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur-sm transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Star className="h-3.5 w-3.5 fill-gold-300" />
            Premium Luxury Resort
          </span>
        </div>

        <h1
          className={`mx-auto mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.1] text-white text-shadow-hero sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          Where Nature Meets
          <span className="block bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-clip-text text-transparent">
            Timeless Luxury
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/90 md:text-lg transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          {siteConfig.description}
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '750ms' }}
        >
          <Link
            href="/contact"
            className="w-full rounded-full bg-forest-800 px-8 py-4 text-sm font-semibold text-white shadow-soft-lg transition-all duration-300 hover:bg-forest-700 hover:shadow-gold sm:w-auto"
          >
            Book Your Stay
          </Link>
          <Link
            href="/accommodation"
            className="w-full rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-forest-800 sm:w-auto"
          >
            Explore Rooms
          </Link>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/30 text-white">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
