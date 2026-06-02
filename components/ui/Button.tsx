import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'outline';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-wine)] text-[var(--color-cream)] hover:bg-[var(--color-wine-deep)]',
  ghost:
    'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-rose)]/40',
  outline:
    'bg-transparent text-[var(--color-ink)] border border-[var(--color-copper)] hover:bg-[var(--color-copper)] hover:text-[var(--color-cream)]',
};

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] uppercase tracking-[0.22em] font-medium rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-copper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]';

type LinkButtonProps = BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className' | 'children'>;
type BtnProps = BaseProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

export function Button(props: LinkButtonProps | BtnProps) {
  const { variant = 'primary', className, children } = props;
  const classes = cn(base, variantClasses[variant], className);

  if ('href' in props && props.href) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as object)}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props as BtnProps;
  void _v; void _c; void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
