import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export function WhatsAppFAB() {
  const id = 'fab-circle';
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Encomendar pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-[88px] w-[88px] items-center justify-center md:h-[108px] md:w-[108px]"
    >
      {/* texto circular rotacionando */}
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full animate-spin-slow text-[var(--color-wine)]"
        aria-hidden
      >
        <defs>
          <path
            id={id}
            d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 9.2,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          <textPath href={`#${id}`} startOffset="0">
            · Encomendar · pelo WhatsApp · Doces Clau ·
          </textPath>
        </text>
      </svg>

      {/* botão central */}
      <span className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[var(--color-wine)] text-[var(--color-cream)] shadow-[0_8px_24px_-6px_rgba(91,42,42,0.5)] transition-transform duration-300 group-hover:scale-105 md:h-[68px] md:w-[68px]">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.92 11.92 0 0012.03 0C5.45 0 .1 5.34.1 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 005.76 1.46h.01c6.58 0 11.93-5.34 11.93-11.92 0-3.18-1.24-6.18-3.45-8.42zM12.04 21.8a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.72.97 1-3.63-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.15 1.04 7.02 2.91a9.85 9.85 0 012.9 7.02c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.5.07-.76.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34z" />
        </svg>
      </span>
    </a>
  );
}
