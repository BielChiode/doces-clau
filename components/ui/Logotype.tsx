import Image from 'next/image';
import logoDoces from '@/public/logo-doces.png';
import logoClau from '@/public/logo-clau.png';
import { cn } from '@/lib/utils';

interface LogotypeProps {
  /** altura visual em px da palavra "CLAU" — a palavra "doces" escala proporcionalmente */
  height?: number;
  /** força contraste em fundos escuros (footer) */
  variant?: 'default' | 'invert';
  className?: string;
  /** se true, aplica priority na primeira renderização (usar no header) */
  priority?: boolean;
}

// "doces" é mais alongado (3.5:1); "CLAU" é mais quadrado (2:1).
// Para harmonia visual: "doces" renderiza com ~80% da altura de "CLAU".
const DOCES_RATIO = 3058 / 874; // ~3.5
const CLAU_RATIO = 3122 / 1552; // ~2.0
const DOCES_HEIGHT_RATIO = 0.7;

export function Logotype({
  height = 38,
  variant = 'default',
  className,
  priority = false,
}: LogotypeProps) {
  const docesHeight = height * DOCES_HEIGHT_RATIO;
  const docesWidth = docesHeight * DOCES_RATIO;
  const clauHeight = height;
  const clauWidth = clauHeight * CLAU_RATIO;

  // "invert" clareia para creme em fundos escuros (footer wine).
  // brightness(0) → preto sólido; depois invert(1) → branco; sepia/hue → cor creme da paleta.
  const invertStyle =
    variant === 'invert'
      ? { filter: 'brightness(0) invert(1) sepia(0.18) hue-rotate(-15deg) saturate(1.2)' }
      : undefined;

  return (
    <span className={cn('inline-flex items-baseline gap-2.5', className)}>
      <Image
        src={logoDoces}
        alt=""
        height={docesHeight}
        width={docesWidth}
        priority={priority}
        style={{ height: docesHeight, width: 'auto', ...invertStyle }}
        aria-hidden
      />
      <Image
        src={logoClau}
        alt=""
        height={clauHeight}
        width={clauWidth}
        priority={priority}
        style={{ height: clauHeight, width: 'auto', ...invertStyle }}
        aria-hidden
      />
      {/* texto acessível invisível */}
      <span className="sr-only">Doces Clau</span>
    </span>
  );
}
