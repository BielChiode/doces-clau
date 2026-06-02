# Doces Clau · Confeitaria Artesanal

Site institucional + catálogo vitrine da **Doces Clau**, construído em Next.js 16 com Tailwind CSS v4.

Identidade visual: **"Caderno de Receitas Editorial"** — tensão intencional entre o editorial refinado (revista francesa de pastelaria) e o calor manuscrito de um caderno de receitas de família.

---

## Stack

- Next.js 15.1 (App Router, React 19)
- TypeScript strict
- Tailwind CSS v4 (com `@theme` block)
- Tipografia: Fraunces (display), Caveat (script), Inter Tight (body) — via `next/font/google`
- Sem CMS — produtos hardcoded em `content/products.ts`
- Deploy: Vercel

## Scripts

```bash
npm run dev        # dev server (http://localhost:3000)
npm run build      # build de produção
npm run start      # rodar produção
npm run lint       # ESLint
npm run typecheck  # TypeScript em modo strict
```

---

## 🔧 Onde editar (TODOs)

Toda configuração da marca está em **`lib/config.ts`**. Edite só lá para trocar:

- `whatsappNumber` — número real (formato `5511999999999`, só dígitos)
- `email` — email de contato
- `city` / `state` — localização
- `instagram` — URL do Instagram
- `siteUrl` — domínio final (também pode setar via `NEXT_PUBLIC_SITE_URL` na Vercel)

### Para adicionar/editar produtos
Edite `content/products.ts` — interface tipada, IntelliSense funciona.

### Para trocar imagens
Os produtos hoje usam `<PlaceholderImage>` (SVG estilizado com nome do produto na paleta da marca). Quando tiver as fotos reais, basta:
1. Adicionar imagem em `public/images/products/<slug>.jpg`
2. Trocar o componente `<PlaceholderImage>` por `<Image>` do next/image dentro de `components/product/ProductCard.tsx` e demais lugares onde aparece (Hero, galeria, página de produto).

### Para o Schema.org / JSON-LD
Edite `components/seo/JsonLdBakery.tsx` se quiser incluir endereço físico, geolocalização etc.

### Sazonalidade
A lógica está em `lib/seasonal.ts`. Hoje:
- Março/Abril → mostra banner de **Páscoa** automaticamente
- Novembro/Dezembro → mostra banner de **Natal** automaticamente
- Demais meses → banner não aparece

---

## Estrutura

```
doces-clau/
├── app/                 # rotas (App Router)
│   ├── layout.tsx       # layout global, fontes, metadata, JSON-LD
│   ├── page.tsx         # Home editorial
│   ├── cardapio/        # catálogo + página de produto
│   ├── sobre/
│   ├── encomendas/
│   └── contato/
├── components/
│   ├── layout/          # HeaderBar, MarqueeStrip, FooterRich
│   ├── ui/              # Button, ChapterHeading, CircularSeal, Divider, NoiseOverlay, PlaceholderImage
│   ├── marketing/       # HeroEditorial, BrandManifest, SeasonalBanner, etc
│   ├── product/         # ProductCard, ProductGrid, CategoryFilters
│   ├── whatsapp/        # WhatsAppFAB, WhatsAppCTA
│   └── seo/             # JsonLdBakery
├── content/             # produtos, depoimentos, FAQ
├── lib/                 # config, whatsapp, seasonal, utils
└── public/              # logo, imagens
```

---

## Decisões de design (resumo)

### Paleta (`app/globals.css` via `@theme`)
- `--color-rose: #E8C8BE` (rosé/blush do logo)
- `--color-peach: #F5DCD0` (nude/peach principal)
- `--color-cream: #FAF5F0` (off-white base)
- `--color-ink: #2A2522` (grafite suave, texto)
- `--color-wine: #5B2A2A` (CTAs primários)
- `--color-copper: #B08864` (filetes e detalhes)

### Motivo recorrente: "Carimbo Circular"
A logo é um carimbo circular. O site amplifica isso:
- `<CircularSeal>` em vários pontos (selos sazonais, footer, manifesto, FAB)
- `<WhatsAppFAB>` circular com texto rotacionando ao redor
- Selos em ângulo (-12deg) como adesivos sobre imagens

### Tipografia
- **Fraunces** (display) — eixos SOFT + opsz para charme orgânico
- **Caveat** (script) — anotações marginais, assinatura "— Clau"
- **Inter Tight** (body) — sans denso e neutro

---

## Performance

Para verificar Lighthouse: rode `npm run build && npm run start` e abra Chrome DevTools → Lighthouse → Mobile.

Metas: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.

---

## License

Privado. Todos os direitos reservados — Doces Clau.
