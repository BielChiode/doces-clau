'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/content/products';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CircularSeal } from '@/components/ui/CircularSeal';
import { hasRealPhoto } from '@/lib/products';
import { cn } from '@/lib/utils';

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const isReal = hasRealPhoto(product);
  const images = product.images;
  const current = images[active] ?? images[0];

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden organic-shape">
        {isReal && current ? (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover warm-image"
          />
        ) : (
          <PlaceholderImage
            label={product.name}
            variant="rose"
            aspectRatio="auto"
            className="absolute inset-0 h-full w-full warm-image"
          />
        )}

        {product.seasonal && (
          <div className="absolute -right-4 -top-4 md:-right-6 md:-top-6" style={{ transform: 'rotate(-10deg)' }}>
            <CircularSeal
              text={product.seasonal === 'pascoa' ? 'Páscoa · Coleção da temporada' : 'Natal · Coleção da temporada'}
              centerText={product.seasonal === 'pascoa' ? 'P' : 'N'}
              size={108}
              className="text-[var(--color-wine)]"
            />
          </div>
        )}
      </div>

      {/* thumbnails se houver mais de uma imagem real */}
      {isReal && images.length > 1 && (
        <div className="mt-5 flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagem ${i + 1} de ${product.name}`}
              aria-pressed={active === i}
              className={cn(
                'relative h-20 w-20 overflow-hidden rounded-full border transition-all md:h-24 md:w-24',
                active === i
                  ? 'border-[var(--color-wine)] ring-2 ring-[var(--color-wine)]/30 ring-offset-2 ring-offset-[var(--color-cream)]'
                  : 'border-[var(--color-copper)]/30 opacity-70 hover:opacity-100',
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
