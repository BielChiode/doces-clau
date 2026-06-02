interface PlaceholderImageProps {
  label: string;
  className?: string;
  variant?: 'peach' | 'rose' | 'cream' | 'wine';
  aspectRatio?: string;
}

const palettes = {
  peach: { bg: '#F5DCD0', ink: '#5B2A2A', accent: '#B08864' },
  rose: { bg: '#E8C8BE', ink: '#3E1C1C', accent: '#5B2A2A' },
  cream: { bg: '#FAF5F0', ink: '#2A2522', accent: '#B08864' },
  wine: { bg: '#5B2A2A', ink: '#F5DCD0', accent: '#C99A8E' },
};

export function PlaceholderImage({
  label,
  className,
  variant = 'peach',
  aspectRatio = '4 / 5',
}: PlaceholderImageProps) {
  const p = palettes[variant];

  return (
    <div className={className} style={{ aspectRatio, position: 'relative', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={label}
      >
        <rect width="400" height="500" fill={p.bg} />

        {/* círculo decorativo ao fundo (referência logo) */}
        <circle cx="200" cy="250" r="140" fill="none" stroke={p.accent} strokeWidth="0.7" opacity="0.4" />
        <circle cx="200" cy="250" r="120" fill="none" stroke={p.accent} strokeWidth="0.5" opacity="0.3" />

        {/* losangos decorativos */}
        <g fill={p.accent} opacity="0.55">
          <rect x="196" y="86" width="8" height="8" transform="rotate(45 200 90)" />
          <rect x="196" y="406" width="8" height="8" transform="rotate(45 200 410)" />
        </g>

        {/* texto central principal */}
        <text
          x="200"
          y="246"
          textAnchor="middle"
          fill={p.ink}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 30,
            fontWeight: 400,
          }}
        >
          <tspan x="200" dy="0">
            {truncateLine(label, 22)}
          </tspan>
        </text>

        {/* subtítulo da marca */}
        <text
          x="200"
          y="282"
          textAnchor="middle"
          fill={p.accent}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 9,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          Doces Clau · Confeitaria
        </text>
      </svg>
    </div>
  );
}

function truncateLine(s: string, n: number) {
  if (s.length <= n) return s;
  return `${s.slice(0, n - 1)}…`;
}
