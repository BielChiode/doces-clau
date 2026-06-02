import type { Testimonial } from '@/content/testimonials';
import { Divider } from '@/components/ui/Divider';

export function TestimonialQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="mx-auto flex max-w-[860px] flex-col items-center px-5 text-center md:px-10">
      <span className="font-display italic text-[80px] leading-none text-[var(--color-copper)] md:text-[120px]" aria-hidden>
        &ldquo;
      </span>

      <blockquote className="-mt-4 font-display italic text-[28px] leading-[1.4] tracking-[-0.005em] text-[var(--color-ink)] md:text-[42px] md:leading-[1.32]">
        {testimonial.quote}
      </blockquote>

      <Divider className="mt-12 w-24" />

      <figcaption className="mt-6 flex flex-col items-center gap-1">
        <span className="text-[15px] uppercase tracking-[0.28em] text-[var(--color-wine)]">
          {testimonial.author}
        </span>
        <span className="text-[12px] uppercase tracking-[0.24em] text-[var(--color-copper-deep)]">
          {testimonial.context}
        </span>
      </figcaption>
    </figure>
  );
}
