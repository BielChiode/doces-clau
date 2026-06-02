import { BRAND } from './config';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Olá, Clau! Vim pelo site e gostaria de fazer uma encomenda.',
  product: (productName: string) =>
    `Olá, Clau! Gostaria de encomendar: ${productName}. Pode me passar mais informações?`,
  consultation: 'Olá, Clau! Gostaria de tirar uma dúvida sobre encomendas.',
  customOrder:
    'Olá, Clau! Gostaria de fazer uma encomenda personalizada. Pode me ajudar?',
} as const;
