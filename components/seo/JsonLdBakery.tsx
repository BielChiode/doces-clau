import { BRAND } from '@/lib/config';

export function JsonLdBakery() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Bakery'],
    name: BRAND.fullName,
    description:
      'Confeitaria artesanal em São Paulo. Bolos, brigadeiros, ovos de Páscoa e doces sob encomenda.',
    image: `${BRAND.siteUrl}/logo.jpg`,
    url: BRAND.siteUrl,
    telephone: `+${BRAND.whatsappNumber}`,
    sameAs: [BRAND.instagram],
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.city,
      addressRegion: BRAND.state,
      addressCountry: 'BR',
    },
    priceRange: '$$',
    servesCuisine: 'Brasileira',
  } as const;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
