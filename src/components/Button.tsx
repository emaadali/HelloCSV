import { cva } from 'cva';
import { CSSProperties, ReactNode } from 'preact/compat';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger';

interface Props {
  children?: ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  disabled?: boolean;
  withFullWidth?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const baseClasses = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[--radius-hello-csv-md] text-sm font-medium transition-all outline-none h-10 px-4 py-2 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          'bg-hello-csv-primary text-hello-csv-primary-foreground shadow-xs hover:bg-hello-csv-primary/90 focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]',
        secondary:
          'bg-hello-csv-secondary text-hello-csv-secondary-foreground shadow-xs hover:bg-hello-csv-secondary/80 focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]',
        tertiary:
          'border border-hello-csv-input bg-hello-csv-background text-hello-csv-foreground hover:bg-hello-csv-accent hover:text-hello-csv-accent-foreground focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]',
        success:
          'bg-hello-csv-success text-hello-csv-success-foreground shadow-xs hover:bg-hello-csv-success/90 focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]',
        danger:
          'bg-hello-csv-destructive text-white shadow-xs hover:bg-hello-csv-destructive/90 focus-visible:ring-hello-csv-destructive/20 focus-visible:ring-[3px]',
      },
      withFullWidth: {
        true: 'w-full',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      withFullWidth: false,
      variant: 'primary',
      disabled: false,
    },
  }
);

export default function Button({
  children,
  variant,
  disabled,
  onClick,
  withFullWidth,
}: Props) {
  const componentClassName = baseClasses({ variant, disabled, withFullWidth });

  return (
    <div
      role="button"
      tabIndex={0}
      className={componentClassName}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
}
