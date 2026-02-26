import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const LAST_MODIFIED = new Date(`${SITE.lastUpdated}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.domain}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.domain}/pricing`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
