import { cva } from 'cva';

interface Props {
  activeButton: string;
  buttons: ButtonGroupDefinition[];
}

export type ButtonGroupDefinition = {
  value: string;
  label: string;
  onClick: () => void;
  variant: 'default' | 'danger';
};

const buttonStyles = cva(
  'relative inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium ring-hello-csv-border ring-1 ring-inset focus:z-10 transition-colors',
  {
    variants: {
      active: {
        true: '',
        false: 'bg-hello-csv-background hover:bg-hello-csv-accent',
      },
      variant: {
        default: '',
        danger: 'text-hello-csv-destructive',
      },
      location: {
        left: 'rounded-l-[--radius-hello-csv-md]',
        center: '-ml-px',
        right: 'rounded-r-[--radius-hello-csv-md] -ml-px ',
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: 'default',
        className: 'bg-hello-csv-foreground text-hello-csv-background',
      },
      {
        active: true,
        variant: 'danger',
        className: 'bg-hello-csv-destructive text-white',
      },
      {
        active: false,
        variant: 'default',
        className: 'text-hello-csv-foreground',
      },
      {
        active: false,
        variant: 'danger',
        className: 'text-hello-csv-destructive',
      },
    ],
  }
);

export default function ButtonGroup({ activeButton, buttons }: Props) {
  return (
    <span className="isolate inline-flex rounded-[--radius-hello-csv-md] shadow-xs">
      {buttons.map((button, index) => (
        <button
          key={button.value}
          type="button"
          onClick={button.onClick}
          aria-current={button.value === activeButton}
          className={buttonStyles({
            active: button.value === activeButton,
            variant: button.variant,
            location:
              index === 0
                ? 'left'
                : index === buttons.length - 1
                  ? 'right'
                  : 'center',
          })}
        >
          {button.label}
        </button>
      ))}
    </span>
  );
}
