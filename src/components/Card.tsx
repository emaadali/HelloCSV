import { cva } from 'cva';
import { forwardRef, ReactNode } from 'preact/compat';

interface Props {
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'muted';
  withPadding?: boolean;
}

const baseClasses = cva(
  'flex flex-col gap-6 rounded-[var(--hello-csv-radius)] border border-hello-csv-border text-hello-csv-card-foreground shadow-xs',
  {
    variants: {
      variant: {
        default: 'bg-hello-csv-card',
        muted: 'bg-hello-csv-muted',
      },
      withPadding: {
        true: 'p-6',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      withPadding: true,
    },
  }
);

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant, withPadding = true }, ref) => {
    const componentClassName = baseClasses({ variant, withPadding });

    return (
      <div ref={ref} className={`${componentClassName} ${className}`}>
        {children}
      </div>
    );
  }
);

export default Card;
