export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: 'Com quanto tempo de antecedência preciso encomendar?',
    a: 'Bolos e tortas: 3 a 4 dias. Brigadeiros e cookies: 2 dias. Ovos de Páscoa e panettones: 7 dias na temporada. Bolos personalizados de grande porte: pelo menos 10 dias.',
  },
  {
    q: 'Vocês entregam?',
    a: 'Atendemos a região de São Paulo capital com entrega própria (taxa varia por bairro) e via motoboy de confiança. Itens delicados como bolos altos podem exigir retirada presencial; combinamos no momento da encomenda.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos PIX, transferência e cartão de crédito (via link). Para confirmar a encomenda pedimos 50% de sinal no momento do pedido. Os outros 50% até 2 dias antes da entrega.',
  },
  {
    q: 'Posso cancelar uma encomenda?',
    a: 'Cancelamentos com mais de 72h de antecedência têm devolução integral do sinal. Entre 72h e 24h, devolvemos 50%. Abaixo de 24h, o sinal não é devolvido, pois já compramos os ingredientes especiais.',
  },
  {
    q: 'Vocês fazem opções sem glúten ou veganas?',
    a: 'Sim, mediante consulta. Temos versões adaptadas de vários produtos. O lead time aumenta em 1 a 2 dias e o preço pode variar conforme os ingredientes especiais.',
  },
  {
    q: 'Os preços são fixos?',
    a: 'Produtos de catálogo têm preço de referência. Bolos personalizados, casamentos e eventos são orçados conforme tamanho, complexidade e ingredientes: pedimos um briefing breve antes de fechar o valor.',
  },
];
