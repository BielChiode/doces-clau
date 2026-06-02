import { HeroEditorial } from '@/components/marketing/HeroEditorial';
import { BrandManifest } from '@/components/marketing/BrandManifest';
import { SeasonalBanner } from '@/components/marketing/SeasonalBanner';
import { CategoryShowcase } from '@/components/marketing/CategoryShowcase';
import { TestimonialQuote } from '@/components/marketing/TestimonialQuote';
import { EditorialGallery } from '@/components/marketing/EditorialGallery';
import { FinalCTA } from '@/components/marketing/FinalCTA';
import { ChapterHeading } from '@/components/ui/ChapterHeading';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getFeaturedProducts } from '@/content/products';
import { testimonials } from '@/content/testimonials';

export default function HomePage() {
  const featured = getFeaturedProducts();
  const testimonial = testimonials[0]!;

  return (
    <>
      <HeroEditorial />
      <BrandManifest />
      <SeasonalBanner />

      {/* 02 — categorias destaque */}
      <section className="mx-auto max-w-[1440px] px-5 pt-24 md:px-14 md:pt-32" aria-labelledby="cat-title">
        <ChapterHeading
          number="02"
          label="Nosso cardápio"
          title={
            <span>
              O que está saindo do{' '}
              <em className="italic text-[var(--color-wine)]">forno</em>.
            </span>
          }
        />
      </section>
      <CategoryShowcase />

      {/* 03 — assinaturas da clau (featured) */}
      <section className="mx-auto max-w-[1440px] px-5 pt-12 md:px-14 md:pt-16" aria-labelledby="signatures-title">
        <ChapterHeading
          number="03"
          label="Assinaturas da Clau"
          title={
            <span>
              Os doces que <em className="italic text-[var(--color-wine)]">a casa</em> defende.
            </span>
          }
        />
        <div className="mt-16 md:mt-20">
          <ProductGrid products={featured} layout="editorial" />
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-14 md:py-32">
        <TestimonialQuote testimonial={testimonial} />
      </div>

      <EditorialGallery />

      <FinalCTA />
    </>
  );
}
