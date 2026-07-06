'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/constants/site';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Source is public/images/logo.png (1536x1024) with the wordmark baked in.
const LOGO_WIDTH = 1536;
const LOGO_HEIGHT = 1024;

const HEIGHTS = {
  sm: 48,
  md: 60,
  lg: 96,
} as const;

export function Logo({ size = 'md', className }: LogoProps) {
  const h = HEIGHTS[size];
  const w = Math.round(h * (LOGO_WIDTH / LOGO_HEIGHT));

  return (
    <Link href="/" className={cn('group flex items-center', className)} aria-label={siteConfig.name}>
      <span
        className="relative shrink-0 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ height: h, width: w }}
      >
        <Image
          src="/images/logo.png"
          alt={siteConfig.name}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          className="h-full w-full object-contain"
          priority
        />
      </span>
    </Link>
  );
}
