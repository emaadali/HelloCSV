import { useId } from 'preact/hooks';

interface Props {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label?: string;
}

export default function Checkbox({ checked, setChecked, label }: Props) {
  const id = useId();

  return (
    <div className="flex gap-3 items-center">
      <div className="flex shrink-0 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            checked={checked}
            onChange={(e) => setChecked((e.target as HTMLInputElement).checked)}
            id={id}
            type="checkbox"
            className="peer col-start-1 row-start-1 size-4 shrink-0 appearance-none rounded-[4px] border border-hello-csv-input bg-transparent transition-shadow outline-none focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:cursor-not-allowed disabled:opacity-50 checked:border-hello-csv-primary checked:bg-hello-csv-primary checked:text-hello-csv-primary-foreground forced-colors:appearance-auto"
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-hello-csv-primary-foreground group-has-disabled:stroke-hello-csv-muted-foreground"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>
      {label && (
        <div className="text-sm/6">
          <label htmlFor={id} className="font-medium text-hello-csv-foreground">
            {label}
          </label>
        </div>
      )}
    </div>
  );
}
