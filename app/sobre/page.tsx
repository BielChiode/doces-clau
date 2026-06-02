import type { Metadata } from 'next';
import { ChapterHeading } from '@/components/ui/ChapterHeading';
import { Divider } from '@/components/ui/Divider';
import { CircularSeal } from '@/components/ui/CircularSeal';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { WhatsAppCTA } from '@/components/whatsapp/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Sobre a Clau',
  description:
    'A história da Doces Clau: confeitaria boutique nascida do cuidado com ingredientes, técnica e do prazer de receber.',
};

export default function SobrePage() {
  return (
    <>
      {/* Cabeçalho com imagem */}
      <section className="mx-auto max-w-[1440px] px-5 pt-16 md:px-14 md:pt-24">
        <ChapterHeading
          number="01"
          label="Sobre"
          title={
            <span>
              <em className="italic text-[var(--color-wine)]">Doce</em> bom começa antes do forno.
            </span>
          }
        />
      </section>

      <section className="mx-auto max-w-[1440px] px-5 mt-16 md:px-14 md:mt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div className="relative">
            <div className="aspect-[4/5]">
              <PlaceholderImage
                label="Clau no ateliê"
                variant="rose"
                aspectRatio="auto"
                className="h-full w-full organic-shape warm-image"
              />
            </div>
            <div className="absolute -right-6 top-6 md:-right-10 md:top-10">
              <CircularSeal
                text="Doces Clau · Feito com amor"
                centerText="CL"
                size={132}
                className="text-[var(--color-wine)]"
                rotate
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-display italic text-[28px] leading-[1.3] text-[var(--color-wine)] md:text-[36px]">
              &ldquo;Comecei fazendo brigadeiro para o aniversário da minha sobrinha, e não parei mais.&rdquo;
            </p>
            <p className="mt-4 font-script text-[26px] leading-none text-[var(--color-copper-deep)]">
              — Clau
            </p>

            <Divider className="my-10 w-24" />

            <p className="text-[16px] leading-[1.8] text-[var(--color-ink)]">
              A Doces Clau é uma confeitaria boutique movida pelo gosto de receber bem.
              Aqui tudo é feito em escala humana, em pequenas levas. E essa é uma escolha,
              não um limite: pequeno permite cuidado.
            </p>

            <p className="mt-5 text-[16px] leading-[1.8] text-[var(--color-ink)]">
              Trabalho com ingredientes selecionados (chocolate belga, manteiga francesa,
              frutas da estação, ovos caipiras) e técnicas que respeitam cada receita.
              Algumas vêm da família, outras desenvolvi com o tempo, mas todas passam
              pelo mesmo crivo: precisam funcionar quando alguém dá a primeira mordida.
            </p>

            <p className="mt-5 text-[16px] leading-[1.8] text-[var(--color-ink)]">
              Cada encomenda começa com uma conversa. É assim que entendo o que importa
              para você (sabor, porção, ocasião) e desenho o doce que vai à sua mesa.
            </p>

            <div className="mt-10">
              <WhatsAppCTA size="md" customMessage="Olá Clau! Adorei o site e queria conversar sobre uma encomenda." />
            </div>
          </div>
        </div>
      </section>

      {/* 3 valores em texto */}
      <section className="mx-auto mt-32 max-w-[1240px] px-5 md:px-10" aria-label="Valores">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {[
            {
              n: '01',
              t: 'Tempo certo',
              b: 'Massa precisa descansar. Ganache precisa firmar. Não temos pressa, e isso aparece no resultado.',
            },
            {
              n: '02',
              t: 'Boa matéria',
              b: 'A diferença de chocolate, ovo, fruta. Boa matéria-prima é metade do caminho; o resto é técnica e cuidado.',
            },
            {
              n: '03',
              t: 'Histórias na mesa',
              b: 'Doce existe para celebrar. Cada bolo é um capítulo de aniversário, casamento, terça-feira boa.',
            },
          ].map((v) => (
            <article key={v.n}>
              <span className="chapter-number text-[48px] leading-none">{v.n}</span>
              <Divider className="my-5 w-16" />
              <h3 className="font-display text-[26px] leading-tight">{v.t}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--color-ink-soft)]">{v.b}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="h-32" />
    </>
  );
}
