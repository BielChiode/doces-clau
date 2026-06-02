interface CircularSealProps {
  text: string;
  centerText?: string;
  size?: number;
  className?: string;
  rotate?: boolean;
}

export function CircularSeal({
  text,
  centerText,
  size = 140,
  className,
  rotate = false,
}: CircularSealProps) {
  const id = `seal-path-${text.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${size}`;
  const radius = size / 2 - 14;
  const cx = size / 2;
  const cy = size / 2;

  // Adiciona um bullet ao final para conectar quando repetido
  const looped = `${text}  ·  `;

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className={rotate ? 'animate-spin-slow' : ''}
      >
        <defs>
          <path
            id={id}
            d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>

        {/* anel externo */}
        <circle
          cx={cx}
          cy={cy}
          r={size / 2 - 4}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.55"
        />
        <circle
          cx={cx}
          cy={cy}
          r={size / 2 - 9}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.35"
        />

        <text
          fill="currentColor"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: size * 0.082,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          <textPath href={`#${id}`} startOffset="0">
            {looped.repeat(3)}
          </textPath>
        </text>

        {centerText && (
          <text
            x={cx}
            y={cy + size * 0.04}
            textAnchor="middle"
            fill="currentColor"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: size * 0.18,
            }}
          >
            {centerText}
          </text>
        )}
      </svg>
    </div>
  );
}
