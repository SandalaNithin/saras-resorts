import type { MetadataRoute } from 'next';
import { siteConfig, navLinks } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href === '/' ? '' : link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }));

  return routes;
}
