import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';
import { ReactNode } from 'preact/compat';

type VariantType = 'info' | 'success' | 'error' | 'warning';

interface Props {
  variant?: VariantType;
  header?: string;
  description: string;
}

const baseClasses: Record<
  VariantType,
  { icon?: ReactNode; classes?: string; descriptionClasses?: string }
> = {
  info: {
    icon: (
      <InformationCircleIcon className="size-4 text-current" aria-hidden="true" />
    ),
    classes:
      'relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-card-foreground px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start',
    descriptionClasses: 'text-hello-csv-muted-foreground',
  },
  success: {
    icon: (
      <CheckCircleIcon className="size-4 text-hello-csv-success" aria-hidden="true" />
    ),
    classes:
      'relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-success px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start',
    descriptionClasses: 'text-hello-csv-success/90',
  },
  error: {
    icon: (
      <ExclamationTriangleIcon
        className="size-4 text-hello-csv-destructive"
        aria-hidden="true"
      />
    ),
    classes:
      'relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-destructive px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start',
    descriptionClasses: 'text-hello-csv-destructive/90',
  },
  warning: {
    icon: (
      <ExclamationTriangleIcon
        className="size-4 text-hello-csv-warning"
        aria-hidden="true"
      />
    ),
    classes:
      'relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-warning px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start',
    descriptionClasses: 'text-hello-csv-warning/90',
  },
};

export default function Alert({
  variant = 'info',
  header,
  description,
}: Props) {
  const { icon, classes, descriptionClasses } = baseClasses[variant];

  return (
    <div className={classes}>
      {icon}
      <div className="col-start-2">
        {header && (
          <div className="font-medium leading-none tracking-tight">{header}</div>
        )}
        <div className={`text-sm ${descriptionClasses} ${header ? 'mt-1' : ''}`}>
          {description}
        </div>
      </div>
    </div>
  );
}
