import type { PropsWithChildren } from 'hono/jsx';

type HeroiconsSvgWrapperProps = {
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
} & PropsWithChildren;

export const HeroiconsSvgWrapper = ({
  children,
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = false,
}: HeroiconsSvgWrapperProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.7'
      stroke='currentColor'
      class={className}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      <title>{ariaLabel}</title>
      {children}
    </svg>
  );
};

type SnsSvgWrapperProps = {
  className?: string;
  fill?: string;
  'aria-label'?: string;
} & PropsWithChildren;

export const SnsSvgWrapper = ({
  children,
  className,
  fill,
  'aria-label': ariaLabel,
}: SnsSvgWrapperProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 24 24'
      class={className}
      fill={fill}
      aria-label={ariaLabel}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      {children}
    </svg>
  );
};
