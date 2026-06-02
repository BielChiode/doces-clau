import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[640px] flex-col items-center px-5 py-32 text-center md:py-48">
      <span className="chapter-number text-[96px] leading-none md:text-[140px]">404</span>
      <h1 className="mt-6 font-display text-[44px] leading-tight md:text-[60px]">
        Página <em className="italic text-[var(--color-wine)]">fora</em> do cardápio.
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
        Esse link não levou a lugar nenhum. Volte para a página inicial ou veja o cardápio.
      </p>
      <div className="mt-10 flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-wine)] px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-[var(--color-cream)]"
        >
          Início
        </Link>
        <Link
          href="/cardapio"
          className="inline-flex items-center gap-3 rounded-full border border-[var(--color-copper)] px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-[var(--color-ink)] hover:bg-[var(--color-copper)] hover:text-[var(--color-cream)]"
        >
          Cardápio
        </Link>
      </div>
    </div>
  );
}
