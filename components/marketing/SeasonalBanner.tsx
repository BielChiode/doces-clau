import Link from 'next/link';
import { getActiveSeason, getSeasonInfo } from '@/lib/seasonal';
import { CircularSeal } from '@/components/ui/CircularSeal';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

export function SeasonalBanner() {
  const season = getActiveSeason();
  const info = getSeasonInfo(season);
  if (!info) return null;

  return (
    <section aria-labelledby="seasonal-title" className="bg-[var(--color-wine)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:px-14 md:py-28">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <PlaceholderImage
              label={`Coleção de ${info.label}`}
              variant="wine"
              aspectRatio="auto"
              className="h-full w-full organic-shape-2 warm-image"
            />
          </div>

          <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8" style={{ transform: 'rotate(-12deg)' }}>
            <CircularSeal
              text={`${info.label} · Novidades · Doces Clau`}
              centerText={info.label.slice(0, 1)}
              size={120}
              className="text-[var(--color-rose)]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--color-rose)]">
            Coleção da temporada
          </p>
          <h2
            id="seasonal-title"
            className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-0.012em] md:text-[68px] lg:text-[78px]"
          >
            {info.label} {new Date().getFullYear()}
          </h2>
          <p className="mt-6 max-w-[460px] font-display italic text-[20px] leading-[1.5] text-[var(--color-rose)] md:text-[24px]">
            {info.tagline}.
          </p>
          <p className="mt-6 max-w-[480px] text-[15.5px] leading-[1.7] text-[var(--color-cream)]/85">
            A coleção de {info.label.toLowerCase()} é limitada e só fica disponível por algumas semanas.
            Encomende com antecedência: algumas referências têm fila de espera.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/cardapio?categoria=${info.categorySlug}`}
              className="inline-flex items-center gap-3 rounded-full bg-[var(--color-cream)] px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-[var(--color-wine)] transition-colors hover:bg-[var(--color-rose)]"
            >
              {info.ctaText}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
