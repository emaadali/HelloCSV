import { cva } from 'cva';
import { ReactNode } from 'preact/compat';

type BadgeVariant = 'primary' | 'success' | 'error' | 'secondary' | 'outline';

interface Props {
  children?: ReactNode;
  variant?: BadgeVariant;
}

const baseClasses = cva(
  'inline-flex items-center justify-center rounded-[var(--hello-csv-radius-md)] border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-hello-csv-primary text-hello-csv-primary-foreground',
        secondary:
          'border-transparent bg-hello-csv-secondary text-hello-csv-secondary-foreground',
        success:
          'border-transparent bg-hello-csv-success text-hello-csv-success-foreground',
        error:
          'border-transparent bg-hello-csv-destructive text-white',
        outline: 'text-hello-csv-foreground border-hello-csv-border',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export default function Badge({ children, variant }: Props) {
  const componentClassName = baseClasses({ variant });

  return <div className={componentClassName}>{children}</div>;
}
