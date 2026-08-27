import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cetia-solutions.co.uk';

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/apps`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/smartcart`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/milo-privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.25 },
    { url: `${baseUrl}/smart-recipe-privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.25 },
    { url: `${baseUrl}/smartrecipe-data-deletion`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.25 },
  ];

  return routes;
}
