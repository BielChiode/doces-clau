import type { Metadata } from 'next';
import { ChapterHeading } from '@/components/ui/ChapterHeading';
import { CategoryFilters } from '@/components/product/CategoryFilters';
import { products } from '@/content/products';

export const metadata: Metadata = {
  title: 'Cardápio',
  description:
    'Bolos, brigadeiros, ovos de Páscoa, cookies, tortas e sobremesas em copo. Conheça o cardápio completo da Doces Clau e encomende pelo WhatsApp.',
};

export default function CardapioPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-16 md:px-14 md:pt-24">
      <ChapterHeading
        number="01"
        label="Cardápio"
        title={
          <span>
            Tudo que está em{' '}
            <em className="italic text-[var(--color-wine)]">cartaz</em>.
          </span>
        }
      />

      <p className="mt-8 max-w-[560px] text-[16px] leading-[1.75] text-[var(--color-ink-soft)]">
        Selecione uma categoria abaixo para filtrar. Todas as referências são feitas{' '}
        por encomenda. Clique no produto para ver detalhes e iniciar uma conversa pelo WhatsApp.
      </p>

      <div className="mt-16 md:mt-20">
        <CategoryFilters products={products} />
      </div>
    </div>
  );
}
