import { cva } from 'cva';
import { ReactNode } from 'preact/compat';

type Variant = 'error' | 'info';

interface Props {
  variant?: Variant;
  children?: ReactNode;
  tooltipText?: string;
}

const tooltipBaseClasses = cva(
  'bg-hello-csv-popover text-hello-csv-popover-foreground absolute outline top-full w-full whitespace-normal z-5 mb-2 hidden px-2 py-4 text-xs group-focus-within:block group-hover:block rounded-[--radius-hello-csv-md] border border-hello-csv-border shadow-md',
  {
    variants: {
      variant: {
        error: 'outline-hello-csv-destructive',
        info: 'outline-hello-csv-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const tooltipWrapperBaseClasses = cva('group relative h-full w-full', {
  variants: {
    variant: {
      error:
        'focus-within:outline-hello-csv-destructive hover:outline-hello-csv-destructive',
      info: 'focus-within:outline-hello-csv-muted-foreground hover:outline-hello-csv-muted-foreground',
    },
    withOutline: {
      true: 'focus-within:outline hover:outline hover:z-5 focus-within:z-5',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'info',
    withOutline: false,
  },
});

export default function SheetTooltip({
  variant,
  children,
  tooltipText,
}: Props) {
  const tooltipClassName = tooltipBaseClasses({ variant });
  const tooltipWrapperClassName = tooltipWrapperBaseClasses({
    variant,
    withOutline: !!tooltipText,
  });

  return (
    <div className={tooltipWrapperClassName} tabIndex={0}>
      {children}
      {tooltipText && <span className={tooltipClassName}>{tooltipText}</span>}
    </div>
  );
}
