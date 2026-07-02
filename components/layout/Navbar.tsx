'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, TreePalm, Phone } from 'lucide-react';
import { navLinks, siteConfig } from '@/constants/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream-100/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
          <span
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
              solid ? 'border-forest-800 text-forest-800' : 'border-white/70 text-white'
            )}
          >
            <TreePalm className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-xl font-semibold tracking-wide transition-colors',
                solid ? 'text-forest-800' : 'text-white'
              )}
            >
              Saras
            </span>
            <span
              className={cn(
                'text-[10px] uppercase tracking-[0.25em] transition-colors',
                solid ? 'text-gold-600' : 'text-gold-300'
              )}
            >
              Resorts
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors',
                    solid
                      ? active
                        ? 'text-forest-800'
                        : 'text-forest-700/80 hover:text-forest-800'
                      : active
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors',
              solid ? 'text-forest-700 hover:text-forest-800' : 'text-white/90 hover:text-white'
            )}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-forest-800 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-forest-700 hover:shadow-soft-lg"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
            solid ? 'text-forest-800 hover:bg-forest-50' : 'text-white hover:bg-white/10'
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden bg-cream-100 transition-all duration-300 lg:hidden',
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="container flex flex-col gap-1 py-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    active
                      ? 'bg-forest-50 text-forest-800'
                      : 'text-forest-700 hover:bg-forest-50/60'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="flex items-center gap-2 px-4 text-sm font-medium text-forest-700"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/contact"
              className="mx-4 rounded-full bg-forest-800 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
