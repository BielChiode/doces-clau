export type ProductCategory =
  | 'bolos'
  | 'bolos-no-pote'
  | 'brigadeiros'
  | 'ovos-de-pascoa'
  | 'cookies-e-tortas'
  | 'brownies'
  | 'sobremesas-em-copo'
  | 'personalizados'
  | 'natal';

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  ingredients?: string[];
  priceLabel: string;
  images: ProductImage[];
  seasonal?: 'pascoa' | 'natal' | null;
  featured?: boolean;
  servings?: string;
  leadTimeDays?: number;
}

export interface CategoryMeta {
  slug: ProductCategory;
  label: string;
  tagline: string;
  order: number;
}

export const CATEGORIES: CategoryMeta[] = [
  { slug: 'bolos-no-pote', label: 'Bolos no Pote', tagline: 'Camadas cremosas, porção individual', order: 1 },
  { slug: 'cookies-e-tortas', label: 'Cookies & Tortas', tagline: 'Massa amanteigada, recheios cremosos', order: 2 },
  { slug: 'brownies', label: 'Brownies', tagline: 'Chocolate denso com coberturas', order: 3 },
  { slug: 'bolos', label: 'Bolos', tagline: 'Camadas, recheios e confeitos artesanais', order: 4 },
  { slug: 'brigadeiros', label: 'Brigadeiros & Bombons', tagline: 'Pequenos doces, grande momento', order: 5 },
  { slug: 'ovos-de-pascoa', label: 'Ovos de Páscoa', tagline: 'Tradição com recheios surpreendentes', order: 6 },
  { slug: 'sobremesas-em-copo', label: 'Sobremesas em Copo', tagline: 'Camadas de sabor, individuais', order: 7 },
  { slug: 'personalizados', label: 'Personalizados', tagline: 'Sua celebração, do nosso jeito', order: 8 },
  { slug: 'natal', label: 'Especiais de Natal', tagline: 'Mesa de natal afetiva', order: 9 },
];

export const products: Product[] = [
  // ============================================================
  // BOLOS NO POTE — produtos com fotos reais
  // ============================================================
  {
    id: 'bp-001',
    slug: 'bolo-no-pote-brigadeiro',
    name: 'Bolo no Pote · Brigadeiro',
    category: 'bolos-no-pote',
    shortDescription: 'Bolo de chocolate, brigadeiro cremoso e chocolate em flocos.',
    description:
      'Bolo de chocolate em camadas alternadas com brigadeiro cremoso de panela e finalizado com chocolate em flocos. Servido em pote individual: o brigadeiro mais democrático da casa.',
    ingredients: ['chocolate em pó', 'leite condensado', 'manteiga', 'chocolate em flocos'],
    priceLabel: 'R$ 18 (un.)',
    images: [
      { src: '/bolo-pote.jpeg', alt: 'Bolo no pote sabor brigadeiro com cobertura de chocolate em flocos', width: 1200, height: 1600 },
    ],
    featured: true,
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },
  {
    id: 'bp-002',
    slug: 'bolo-no-pote-ninho',
    name: 'Bolo no Pote · Ninho',
    category: 'bolos-no-pote',
    shortDescription: 'Bolo branco, creme de leite Ninho e farofa de Ninho no topo.',
    description:
      'Massa branca fofinha em camadas com creme aveludado de leite Ninho. Finalizado com uma farofa generosa de leite em pó. Doce-leite-na-veia, o mais pedido entre quem cresceu tomando Ninho.',
    ingredients: ['leite Ninho', 'leite condensado', 'creme de leite', 'massa branca'],
    priceLabel: 'R$ 18 (un.)',
    images: [
      { src: '/bolo-pote-ninho.jpeg', alt: 'Bolo no pote sabor Ninho com cobertura de leite em pó', width: 1200, height: 1600 },
    ],
    featured: true,
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },
  {
    id: 'bp-003',
    slug: 'bolo-no-pote-ninho-com-nutella',
    name: 'Bolo no Pote · Ninho com Nutella',
    category: 'bolos-no-pote',
    shortDescription: 'Camadas de Nutella e creme de Ninho, o queridinho da casa.',
    description:
      'Bolo de chocolate em camadas alternadas com creme de Ninho e Nutella. Finalizado com mais Nutella derramada por cima. É o nosso campeão de pedidos: tem fila de espera quando lançamos uma leva nova.',
    ingredients: ['leite Ninho', 'Nutella', 'massa de chocolate', 'leite condensado'],
    priceLabel: 'R$ 22 (un.)',
    images: [
      { src: '/bolo-pote-ninho-nutella.jpeg', alt: 'Bolo no pote Ninho com Nutella, com colher exibindo o recheio cremoso', width: 1200, height: 1600 },
      { src: '/bolo-pote-ninho-nutella-2.jpeg', alt: 'Bolo no pote Ninho com Nutella com calda de Nutella derretida no topo', width: 1200, height: 1600 },
    ],
    featured: true,
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },
  {
    id: 'bp-004',
    slug: 'bolo-no-pote-ninho-com-morango',
    name: 'Bolo no Pote · Ninho com Morango',
    category: 'bolos-no-pote',
    shortDescription: 'Bolo branco, creme de Ninho e geleia de morango caseira.',
    description:
      'Massa branca em camadas com creme de leite Ninho e geleia de morango feita em casa. Acidez do morango equilibra o doce, e esse equilíbrio faz todo mundo voltar.',
    ingredients: ['leite Ninho', 'morango', 'leite condensado', 'massa branca'],
    priceLabel: 'R$ 20 (un.)',
    images: [
      { src: '/bolo-pote-ninho-morango.jpeg', alt: 'Bolo no pote Ninho com morango, geleia visível e morangos frescos ao redor', width: 1200, height: 1600 },
    ],
    featured: true,
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },
  {
    id: 'bp-005',
    slug: 'bolo-no-pote-prestigio',
    name: 'Bolo no Pote · Prestígio',
    category: 'bolos-no-pote',
    shortDescription: 'Bolo de chocolate, beijinho cremoso e coco ralado.',
    description:
      'Massa de chocolate em camadas com beijinho cremoso e finalização generosa de coco ralado fresco. Para quem ama o clássico Prestígio, agora em formato de comer de colher.',
    ingredients: ['chocolate em pó', 'leite de coco', 'leite condensado', 'coco ralado'],
    priceLabel: 'R$ 20 (un.)',
    images: [
      { src: '/bolo-pote-prestigio.jpeg', alt: 'Bolo no pote sabor Prestígio com cobertura generosa de coco ralado', width: 1200, height: 1600 },
    ],
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },
  {
    id: 'bp-006',
    slug: 'bolo-no-pote-cenoura-com-brigadeiro',
    name: 'Bolo no Pote · Cenoura com Brigadeiro',
    category: 'bolos-no-pote',
    shortDescription: 'Bolo de cenoura, brigadeiro de panela e chocolate em flocos.',
    description:
      'Massa fofinha de cenoura em camadas com brigadeiro de panela cremoso e cobertura de chocolate em flocos. O bolo de domingo da vó, agora em pote.',
    ingredients: ['cenoura fresca', 'leite condensado', 'chocolate em pó', 'chocolate em flocos'],
    priceLabel: 'R$ 18 (un.)',
    images: [
      { src: '/bolo-pote-cenoura-chocolate.jpeg', alt: 'Bolo no pote de cenoura com brigadeiro e chocolate em flocos', width: 1200, height: 1600 },
    ],
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },

  // ============================================================
  // BROWNIES — produtos com fotos reais
  // ============================================================
  {
    id: 'bw-001',
    slug: 'brownie-nutella',
    name: 'Brownie · Nutella',
    category: 'brownies',
    shortDescription: 'Brownie fudgy com cobertura espessa de Nutella.',
    description:
      'Brownie denso e úmido de chocolate meio-amargo, coberto com uma camada generosa de Nutella derretida. Embalado em forminha de alumínio com selo Doces Clau, perfeito para presentes.',
    ingredients: ['chocolate meio-amargo', 'Nutella', 'manteiga', 'ovos'],
    priceLabel: 'R$ 14 (un.)',
    images: [
      { src: '/brownie.jpeg', alt: 'Brownie partido ao meio com cobertura de Nutella e desenho de calda no prato', width: 1200, height: 1600 },
    ],
    featured: true,
    servings: 'Unidade',
    leadTimeDays: 2,
  },
  {
    id: 'bw-002',
    slug: 'browninho-no-pote',
    name: 'Browninho no Pote',
    category: 'brownies',
    shortDescription: 'Brownie em camadas com creme de Ninho, na versão de comer de colher.',
    description:
      'Pedaços generosos de brownie alternados com creme aveludado de leite Ninho. Servido em pote individual: uma mordida traz chocolate denso e creme fresco juntos.',
    ingredients: ['brownie', 'leite Ninho', 'creme de leite', 'leite condensado'],
    priceLabel: 'R$ 20 (un.)',
    images: [
      { src: '/browninho.jpeg', alt: 'Browninho no pote com brownie e creme de Ninho, colher exibindo as camadas', width: 1200, height: 1600 },
    ],
    servings: 'Pote individual ~ 350g',
    leadTimeDays: 2,
  },

  // ============================================================
  // COOKIES — adições com fotos reais
  // ============================================================
  {
    id: 'ck-002',
    slug: 'cookie-recheado-de-nutella',
    name: 'Cookie Recheado · Nutella',
    category: 'cookies-e-tortas',
    shortDescription: 'Massa amanteigada, recheio fluído de Nutella.',
    description:
      'Cookie de massa amanteigada com gotas de chocolate, recheado com Nutella que escorre na primeira mordida. Servido morninho fica ainda melhor.',
    ingredients: ['Nutella', 'manteiga', 'chocolate', 'açúcar mascavo'],
    priceLabel: 'R$ 14 (un.)',
    images: [
      { src: '/cookie-nutella.jpeg', alt: 'Cookie recheado de Nutella partido ao meio, recheio escorrendo', width: 1200, height: 1600 },
    ],
    featured: true,
    servings: 'Unidade',
    leadTimeDays: 2,
  },
  {
    id: 'ck-003',
    slug: 'cookie-recheado-de-kit-kat',
    name: 'Cookie Recheado · Kit Kat',
    category: 'cookies-e-tortas',
    shortDescription: 'Massa com gotas de chocolate, recheio cremoso de Kit Kat.',
    description:
      'Cookie de massa amanteigada com gotas de chocolate ao leite, recheado com creme profissional de Kit Kat. Wafer encontra cookie, o melhor dos dois mundos.',
    ingredients: ['Kit Kat', 'chocolate ao leite', 'manteiga', 'açúcar mascavo'],
    priceLabel: 'R$ 14 (un.)',
    images: [
      { src: '/cookie-kit-kat.jpeg', alt: 'Cookie de Kit Kat partido ao meio com recheio cremoso escorrendo', width: 1200, height: 1600 },
    ],
    servings: 'Unidade',
    leadTimeDays: 2,
  },
  {
    id: 'ck-004',
    slug: 'cookie-recheado-de-kinder-bueno',
    name: 'Cookie Recheado · Kinder Bueno',
    category: 'cookies-e-tortas',
    shortDescription: 'Massa amanteigada com creme de Kinder Bueno e avelãs.',
    description:
      'Cookie de massa amanteigada recheado com creme aveludado de Kinder Bueno, com toques de avelã torrada. Doçura na medida, leitoso e crocante.',
    ingredients: ['Kinder Bueno', 'avelã torrada', 'manteiga', 'chocolate ao leite'],
    priceLabel: 'R$ 14 (un.)',
    images: [
      { src: '/cookie-kinder-bueno.jpeg', alt: 'Cookie recheado de Kinder Bueno partido ao meio ao lado dos chocolates', width: 1200, height: 1600 },
    ],
    servings: 'Unidade',
    leadTimeDays: 2,
  },
  {
    id: 'ck-005',
    slug: 'cookie-recheado-de-galak-com-negresco',
    name: 'Cookie Recheado · Galak com Negresco',
    category: 'cookies-e-tortas',
    shortDescription: 'Massa de chocolate intenso, recheio de Galak com Negresco.',
    description:
      'Cookie de massa de cacau preto recheado com creme de Galak e pedacinhos de Negresco. Contraste forte entre o cookie escuro e o recheio branco: visual e sabor de impacto.',
    ingredients: ['cacau', 'Galak', 'Negresco', 'manteiga'],
    priceLabel: 'R$ 14 (un.)',
    images: [
      { src: '/cookie-galak.jpeg', alt: 'Cookie escuro de cacau recheado com creme branco de Galak com Negresco', width: 1200, height: 1600 },
    ],
    servings: 'Unidade',
    leadTimeDays: 2,
  },
  {
    id: 'ck-006',
    slug: 'cookie-recheado-de-ovomaltine',
    name: 'Cookie Recheado · Ovomaltine',
    category: 'cookies-e-tortas',
    shortDescription: 'Cookie clássico com gotas, recheio de creme de Ovomaltine.',
    description:
      'Cookie de massa amanteigada com gotas de chocolate, recheado com creme de Ovomaltine cremoso. Crocante por fora, fluído por dentro: tudo que um cookie precisa ser.',
    ingredients: ['Ovomaltine', 'chocolate', 'manteiga', 'açúcar mascavo'],
    priceLabel: 'R$ 14 (un.)',
    images: [
      { src: '/cookie-ovomaltine.jpeg', alt: 'Cookie recheado de Ovomaltine partido ao meio com recheio derretido', width: 1200, height: 1600 },
    ],
    servings: 'Unidade',
    leadTimeDays: 2,
  },

  // ============================================================
  // CATÁLOGO ORIGINAL — fotos reais ainda em produção (placeholder)
  // ============================================================

  // ------- BOLOS -------
  {
    id: 'b-001',
    slug: 'bolo-de-chocolate-com-morango',
    name: 'Bolo de Chocolate com Morango',
    category: 'bolos',
    shortDescription: 'Massa de cacau intenso, ganache cremosa e morangos frescos.',
    description:
      'Três camadas de massa úmida de cacau, recheio de ganache meio-amargo e cobertura de morangos selecionados. Decorado com filete de chocolate e raspas de cacau. Um clássico que recebe pedidos durante o ano inteiro.',
    ingredients: ['cacau 70%', 'morango fresco', 'creme de leite fresco', 'manteiga francesa', 'ovos caipiras'],
    priceLabel: 'Sob consulta',
    images: [
      { src: '/images/products/bolo-chocolate-morango.jpg', alt: 'Bolo de chocolate decorado com morangos frescos no topo', width: 1200, height: 1500 },
    ],
    servings: 'Serve 12 a 15 pessoas',
    leadTimeDays: 3,
  },
  {
    id: 'b-002',
    slug: 'naked-cake-de-frutas-vermelhas',
    name: 'Naked Cake de Frutas Vermelhas',
    category: 'bolos',
    shortDescription: 'Massa branca, creme de baunilha bourbon e composta de frutas vermelhas.',
    description:
      'Pão de ló aerado em três camadas, recheado com creme de baunilha bourbon e composta artesanal de framboesa, mirtilo e amora. Acabamento naked com lateral exposta e topo decorado com frutas frescas.',
    ingredients: ['baunilha bourbon', 'framboesa', 'mirtilo', 'amora', 'creme de leite fresco'],
    priceLabel: 'Sob consulta',
    images: [
      { src: '/images/products/naked-cake.jpg', alt: 'Naked cake decorado com frutas vermelhas frescas no topo', width: 1200, height: 1500 },
    ],
    servings: 'Serve 10 a 12 pessoas',
    leadTimeDays: 3,
  },
  {
    id: 'b-003',
    slug: 'bolo-de-pistache-com-framboesa',
    name: 'Bolo de Pistache com Framboesa',
    category: 'bolos',
    shortDescription: 'Massa de pistache siciliano com coulis de framboesa.',
    description:
      'Massa de pistache siciliano moído na hora, recheio de mousse de framboesa e cobertura espelhada rosé. Decorado com pistaches caramelizados e framboesas frescas. Sabor sofisticado e elegante.',
    ingredients: ['pistache siciliano', 'framboesa', 'chocolate branco', 'manteiga francesa'],
    priceLabel: 'Sob consulta',
    images: [
      { src: '/images/products/bolo-pistache.jpg', alt: 'Bolo de pistache com cobertura rosé e pistaches caramelizados', width: 1200, height: 1500 },
    ],
    servings: 'Serve 10 pessoas',
    leadTimeDays: 4,
  },

  // ------- BRIGADEIROS & BOMBONS -------
  {
    id: 'br-001',
    slug: 'caixa-de-brigadeiros-gourmet',
    name: 'Caixa de Brigadeiros Gourmet',
    category: 'brigadeiros',
    shortDescription: 'Sortimento autoral com 9 sabores em embalagem assinada.',
    description:
      'Caixa selecionada com nove sabores autorais: tradicional, pistache, café, maracujá, framboesa branca, paçoca, ninho com Nutella, limão siciliano e doce de leite com flor de sal. Cada brigadeiro é finalizado à mão e embalado em forminhas pretas.',
    priceLabel: 'A partir de R$ 75',
    images: [
      { src: '/images/products/caixa-brigadeiros.jpg', alt: 'Caixa preta com nove brigadeiros gourmet sortidos', width: 1200, height: 1500 },
    ],
    servings: 'Caixa com 9 unidades',
    leadTimeDays: 2,
  },
  {
    id: 'br-002',
    slug: 'bombom-aberto-de-morango',
    name: 'Bombom Aberto de Morango',
    category: 'brigadeiros',
    shortDescription: 'Morango fresco envolto em ganache e chocolate temperado.',
    description:
      'Morango selecionado, envolto em ganache cremosa de chocolate ao leite e finalizado com chocolate temperado. Servido aberto para evidenciar a fruta. Apenas mediante encomenda, por ser perecível.',
    priceLabel: 'R$ 9 (unidade)',
    images: [
      { src: '/images/products/bombom-morango.jpg', alt: 'Bombom de morango aberto revelando a fruta envolvida em ganache', width: 1200, height: 1500 },
    ],
    leadTimeDays: 1,
  },
  {
    id: 'br-003',
    slug: 'trufas-de-chocolate-meio-amargo',
    name: 'Trufas de Chocolate Meio-amargo',
    category: 'brigadeiros',
    shortDescription: 'Recheio de ganache, casca crocante de chocolate 70%.',
    description:
      'Ganache de chocolate 70% suavizada com creme de leite fresco e leve toque de conhaque, encerrada em casca temperada do mesmo chocolate. Acabamento polvilhado em cacau puro.',
    priceLabel: 'R$ 7 (unidade)',
    images: [
      { src: '/images/products/trufas.jpg', alt: 'Trufas de chocolate meio-amargo polvilhadas em cacau', width: 1200, height: 1500 },
    ],
    servings: 'Caixa com 12 unidades',
    leadTimeDays: 2,
  },

  // ------- OVOS DE PÁSCOA -------
  {
    id: 'op-001',
    slug: 'ovo-de-pascoa-recheado-de-trufa',
    name: 'Ovo de Páscoa Recheado de Trufa',
    category: 'ovos-de-pascoa',
    shortDescription: 'Casca de chocolate ao leite, recheio de trufa de avelã.',
    description:
      'Ovo de 500g com casca de chocolate ao leite premium e recheio generoso de ganache trufada de avelã torrada. Acompanha embalagem rústica de papel kraft e fita de cetim. Apenas por encomenda na temporada de Páscoa.',
    priceLabel: 'A partir de R$ 145',
    images: [
      { src: '/images/products/ovo-pascoa-trufado.jpg', alt: 'Ovo de Páscoa aberto exibindo recheio cremoso de trufa', width: 1200, height: 1500 },
    ],
    seasonal: 'pascoa',
    servings: 'Ovo de 500g',
    leadTimeDays: 7,
  },
  {
    id: 'op-002',
    slug: 'ovo-colher-de-pistache',
    name: 'Ovo Colher de Pistache',
    category: 'ovos-de-pascoa',
    shortDescription: 'Meio-ovo cheio de creme de pistache. Coma de colher.',
    description:
      'Meia casca de chocolate branco belga, recheada generosamente com creme de pistache italiano. Para comer de colher. Acompanha colher de bambu e embalagem em caixa rígida assinada Doces Clau.',
    priceLabel: 'A partir de R$ 165',
    images: [
      { src: '/images/products/ovo-colher-pistache.jpg', alt: 'Ovo colher de pistache em embalagem assinada com colher de bambu', width: 1200, height: 1500 },
    ],
    seasonal: 'pascoa',
    servings: 'Meio-ovo de 350g',
    leadTimeDays: 7,
  },

  // ------- COOKIES & TORTAS -------
  {
    id: 'ct-001',
    slug: 'cookie-recheado-de-brigadeiro',
    name: 'Cookie Recheado de Brigadeiro',
    category: 'cookies-e-tortas',
    shortDescription: 'Massa amanteigada com gotas, recheio cremoso de brigadeiro.',
    description:
      'Cookie de massa amanteigada com gotas de chocolate belga, recheado com brigadeiro tradicional cremoso. Crocante por fora, macio e fluído por dentro. Embalado individualmente, ideal para presentes e lembrancinhas.',
    priceLabel: 'R$ 14 (unidade)',
    images: [
      { src: '/images/products/cookie-brigadeiro.jpg', alt: 'Cookie partido ao meio revelando recheio cremoso de brigadeiro', width: 1200, height: 1500 },
    ],
    servings: 'Unidade',
    leadTimeDays: 2,
  },
  {
    id: 'ct-002',
    slug: 'tarte-tatin-de-maca',
    name: 'Tarte Tatin de Maçã',
    category: 'cookies-e-tortas',
    shortDescription: 'Maçãs caramelizadas em massa folhada amanteigada.',
    description:
      'Maçãs Fuji caramelizadas lentamente em manteiga e açúcar mascavo, dispostas sobre massa folhada artesanal. Servida levemente morna, acompanha pote de creme inglês à parte.',
    priceLabel: 'R$ 95',
    images: [
      { src: '/images/products/tarte-tatin.jpg', alt: 'Tarte Tatin de maçã com maçãs caramelizadas dispostas em espiral', width: 1200, height: 1500 },
    ],
    servings: 'Serve 6 a 8 pessoas',
    leadTimeDays: 3,
  },

  // ------- SOBREMESAS EM COPO -------
  {
    id: 'sc-001',
    slug: 'copo-de-tiramisu',
    name: 'Copo de Tiramisù',
    category: 'sobremesas-em-copo',
    shortDescription: 'Camadas de creme mascarpone, café espresso e cacau.',
    description:
      'Camadas alternadas de biscoito champanhe embebido em café espresso e creme aerado de mascarpone. Finalizado com cacau peneirado e raspas de chocolate. Servido em copo individual de vidro.',
    priceLabel: 'R$ 22 (unidade)',
    images: [
      { src: '/images/products/copo-tiramisu.jpg', alt: 'Copo de tiramisù com camadas visíveis de creme e cacau', width: 1200, height: 1500 },
    ],
    servings: 'Copo individual',
    leadTimeDays: 1,
  },
  {
    id: 'sc-002',
    slug: 'copo-de-limao-com-merengue',
    name: 'Copo de Limão com Merengue',
    category: 'sobremesas-em-copo',
    shortDescription: 'Creme de limão siciliano e merengue maçaricado.',
    description:
      'Base de farofa de biscoito amanteigado, creme de limão siciliano feito com ovos caipiras e topo de merengue italiano maçaricado na hora. Cítrico, leve e marcante.',
    priceLabel: 'R$ 22 (unidade)',
    images: [
      { src: '/images/products/copo-limao.jpg', alt: 'Copo de creme de limão com merengue maçaricado dourado no topo', width: 1200, height: 1500 },
    ],
    servings: 'Copo individual',
    leadTimeDays: 1,
  },

  // ------- PERSONALIZADOS -------
  {
    id: 'p-001',
    slug: 'bolo-de-aniversario-personalizado',
    name: 'Bolo de Aniversário Personalizado',
    category: 'personalizados',
    shortDescription: 'Conceito, sabor e decoração desenhados com você.',
    description:
      'Desenvolvemos seu bolo de aniversário do briefing à entrega. Definimos paleta, recheios, tema de decoração e tamanho conforme número de convidados. Atendemos casamentos, mesversários e celebrações corporativas.',
    priceLabel: 'Sob consulta',
    images: [
      { src: '/images/products/bolo-personalizado.jpg', alt: 'Bolo de aniversário personalizado com decoração artística', width: 1200, height: 1500 },
    ],
    leadTimeDays: 7,
  },

  // ------- NATAL -------
  {
    id: 'n-001',
    slug: 'panettone-recheado-de-pistache',
    name: 'Panettone Recheado de Pistache',
    category: 'natal',
    shortDescription: 'Massa artesanal de fermentação longa, recheio de creme de pistache.',
    description:
      'Panettone de massa artesanal com 48h de fermentação natural, recheado com creme de pistache italiano e gotas de chocolate branco. Embalado em caixa de Natal assinada.',
    priceLabel: 'A partir de R$ 145',
    images: [
      { src: '/images/products/panettone-pistache.jpg', alt: 'Panettone recheado de pistache em embalagem de Natal', width: 1200, height: 1500 },
    ],
    seasonal: 'natal',
    servings: 'Panettone de 750g',
    leadTimeDays: 5,
  },
  {
    id: 'n-002',
    slug: 'bolo-de-natal-com-frutas-vermelhas',
    name: 'Bolo de Natal com Frutas Vermelhas',
    category: 'natal',
    shortDescription: 'Bolo festivo decorado para o centro da mesa.',
    description:
      'Bolo de baunilha bourbon com recheio de creme diplomata e composta de frutas vermelhas. Decoração festiva com folhas de açúcar, frutas frescas e detalhes em chocolate temperado.',
    priceLabel: 'Sob consulta',
    images: [
      { src: '/images/products/bolo-natal.jpg', alt: 'Bolo de Natal decorado com frutas vermelhas e folhagens', width: 1200, height: 1500 },
    ],
    seasonal: 'natal',
    servings: 'Serve 12 a 15 pessoas',
    leadTimeDays: 5,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit);
}
