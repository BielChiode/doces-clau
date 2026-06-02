import type { Metadata, Viewport } from 'next';
import { Fraunces, Caveat, Inter_Tight } from 'next/font/google';
import { BRAND } from '@/lib/config';
import { HeaderBar } from '@/components/layout/HeaderBar';
import { MarqueeStrip } from '@/components/layout/MarqueeStrip';
import { FooterRich } from '@/components/layout/FooterRich';
import { WhatsAppFAB } from '@/components/whatsapp/WhatsAppFAB';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { JsonLdBakery } from '@/components/seo/JsonLdBakery';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.name} · Confeitaria artesanal feita com amor`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    'Confeitaria boutique em São Paulo. Bolos, brigadeiros, ovos de Páscoa e doces artesanais sob encomenda, feitos com ingredientes selecionados e muito carinho.',
  keywords: [
    'confeitaria artesanal',
    'doces gourmet',
    'bolos sob encomenda',
    'brigadeiros gourmet',
    'ovos de Páscoa artesanais',
    'doceria São Paulo',
    'Doces Clau',
  ],
  authors: [{ name: BRAND.fullName }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BRAND.siteUrl,
    siteName: BRAND.fullName,
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description: 'Bolos, brigadeiros e doces artesanais sob encomenda. Feito com amor.',
    images: [{ url: '/logo.jpg', width: 800, height: 800, alt: BRAND.fullName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.fullName,
    description: 'Confeitaria artesanal · Bolos, brigadeiros e doces sob encomenda.',
    images: ['/logo.jpg'],
  },
  icons: { icon: '/favicon.ico', apple: '/apple-icon.png' },
};

export const viewport: Viewport = {
  themeColor: '#F5DCD0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${caveat.variable} ${interTight.variable}`}>
      <body className="relative min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--color-wine)] focus:text-[var(--color-cream)] focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
        >
          Pular para o conteúdo
        </a>

        <NoiseOverlay />
        <JsonLdBakery />

        <HeaderBar />
        <MarqueeStrip />

        <main id="main">{children}</main>

        <FooterRich />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
