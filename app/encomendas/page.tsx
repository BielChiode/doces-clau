import type { Metadata } from 'next';
import { ChapterHeading } from '@/components/ui/ChapterHeading';
import { CircularSeal } from '@/components/ui/CircularSeal';
import { Divider } from '@/components/ui/Divider';
import { WhatsAppCTA } from '@/components/whatsapp/WhatsAppCTA';
import { faqs } from '@/content/faq';

const STEPS = [
  {
    n: '01',
    title: 'Mande oi',
    body: 'Toda encomenda começa por uma conversa no WhatsApp. Conte qual produto te chamou e qual é a data da celebração.',
  },
  {
    n: '02',
    title: 'Desenhamos juntas',
    body: 'Definimos sabor, tamanho, decoração e personalizações. Para bolos personalizados, peço referências de paleta e estilo.',
  },
  {
    n: '03',
    title: 'Confirma com sinal',
    body: '50% do valor confirma a encomenda. O restante até dois dias antes da entrega. Aceitamos PIX, transferência e cartão via link.',
  },
  {
    n: '04',
    title: 'Entrega ou retirada',
    body: 'Entregamos em São Paulo (taxa varia por bairro) ou você retira no ateliê. Combinamos o melhor caminho conforme o produto.',
  },
];

export const metadata: Metadata = {
  title: 'Encomendas',
  description:
    'Como encomendar com a Doces Clau: prazos, pagamento, entrega e perguntas frequentes.',
};

export default function EncomendasPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pt-16 md:px-14 md:pt-24">
        <ChapterHeading
          number="01"
          label="Encomendas"
          title={
            <span>
              Como funciona uma <em className="italic text-[var(--color-wine)]">encomenda</em>.
            </span>
          }
        />
        <p className="mt-8 max-w-[560px] text-[16px] leading-[1.75] text-[var(--color-ink-soft)]">
          Aqui está o passo a passo, sem mistério e sem letra miúda.
          A ideia é que você saiba exatamente o que esperar antes de começar.
        </p>
      </section>

      {/* PASSOS */}
      <section className="mx-auto mt-20 max-w-[1240px] px-5 md:mt-28 md:px-10" aria-label="Passos da encomenda">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {STEPS.map((s) => (
            <article key={s.n} className="flex gap-6">
              <CircularSeal
                text={`Passo ${s.n} · Doces Clau`}
                centerText={s.n}
                size={92}
                className="shrink-0 text-[var(--color-wine)]"
              />
              <div>
                <h3 className="font-display text-[26px] leading-tight md:text-[30px]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[var(--color-ink-soft)]">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-5 mt-24 md:px-10 md:mt-32">
        <Divider />
      </div>

      {/* FAQ */}
      <section className="mx-auto mt-20 max-w-[860px] px-5 md:mt-28 md:px-10" aria-labelledby="faq-title">
        <ChapterHeading
          number="02"
          label="Perguntas frequentes"
          title={
            <span>
              Antes que você <em className="italic text-[var(--color-wine)]">pergunte</em>.
            </span>
          }
        />

        <div className="mt-14">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group border-b border-[var(--color-copper)]/20 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-[20px] leading-snug text-[var(--color-ink)] md:text-[24px]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 font-display text-[26px] leading-none text-[var(--color-wine)] transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-[680px] text-[15px] leading-[1.8] text-[var(--color-ink-soft)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-display italic text-[24px] leading-tight text-[var(--color-ink)] md:text-[30px]">
            Ainda tem dúvida? É só me chamar.
          </p>
          <div className="mt-8">
            <WhatsAppCTA size="lg" customMessage="Olá Clau! Tenho uma dúvida sobre encomendas." label="Falar com a Clau" />
          </div>
        </div>
      </section>

      <div className="h-32" />
    </>
  );
}
