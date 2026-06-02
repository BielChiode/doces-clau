import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/content/products';
import { CATEGORIES } from '@/content/products';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { hasRealPhoto, getPrimaryImage } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'tall' | 'wide';
  rotation?: number;
  index?: number;
}

const PEACH_VARIANTS = ['peach', 'rose', 'cream'] as const;

export function ProductCard({ product, variant = 'default', rotation = 0, index = 0 }: ProductCardProps) {
  const aspect = variant === 'tall' ? 'aspect-[3/4.4]' : variant === 'wide' ? 'aspect-[5/4]' : 'aspect-[4/5]';
  const palette = PEACH_VARIANTS[index % PEACH_VARIANTS.length] ?? 'peach';
  const categoryMeta = CATEGORIES.find((c) => c.slug === product.category);

  const isReal = hasRealPhoto(product);
  const primary = getPrimaryImage(product);

  return (
    <Link
      href={`/cardapio/${product.slug}`}
      className="product-card group relative block"
      style={rotation ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      <article className="flex flex-col">
        <div className={cn('relative overflow-hidden bg-[var(--color-peach)]', aspect)}>
          {/* badge sazonal */}
          {product.seasonal && (
            <span
              className="absolute left-4 top-4 z-10 rounded-full bg-[var(--color-wine)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-cream)]"
              style={{ transform: 'rotate(-6deg)' }}
            >
              {product.seasonal === 'pascoa' ? 'Páscoa' : 'Natal'}
            </span>
          )}

          {isReal && primary ? (
            <Image
              src={primary.src}
              alt={primary.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="product-card-image object-cover warm-image"
            />
          ) : (
            <div className="product-card-image absolute inset-0">
              <PlaceholderImage label={product.name} variant={palette} aspectRatio="auto" className="h-full w-full" />
            </div>
          )}

          {/* overlay hover */}
          <div className="product-card-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[var(--color-wine)]/85 px-6 text-center text-[var(--color-cream)]">
            <span className="text-[10px] uppercase tracking-[0.36em] opacity-80">
              {categoryMeta?.label}
            </span>
            <h3 className="font-display italic text-[26px] leading-[1.1] md:text-[30px]">
              {product.name}
            </h3>
            <span className="text-[11px] uppercase tracking-[0.32em] underline underline-offset-4">
              Ver detalhes
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
          <h3 className="font-display text-[19px] leading-tight md:text-[22px]">
            {product.name}
          </h3>
          <span className="shrink-0 text-[10px] uppercase tracking-[0.28em] text-[var(--color-copper-deep)]">
            {product.priceLabel}
          </span>
        </div>
        <p className="mt-1 px-1 text-[13px] leading-relaxed text-[var(--color-ink-soft)] line-clamp-2">
          {product.shortDescription}
        </p>
      </article>
    </Link>
  );
}
