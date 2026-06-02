import type { Product } from '@/content/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  layout?: 'default' | 'editorial';
}

export function ProductGrid({ products, layout = 'default' }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-20 text-center font-display italic text-[24px] text-[var(--color-ink-soft)]">
        Em breve novidades nessa categoria.
      </p>
    );
  }

  if (layout === 'editorial') {
    // Layout home: 6 cards com leve assimetria (rotação alternada)
    return (
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((p, i) => {
          const rot = i % 3 === 0 ? -0.6 : i % 3 === 2 ? 0.8 : 0;
          return <ProductCard key={p.id} product={p} rotation={rot} index={i} />;
        })}
      </div>
    );
  }

  // Layout cardápio: grid limpo
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}
