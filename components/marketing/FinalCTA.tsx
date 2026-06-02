import { WhatsAppCTA } from '@/components/whatsapp/WhatsAppCTA';
import { ChapterHeading } from '@/components/ui/ChapterHeading';

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-24 pt-12 md:px-10 md:pb-32 md:pt-20" aria-labelledby="final-cta-title">
      <div className="flex flex-col items-center text-center">
        <ChapterHeading
          number="04"
          label="Vamos adoçar?"
          align="center"
          title={
            <span>
              Vamos <em className="italic text-[var(--color-wine)]">adoçar</em> seu próximo encontro?
            </span>
          }
        />

        <p className="mt-8 max-w-[560px] text-[16.5px] leading-[1.7] text-[var(--color-ink-soft)]">
          Cada encomenda começa com um papo. Conte um pouco sobre a celebração
          (quantas pessoas, qual sabor te chama, qual a data)
          e a gente desenha juntas o doce certo.
        </p>

        <div className="mt-10">
          <WhatsAppCTA size="lg" label="Conversar pelo WhatsApp" />
        </div>

        <p className="mt-10 font-script text-[28px] leading-none text-[var(--color-copper-deep)]">
          — Clau
        </p>
      </div>
    </section>
  );
}
