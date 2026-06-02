export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-001',
    quote:
      'O bolo da Clau virou tradição no aniversário da minha filha. Cada ano ela escolhe o tema e a Clau entrega exatamente o que a gente imaginou, só que mais bonito.',
    author: 'Marina Albuquerque',
    context: 'cliente desde 2022',
  },
  {
    id: 't-002',
    quote:
      'Encomendei a caixa de brigadeiros para um jantar pequeno e foi a estrela da noite. Apresentação impecável e o sabor de pistache parou todo mundo.',
    author: 'Rafael Toledo',
    context: 'cliente',
  },
  {
    id: 't-003',
    quote:
      'Recebi o ovo de Páscoa da Doces Clau e abri devagarinho, para não estragar. Quando vi o recheio de trufa, entendi por que tem fila de espera.',
    author: 'Beatriz Lemos',
    context: 'Páscoa 2025',
  },
];
