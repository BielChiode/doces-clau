// ============================================================================
// CONFIGURAÇÃO CENTRAL DA MARCA — EDITE AQUI
// ============================================================================
// Este é o ÚNICO arquivo que precisa ser editado para trocar:
// - Número de WhatsApp
// - Instagram
// - Email
// - Cidade
// - URL do site (também via env NEXT_PUBLIC_SITE_URL)
// ============================================================================

export const BRAND = {
  name: 'Doces Clau',
  fullName: 'Doces Clau Confeitaria',
  slogan: 'Feito com amor',
  tagline: 'Confeitaria artesanal',

  // Número real exibido nos rótulos dos potes: (11) 98186-0402
  whatsappNumber: '5511981860402',

  instagram: 'https://instagram.com/docesclau',
  instagramHandle: '@docesclau',

  // TODO: Confirmar email real
  email: 'contato@docesclau.com.br',

  // TODO: Confirmar cidade / endereço real
  city: 'São Paulo',
  state: 'SP',

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docesclau.com.br',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/encomendas', label: 'Encomendas' },
  { href: '/contato', label: 'Contato' },
] as const;
