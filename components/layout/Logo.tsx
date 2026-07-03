'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/constants/site';

interface LogoProps {
  /** 'dark' = sitting on a dark/transparent background (e.g. over the hero image or footer). */
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  flourish?: boolean;
  className?: string;
}

// Source crop is 545x343 (the emblem region of public/images/logo-mark.png).
const MARK_RATIO = 545 / 343;

const SIZES = {
  sm: { h: 36, title: 'text-base', sub: 'text-[9px] tracking-[0.28em] mt-0.5' },
  md: { h: 44, title: 'text-xl', sub: 'text-[10px] tracking-[0.32em] mt-1' },
  lg: { h: 64, title: 'text-3xl', sub: 'text-xs tracking-[0.4em] mt-1.5' },
} as const;

export function Logo({ variant = 'light', size = 'md', flourish = false, className }: LogoProps) {
  const s = SIZES[size];
  const h = s.h;
  const w = Math.round(h * MARK_RATIO);

  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)} aria-label={siteConfig.name}>
      <span
        className="relative shrink-0 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ height: h, width: w }}
      >
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={545}
          height={343}
          className="h-full w-full object-contain"
          priority
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 bg-clip-text font-serif font-semibold text-transparent',
            s.title
          )}
        >
          Saras
        </span>
        <span
          className={cn(
            'font-medium uppercase',
            variant === 'dark' ? 'text-white/80' : 'text-forest-700/75',
            s.sub
          )}
        >
          Resorts
        </span>
        {flourish && (
          <span className="mt-2 flex items-center gap-1.5" aria-hidden="true">
            <span
              className={cn('h-px flex-1', variant === 'dark' ? 'bg-white/25' : 'bg-forest-800/20')}
            />
            <span className="h-1 w-1 rotate-45 bg-gold-400" />
            <span
              className={cn('h-px flex-1', variant === 'dark' ? 'bg-white/25' : 'bg-forest-800/20')}
            />
          </span>
        )}
      </span>
    </Link>
  );
}
