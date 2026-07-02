'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  TreePalm,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { navLinks, siteConfig } from '@/constants/site';

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
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/60 text-gold-300">
                <TreePalm className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-white">Saras</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300">
                  Resorts
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
                { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
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
