import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/content/products';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

const FEATURED_CATEGORIES = ['bolos-no-pote', 'cookies-e-tortas', 'brownies'] as const;

// caminho da foto representativa de cada categoria (ou null se usar placeholder)
const COVER_IMAGE: Record<string, string | null> = {
  'bolos-no-pote': '/bolo-pote-ninho-morango.jpeg',
  'cookies-e-tortas': '/cookie-kinder-bueno.jpeg',
  brownies: '/browninho.jpeg',
};

const PALETTES: Record<string, 'peach' | 'rose' | 'cream' | 'wine'> = {
  'bolos-no-pote': 'rose',
  'cookies-e-tortas': 'cream',
  brownies: 'wine',
};

export function CategoryShowcase() {
  const items = FEATURED_CATEGORIES.map((slug) => CATEGORIES.find((c) => c.slug === slug)!).filter(Boolean);

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-14 md:py-32" aria-labelledby="cat-title">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7">
        {items.map((cat, idx) => (
          <Link
            key={cat.slug}
            href={`/cardapio?categoria=${cat.slug}`}
            className="group block"
          >
            <article className="flex h-full flex-col">
              <div className="relative overflow-hidden">
                <div className="relative aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  {COVER_IMAGE[cat.slug] ? (
                    <Image
                      src={COVER_IMAGE[cat.slug] as string}
                      alt={`Exemplo de ${cat.label.toLowerCase()}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover warm-image"
                    />
                  ) : (
                    <PlaceholderImage
                      label={cat.label}
                      variant={PALETTES[cat.slug] ?? 'peach'}
                      aspectRatio="auto"
                      className="warm-image h-full w-full"
                    />
                  )}
                </div>

                <div className="absolute left-5 top-5">
                  <span className="chapter-number text-[36px] leading-none text-[var(--color-cream)] mix-blend-difference">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[28px] leading-tight md:text-[32px]">
                  {cat.label}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-wine)] underline-offset-4 group-hover:underline">
                  Explorar
                </span>
              </div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-ink-soft)]">
                {cat.tagline}.
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
