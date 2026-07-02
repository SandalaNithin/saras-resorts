'use client';

import Image from 'next/image';
import { Reveal } from '@/components/animation/Reveal';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  image: string;
};

export function PageHero({ title, eyebrow, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-20 md:min-h-[60vh]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-900/55 to-forest-950/80" />
      </div>
      <div className="container relative z-10 py-20 text-center">
        <Reveal direction="up">
          {eyebrow && (
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              {eyebrow}
            </span>
          )}
          <h1 className="font-serif text-4xl font-semibold text-white text-shadow-hero md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <span className="gold-line mx-auto mt-6" aria-hidden />
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  className?: string;
};

export function CTAButton({ href, children, variant = 'primary', className }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-forest-800 text-white shadow-soft hover:bg-forest-700 hover:shadow-soft-lg',
    outline:
      'border border-forest-800/30 text-forest-800 hover:border-forest-800 hover:bg-forest-800 hover:text-white',
    light:
      'border border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-forest-800',
  };
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}
