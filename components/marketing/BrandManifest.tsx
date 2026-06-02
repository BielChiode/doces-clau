import { CircularSeal } from '@/components/ui/CircularSeal';

const PILLARS = [
  {
    seal: 'Pequenos lotes · Ingredientes selecionados',
    center: '01',
    title: 'Pequenos lotes',
    body: 'Tudo é preparado em escala humana, em pequenos lotes. Nada é produzido em massa, o que mantém o frescor e nos permite ajustar cada detalhe.',
  },
  {
    seal: 'Ingredientes selecionados · Doces Clau',
    center: '02',
    title: 'Ingredientes que importam',
    body: 'Chocolate belga, frutas da estação, manteiga francesa, ovos caipiras. A lista é simples e exigente: boa matéria-prima é metade do caminho.',
  },
  {
    seal: 'Feito a mão · Doces Clau',
    center: '03',
    title: 'Feito à mão, sem pressa',
    body: 'Cada produto passa pela mão da Clau, do brigadeiro enrolado à decoração de bolo. É devagar de propósito; é assim que dá certo.',
  },
];

export function BrandManifest() {
  return (
    <section
      aria-labelledby="manifest-title"
      className="stripe-bg relative border-y border-[var(--color-copper)]/15 bg-[var(--color-peach)]/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--color-copper-deep)]">
            Manifesto
          </p>
          <h2
            id="manifest-title"
            className="mt-6 font-display text-[38px] leading-[1.05] tracking-[-0.012em] md:text-[58px]"
          >
            Doce é sobre <em className="italic text-[var(--color-wine)]">presença</em>, não
            sobre quantidade.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {PILLARS.map((p) => (
            <article key={p.title} className="flex flex-col items-center gap-6 text-center">
              <CircularSeal
                text={p.seal}
                centerText={p.center}
                size={132}
                className="text-[var(--color-wine)]"
              />
              <h3 className="font-display text-[24px] leading-tight md:text-[28px]">
                {p.title}
              </h3>
              <p className="max-w-[300px] text-[15px] leading-[1.7] text-[var(--color-ink-soft)]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
