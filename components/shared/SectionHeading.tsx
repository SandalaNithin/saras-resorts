'use client';

import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animation/Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.3em]',
            light ? 'text-gold-300' : 'text-gold-600'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'max-w-2xl font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-forest-800'
        )}
      >
        {title}
      </h2>
      <span className="gold-line mt-5" aria-hidden />
      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed md:text-lg',
            light ? 'text-cream-100/80' : 'text-forest-700/75'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
