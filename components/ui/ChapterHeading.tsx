import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ChapterHeadingProps {
  number: string;             // "01", "02"...
  label: string;              // "Bem-vinda", "Nosso cardápio"
  title?: ReactNode;          // título grande opcional
  align?: 'left' | 'center';
  className?: string;
}

export function ChapterHeading({
  number,
  label,
  title,
  align = 'left',
  className,
}: ChapterHeadingProps) {
  return (
    <header
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div className={cn('flex items-baseline gap-5', align === 'center' && 'justify-center')}>
        <span className="chapter-number text-[64px] leading-none md:text-[88px]">
          {number}
        </span>
        <span className="flex-1 max-w-[420px]">
          <span aria-hidden className="block divider-rule mb-3" />
          <span className="text-[11px] uppercase tracking-[0.42em] text-[var(--color-copper-deep)]">
            {label}
          </span>
        </span>
      </div>
      {title && (
        <h2 className="font-display text-[42px] leading-[1.02] tracking-[-0.015em] md:text-[68px] lg:text-[84px]">
          {title}
        </h2>
      )}
    </header>
  );
}
