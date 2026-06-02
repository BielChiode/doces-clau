export type Season = 'pascoa' | 'natal' | null;

export interface SeasonInfo {
  key: Season;
  label: string;
  tagline: string;
  ctaText: string;
  categorySlug: string;
}

export function getActiveSeason(date: Date = new Date()): Season {
  const month = date.getMonth() + 1; // 1-12
  if (month === 3 || month === 4) return 'pascoa';
  if (month === 11 || month === 12) return 'natal';
  return null;
}

export function getSeasonInfo(season: Season): SeasonInfo | null {
  if (season === 'pascoa') {
    return {
      key: 'pascoa',
      label: 'Páscoa',
      tagline: 'Ovos artesanais recheados e bombons especiais',
      ctaText: 'Ver coleção de Páscoa',
      categorySlug: 'ovos-de-pascoa',
    };
  }
  if (season === 'natal') {
    return {
      key: 'natal',
      label: 'Natal',
      tagline: 'Bolos festivos, panettones recheados e doces de Natal',
      ctaText: 'Ver coleção de Natal',
      categorySlug: 'natal',
    };
  }
  return null;
}
