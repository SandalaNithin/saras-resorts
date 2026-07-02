import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/constants/data';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Stagger, StaggerItem } from '@/components/animation/Reveal';

export function Testimonials() {
  return (
    <section className="section-py bg-forest-950">
      <div className="container">
        <SectionHeading
          eyebrow="Guest Love"
          title="Stories From Our Guests"
          description="The warmth of Saras Resorts is best told by those who have stayed with us."
          light
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-gold-400/40">
                <Quote className="h-8 w-8 text-gold-400/60" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-100/85">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-cream-100/60">{t.location}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
