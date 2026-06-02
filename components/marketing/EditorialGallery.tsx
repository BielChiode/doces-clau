import Image from 'next/image';

interface GalleryItem {
  src: string;
  label: string;
  alt: string;
  aspect: string;
  span: string;
  rot: number;
}

const ITEMS: GalleryItem[] = [
  {
    src: '/bolo-pote-ninho-nutella-2.jpeg',
    label: 'Ninho com Nutella',
    alt: 'Bolo no pote Ninho com Nutella, calda derretida no topo',
    aspect: '4/5',
    span: 'md:col-span-2 md:row-span-2',
    rot: -1.2,
  },
  {
    src: '/cookie-nutella.jpeg',
    label: 'Cookie de Nutella',
    alt: 'Cookie recheado de Nutella partido ao meio',
    aspect: '1/1',
    span: '',
    rot: 0.6,
  },
  {
    src: '/bolo-pote-prestigio.jpeg',
    label: 'Bolo no pote · Prestígio',
    alt: 'Bolo no pote sabor Prestígio com cobertura de coco',
    aspect: '4/5',
    span: '',
    rot: 0,
  },
  {
    src: '/cookie-kit-kat.jpeg',
    label: 'Cookie de Kit Kat',
    alt: 'Cookie recheado de Kit Kat com recheio escorrendo',
    aspect: '1/1',
    span: '',
    rot: 1.5,
  },
  {
    src: '/brownie.jpeg',
    label: 'Brownie de Nutella',
    alt: 'Brownie partido ao meio com cobertura de Nutella',
    aspect: '3/4',
    span: 'md:col-span-2',
    rot: -0.4,
  },
  {
    src: '/bolo-pote-ninho-morango.jpeg',
    label: 'Ninho com Morango',
    alt: 'Bolo no pote Ninho com morango e geleia caseira',
    aspect: '4/5',
    span: '',
    rot: 0.8,
  },
];

export function EditorialGallery() {
  return (
    <section
      aria-labelledby="gallery-title"
      className="mx-auto max-w-[1440px] px-5 py-24 md:px-14 md:py-32"
    >
      <div className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between md:gap-8">
        <h2
          id="gallery-title"
          className="max-w-[640px] font-display text-[36px] leading-[1.06] md:text-[58px]"
        >
          Uma <em className="italic text-[var(--color-wine)]">olhada</em> pelo nosso caderno.
        </h2>
        <p className="mt-6 max-w-[320px] text-[14.5px] leading-[1.7] text-[var(--color-ink-soft)] md:mt-0">
          Sabores assinados pela casa, fotografados no ateliê.
          Quer mais? Acompanhe no Instagram <em className="font-display">@docesclau</em>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={item.span}
            style={{ transform: `rotate(${item.rot}deg)` }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: item.aspect }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover warm-image"
              />
            </div>
            <p className="mt-2 px-1 text-[11px] uppercase tracking-[0.28em] text-[var(--color-copper-deep)]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
