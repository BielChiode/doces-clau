import type { Metadata } from 'next';
import { ChapterHeading } from '@/components/ui/ChapterHeading';
import { Divider } from '@/components/ui/Divider';
import { WhatsAppCTA } from '@/components/whatsapp/WhatsAppCTA';
import { CircularSeal } from '@/components/ui/CircularSeal';
import { BRAND } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a Doces Clau pelo WhatsApp, Instagram ou email. Atendimento sob encomenda em São Paulo.',
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-5 pt-16 md:px-10 md:pt-24">
      <ChapterHeading
        number="01"
        label="Contato"
        title={
          <span>
            Quer <em className="italic text-[var(--color-wine)]">conversar</em>?
          </span>
        }
      />

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <p className="text-[16.5px] leading-[1.8] text-[var(--color-ink)]">
            A forma mais rápida de falar com a Clau é pelo WhatsApp.
            Para assuntos menos urgentes, ou para propostas e parcerias,
            também atendo por email e pelo direct do Instagram.
          </p>

          <Divider className="my-10 w-24" />

          <ul className="flex flex-col gap-7">
            <ContactRow
              term="WhatsApp"
              value="Atendimento principal"
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              external
            />
            <ContactRow
              term="Instagram"
              value={BRAND.instagramHandle}
              href={BRAND.instagram}
              external
            />
            <ContactRow
              term="Email"
              value={BRAND.email}
              href={`mailto:${BRAND.email}`}
            />
            <ContactRow
              term="Atendimento"
              value={`${BRAND.city}, ${BRAND.state}`}
            />
            <ContactRow
              term="Horário"
              value="Seg a Sáb · 9h às 19h"
            />
          </ul>

          <div className="mt-12">
            <WhatsAppCTA size="lg" />
          </div>
        </div>

        <aside className="relative flex flex-col items-center justify-center rounded-3xl border border-[var(--color-copper)]/30 bg-[var(--color-peach)]/40 p-10 text-center">
          <CircularSeal
            text="Doces Clau · Feito com amor · Confeitaria"
            centerText="DC"
            size={158}
            className="text-[var(--color-wine)]"
            rotate
          />

          <p className="mt-8 font-display italic text-[26px] leading-tight">
            &ldquo;Manda mensagem que eu respondo&rdquo;
          </p>
          <p className="mt-4 font-script text-[28px] leading-none text-[var(--color-wine)]">— Clau</p>

          <p className="mt-8 max-w-[280px] text-[13px] leading-[1.7] text-[var(--color-ink-soft)]">
            Costumo responder em até algumas horas durante o expediente.
            Aos domingos respondo na segunda. Desculpe a demora.
          </p>
        </aside>
      </div>

      <div className="h-32" />
    </div>
  );
}

function ContactRow({
  term,
  value,
  href,
  external = false,
}: {
  term: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex flex-col gap-1 border-b border-[var(--color-copper)]/15 pb-4">
      <span className="text-[10.5px] uppercase tracking-[0.3em] text-[var(--color-copper-deep)]">
        {term}
      </span>
      <span className="font-display text-[22px] leading-tight text-[var(--color-ink)]">
        {value}
      </span>
    </div>
  );

  if (!href) return <li>{content}</li>;

  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group block hover:[&_.font-display]:text-[var(--color-wine)]"
      >
        {content}
      </a>
    </li>
  );
}
