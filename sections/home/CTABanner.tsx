import Image from 'next/image';
import Link from 'next/link';
import { Phone, CalendarCheck } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { Reveal } from '@/components/animation/Reveal';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
          alt="Saras Resort gardens at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/75 to-forest-950/90" />
      </div>

      <div className="container relative z-10 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            Your Escape Awaits
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold text-white text-shadow-hero md:text-4xl lg:text-5xl">
            Begin Your Story at Saras Resorts
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream-100/85 md:text-lg">
            Book your stay or plan your celebration with our team. We are here to make it
            extraordinary.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold text-forest-950 shadow-gold transition-all hover:bg-gold-300 sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Your Stay
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-forest-800 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Contact Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
