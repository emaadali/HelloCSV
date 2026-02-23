import { cva } from 'cva';

type SpinnerColor = 'light' | 'dark' | 'primary';

interface Props {
  color?: SpinnerColor;
}

const spinner = cva(
  'inline-block rounded-full animate-spin border-t-transparent size-4 border-2',
  {
    variants: {
      color: {
        light: 'border-hello-csv-primary-foreground border-t-transparent',
        dark: 'border-hello-csv-foreground border-t-transparent',
        primary: 'border-hello-csv-primary border-t-transparent',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
);

export default function Spinner({ color = 'primary' }: Props) {
  return <span className={`${spinner({ color })}`} />;
}
