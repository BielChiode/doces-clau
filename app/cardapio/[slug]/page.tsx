import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, getProductBySlug, getRelatedProducts, products } from '@/content/products';
import { Divider } from '@/components/ui/Divider';
import { WhatsAppCTA } from '@/components/whatsapp/WhatsAppCTA';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductGallery } from '@/components/product/ProductGallery';

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Produto não encontrado' };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: PageParams) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const related = getRelatedProducts(product, 3);

  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 md:px-14 md:pt-16">
      {/* breadcrumb */}
      <nav className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-soft)]">
        <Link href="/cardapio" className="hover:text-[var(--color-wine)]">Cardápio</Link>
        <span aria-hidden>/</span>
        <span className="text-[var(--color-copper-deep)]">{category?.label}</span>
      </nav>

      <article className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] md:gap-16 lg:gap-24">
        {/* GALERIA */}
        <ProductGallery product={product} />

        {/* INFO */}
        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-copper-deep)]">
            {category?.label}
          </p>

          <h1 className="mt-4 font-display text-[44px] leading-[1.04] tracking-[-0.012em] md:text-[64px]">
            {product.name}
          </h1>

          <p className="mt-4 font-display italic text-[22px] leading-[1.4] text-[var(--color-wine)] md:text-[26px]">
            {product.shortDescription}
          </p>

          <Divider className="mt-10 w-24" />

          <p className="mt-8 text-[15.5px] leading-[1.8] text-[var(--color-ink)]">
            {product.description}
          </p>

          {/* meta info */}
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 text-[13.5px]">
            <MetaRow term="Preço" value={product.priceLabel} />
            {product.servings && <MetaRow term="Porção" value={product.servings} />}
            {product.leadTimeDays && (
              <MetaRow
                term="Prazo de encomenda"
                value={`${product.leadTimeDays} ${product.leadTimeDays > 1 ? 'dias' : 'dia'}`}
              />
            )}
            {product.seasonal && (
              <MetaRow term="Disponibilidade" value={product.seasonal === 'pascoa' ? 'Apenas na Páscoa' : 'Apenas no Natal'} />
            )}
          </dl>

          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mt-10">
              <h2 className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-copper-deep)]">
                Ingredientes em destaque
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full border border-[var(--color-copper)]/40 px-3.5 py-1.5 text-[12.5px] text-[var(--color-ink)]"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12">
            <WhatsAppCTA size="lg" productName={product.name} />
            <p className="mt-3 text-[12px] text-[var(--color-ink-soft)]">
              Vamos conversar sobre datas, quantidade e personalizações.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-32 pt-12 border-t border-[var(--color-copper)]/15">
          <header className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[32px] leading-tight md:text-[44px]">
              Você também pode <em className="italic text-[var(--color-wine)]">gostar</em>
            </h2>
            <Link
              href="/cardapio"
              className="text-[12px] uppercase tracking-[0.28em] text-[var(--color-wine)] hover:underline underline-offset-4"
            >
              Ver cardápio completo →
            </Link>
          </header>
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MetaRow({ term, value }: { term: string; value: string }) {
  return (
    <div className="border-b border-[var(--color-copper)]/15 pb-3">
      <dt className="text-[10.5px] uppercase tracking-[0.3em] text-[var(--color-copper-deep)]">{term}</dt>
      <dd className="mt-1.5 text-[var(--color-ink)]">{value}</dd>
    </div>
  );
}
