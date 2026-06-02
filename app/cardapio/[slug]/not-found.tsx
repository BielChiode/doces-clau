import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="mx-auto flex max-w-[640px] flex-col items-center px-5 py-32 text-center md:py-48">
      <p className="font-script text-[42px] text-[var(--color-wine)]">ops</p>
      <h1 className="mt-4 font-display text-[44px] leading-tight md:text-[64px]">
        Esse doce <em className="italic text-[var(--color-wine)]">saiu</em> do cardápio.
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
        Talvez seja sazonal e não esteja em destaque, ou o link tenha mudado.
        Que tal voltar ao cardápio principal?
      </p>
      <Link
        href="/cardapio"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--color-wine)] px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-[var(--color-cream)]"
      >
        Ir para o cardápio
      </Link>
    </div>
  );
}
