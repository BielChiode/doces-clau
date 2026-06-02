import type { Product } from '@/content/products';

/**
 * Identifica se a imagem principal do produto é real (arquivo existente no /public)
 * ou um caminho-placeholder esperando ser substituído por foto futura.
 *
 * Convenção do projeto:
 * - Caminhos /<slug>.jpeg → foto real entregue pelo cliente
 * - Caminhos /images/products/* → placeholders, ainda não temos foto
 */
export function hasRealPhoto(product: Product): boolean {
  const first = product.images[0];
  if (!first) return false;
  return !first.src.startsWith('/images/products/');
}

export function getPrimaryImage(product: Product) {
  return product.images[0];
}
