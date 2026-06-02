const ITEMS = [
  'Confeitaria artesanal',
  'Bolos sob encomenda',
  'Brigadeiros gourmet',
  'Feito com amor',
  'Doces Clau',
  'São Paulo',
];

export function MarqueeStrip() {
  // duplicamos a lista para criar o loop infinito sem cortes
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="overflow-hidden border-b border-[var(--color-copper)]/20 bg-[var(--color-peach)] py-3"
    >
      <div className="flex w-max items-center gap-12 whitespace-nowrap animate-marquee text-[var(--color-wine)]">
        {loop.map((label, i) => (
          <span key={i} className="flex items-center gap-12 text-[11px] uppercase tracking-[0.42em]">
            <span>{label}</span>
            <span className="text-[var(--color-copper)] opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
