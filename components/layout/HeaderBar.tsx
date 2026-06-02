import Link from 'next/link';
import { BRAND, NAV_LINKS } from '@/lib/config';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { Logotype } from '@/components/ui/Logotype';

export function HeaderBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[var(--color-cream)]/82 border-b border-[var(--color-copper)]/20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link href="/" aria-label={`${BRAND.name}, ir para o início`} className="group inline-flex shrink-0 items-baseline">
          <Logotype height={32} priority className="md:hidden" />
          <Logotype height={42} priority className="hidden md:inline-flex" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.28em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-wine)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Encomendar pelo WhatsApp ${BRAND.name}`}
          className="hidden items-center gap-2 rounded-full border border-[var(--color-wine)] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--color-wine)] transition-colors hover:bg-[var(--color-wine)] hover:text-[var(--color-cream)] md:inline-flex"
        >
          <WhatsAppIconSmall />
          Encomendar
        </a>

        {/* Mobile: somente CTA WhatsApp pequeno */}
        <a
          href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Encomendar pelo WhatsApp"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-wine)] text-[var(--color-cream)]"
        >
          <WhatsAppIconSmall />
        </a>
      </div>

      {/* nav mobile compacto sob o header */}
      <nav
        aria-label="Navegação principal mobile"
        className="md:hidden flex items-center gap-5 overflow-x-auto border-t border-[var(--color-copper)]/15 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em]"
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="whitespace-nowrap text-[var(--color-ink-soft)] hover:text-[var(--color-wine)]"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function WhatsAppIconSmall() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.52 3.48A11.92 11.92 0 0012.03 0C5.45 0 .1 5.34.1 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 005.76 1.46h.01c6.58 0 11.93-5.34 11.93-11.92 0-3.18-1.24-6.18-3.45-8.42zM12.04 21.8a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.72.97 1-3.63-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.15 1.04 7.02 2.91a9.85 9.85 0 012.9 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.5.07-.76.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}
