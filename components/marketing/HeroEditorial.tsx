import { WhatsAppCTA } from '@/components/whatsapp/WhatsAppCTA';
import { CircularSeal } from '@/components/ui/CircularSeal';
import Image from 'next/image';
import Link from 'next/link';

export function HeroEditorial() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)]" aria-labelledby="hero-title">
      {/* Marquee vertical lateral */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-2 top-0 hidden h-full w-7 overflow-hidden md:block"
      >
        <div className="flex h-full flex-col items-center gap-12 animate-marquee-y whitespace-nowrap text-[10px] uppercase tracking-[0.42em] text-[var(--color-copper)]"
             style={{ writingMode: 'vertical-rl' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>Doces Clau · Feito com amor ·</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:gap-8 md:px-14 md:pt-24 md:pb-32 lg:gap-16">
        {/* TEXTO */}
        <div className="relative flex flex-col justify-end">
          <div className="reveal flex items-baseline gap-5">
            <span className="chapter-number text-[56px] leading-none md:text-[72px]">01</span>
            <span className="flex-1">
              <span aria-hidden className="block divider-rule mb-3" />
              <span className="text-[11px] uppercase tracking-[0.42em] text-[var(--color-copper-deep)]">
                Bem-vinda à confeitaria
              </span>
            </span>
          </div>

          <h1
            id="hero-title"
            className="reveal reveal-delay-1 mt-10 font-display text-[52px] leading-[0.98] tracking-[-0.018em] md:text-[88px] lg:text-[104px]"
          >
            Confeitaria{' '}
            <em className="font-display italic text-[var(--color-wine)]">artesanal</em>
            <br />
            feita com{' '}
            <span className="relative inline-block">
              <span className="relative z-10">amor</span>
              <svg
                aria-hidden
                className="absolute -bottom-3 left-0 w-full text-[var(--color-copper)]"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,9 Q50,2 100,7 T198,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mt-8 max-w-[480px] text-[16.5px] leading-[1.7] text-[var(--color-ink-soft)] md:text-[17.5px]">
            Bolos, brigadeiros, ovos de Páscoa e doces autorais
            preparados em pequenos lotes, com ingredientes selecionados,
            receitas refinadas ao longo dos anos e atenção a cada detalhe.
            Cada encomenda começa com uma conversa.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppCTA size="lg" label="Encomendar pelo WhatsApp" />
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-3 px-5 py-3 text-[12px] uppercase tracking-[0.28em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-wine)]"
            >
              Ver cardápio
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* anotação script */}
          <p className="reveal reveal-delay-4 mt-12 font-script text-[28px] leading-none text-[var(--color-copper-deep)]">
            feito a quatro mãos, com calma
          </p>
        </div>

        {/* IMAGEM */}
        <div className="reveal reveal-delay-2 relative">
          <div className="relative aspect-[4/5.2] overflow-hidden organic-shape md:aspect-[4/5.6]">
            <Image
              src="/bolo-pote-ninho-nutella.jpeg"
              alt="Bolo no pote sabor Ninho com Nutella, recheio cremoso visível na colher"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover warm-image"
            />

            {/* selo sazonal/destaque sobreposto */}
            <div className="absolute -left-6 top-8 md:-left-10 md:top-12">
              <CircularSeal
                text="Doces Clau · Feito com amor"
                centerText="DC"
                size={132}
                className="text-[var(--color-cream)] drop-shadow-md"
                rotate
              />
            </div>

            {/* "assinatura" no canto */}
            <div className="absolute bottom-6 right-6 max-w-[180px] rounded-2xl bg-[var(--color-cream)]/95 px-4 py-3 backdrop-blur md:bottom-10 md:right-10">
              <p className="font-display italic text-[15px] leading-tight text-[var(--color-ink)]">
                &ldquo;Acredito que doce bom começa antes do forno&rdquo;
              </p>
              <p className="mt-1 font-script text-[18px] leading-none text-[var(--color-wine)]">— Clau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
