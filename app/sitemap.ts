import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/config';
import { products } from '@/content/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl.replace(/\/$/, '');
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/cardapio`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/encomendas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/cardapio/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
