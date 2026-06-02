import Link from 'next/link';
import { BRAND, NAV_LINKS } from '@/lib/config';
import { Divider } from '@/components/ui/Divider';
import { CircularSeal } from '@/components/ui/CircularSeal';
import { Logotype } from '@/components/ui/Logotype';

export function FooterRich() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-[var(--color-wine-deep)] text-[var(--color-cream)]">
      <div className="absolute inset-x-0 -top-px h-px bg-[var(--color-copper)]/40" aria-hidden />

      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Coluna 1 — marca */}
          <div className="flex flex-col gap-8">
            <Logotype height={56} variant="invert" />
            <p className="font-display italic text-[22px] leading-[1.35] max-w-[330px] text-[var(--color-rose)]">
              Confeitaria artesanal feita com amor, uma página de cada vez no nosso caderno de receitas.
            </p>
            <p className="font-script text-[28px] text-[var(--color-rose)] leading-none">— Clau</p>
          </div>

          {/* Coluna 2 — navegação */}
          <FooterCol title="Navegar">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </FooterCol>

          {/* Coluna 3 — encomendas */}
          <FooterCol title="Encomendas">
            <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer-link">
              WhatsApp
            </a>
            <Link href="/encomendas" className="footer-link">Como funciona</Link>
            <Link href="/cardapio" className="footer-link">Cardápio</Link>
            <Link href="/sobre" className="footer-link">Sobre a Clau</Link>
          </FooterCol>

          {/* Coluna 4 — contato */}
          <FooterCol title="Contato">
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram {BRAND.instagramHandle}
            </a>
            <a href={`mailto:${BRAND.email}`} className="footer-link">{BRAND.email}</a>
            <span className="footer-link opacity-80">{BRAND.city}, {BRAND.state}</span>
          </FooterCol>
        </div>

        <Divider className="my-14 opacity-30" />

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <CircularSeal
            text="Doces Clau · Feito com amor"
            centerText="DC"
            size={108}
            className="text-[var(--color-rose)]"
            rotate
          />

          <div className="text-center md:text-right">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-rose)] opacity-80">
              © {year} {BRAND.fullName}
            </p>
            <p className="mt-2 text-[12px] text-[var(--color-rose)]/70">
              Todos os direitos reservados · Atendimento sob encomenda
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 13px;
          letter-spacing: 0.06em;
          color: rgb(250, 245, 240, 0.82);
          transition: color 200ms ease;
        }
        .footer-link:hover {
          color: var(--color-rose);
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="text-[10px] uppercase tracking-[0.42em] text-[var(--color-copper)] font-sans-tight font-medium mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}
