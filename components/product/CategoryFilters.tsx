'use client';

import { useMemo, useState } from 'react';
import { CATEGORIES, type Product, type ProductCategory } from '@/content/products';
import { ProductGrid } from './ProductGrid';
import { cn } from '@/lib/utils';

interface CategoryFiltersProps {
  products: Product[];
  initialCategory?: ProductCategory | 'todos';
}

export function CategoryFilters({ products, initialCategory = 'todos' }: CategoryFiltersProps) {
  const [active, setActive] = useState<ProductCategory | 'todos'>(initialCategory);

  const filtered = useMemo(() => {
    if (active === 'todos') return products;
    return products.filter((p) => p.category === active);
  }, [products, active]);

  return (
    <div className="flex flex-col gap-12">
      <nav
        aria-label="Filtrar por categoria"
        className="flex flex-wrap items-baseline gap-x-7 gap-y-3 border-b border-[var(--color-copper)]/20 pb-6"
      >
        <FilterChip label="Tudo" active={active === 'todos'} onClick={() => setActive('todos')} />
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c.slug}
            label={c.label}
            active={active === c.slug}
            onClick={() => setActive(c.slug)}
          />
        ))}
      </nav>

      <ProductGrid products={filtered} />
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'group relative font-display italic text-[22px] leading-tight transition-colors md:text-[28px]',
        active ? 'text-[var(--color-wine)]' : 'text-[var(--color-ink-soft)] hover:text-[var(--color-wine)]',
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          'absolute -bottom-2 left-0 right-0 mx-auto h-px bg-[var(--color-wine)] transition-all duration-300',
          active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60',
        )}
      />
    </button>
  );
}
