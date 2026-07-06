'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { navLinks, siteConfig } from '@/constants/site';
import { Logo } from './Logo';

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0a12 12 0 0 0-4.373 23.178c-.035-.933-.001-2.055.231-3.07.25-1.083 1.673-7.087 1.673-7.087s-.427-.855-.427-2.118c0-1.984 1.15-3.467 2.581-3.467 1.218 0 1.805.914 1.805 2.01 0 1.224-.779 3.053-1.18 4.748-.336 1.418.711 2.573 2.108 2.573 2.53 0 4.474-2.669 4.474-6.52 0-3.41-2.451-5.794-5.951-5.794-4.053 0-6.432 3.041-6.432 6.185 0 1.225.472 2.539 1.06 3.253a.426.426 0 0 1 .098.408c-.108.45-.348 1.418-.395 1.616-.062.259-.205.314-.473.19-1.766-.822-2.87-3.403-2.87-5.475 0-4.458 3.239-8.552 9.334-8.552 4.901 0 8.71 3.492 8.71 8.16 0 4.868-3.07 8.786-7.331 8.786-1.431 0-2.777-.744-3.238-1.623l-.881 3.36c-.319 1.226-1.18 2.763-1.757 3.7A12 12 0 1 0 12 0z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="bg-forest-950 text-cream-100">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: XIcon, href: siteConfig.social.twitter, label: 'X (Twitter)' },
                { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
                { icon: PinterestIcon, href: siteConfig.social.pinterest, label: 'Pinterest' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-forest-950"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-gold-300">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-white">Newsletter</h3>
            <p className="mt-5 text-sm text-cream-100/70">
              Subscribe for exclusive offers and seasonal packages.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email address"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-cream-100/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-gold-400 px-4 text-forest-950 transition-colors hover:bg-gold-300"
                >
                  {subscribed ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-gold-300">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-cream-100/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
