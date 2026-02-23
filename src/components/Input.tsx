import {
  FormEvent,
  forwardRef,
  PropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from 'preact/compat';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ImporterOutputFieldType } from '../types';
import { useTranslations } from '../i18';

interface Props {
  value: ImporterOutputFieldType;
  onBlur?: (value: ImporterOutputFieldType) => void;
  onChange?: (value: ImporterOutputFieldType) => void;
  placeholder?: string;
  iconBuilder?: (props: PropsWithoutRef<ReactNode>) => ReactNode;
  classes?: string;
  clearable?: boolean;
  type?: 'text' | 'number';
  'aria-label'?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      value,
      onBlur,
      onChange,
      placeholder,
      iconBuilder,
      classes,
      clearable,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const { t } = useTranslations();
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    const displayClearIcon = clearable && value != null && value !== '';

    function getParsedValue(e: FormEvent<HTMLInputElement>) {
      const target = e.target as HTMLInputElement;
      const value = type === 'number' ? target?.valueAsNumber : target?.value;
      const parsedValue =
        typeof value === 'number' && isNaN(value) ? '' : value;

      return parsedValue ?? '';
    }

    return (
      <div className="grid grid-cols-1">
        <input
          aria-label={props['aria-label']}
          ref={ref}
          type={type}
          inputMode={type === 'number' ? 'numeric' : 'text'}
          placeholder={placeholder}
          value={
            typeof localValue === 'boolean' ? localValue.toString() : localValue
          }
          onChange={(e) =>
            onChange?.(getParsedValue(e)) ?? setLocalValue(getParsedValue(e))
          }
          className={`${classes} ${iconBuilder != null ? 'pl-10' : ''} ${clearable ? 'pr-10' : ''} col-start-1 row-start-1 flex h-10 w-full min-w-0 rounded-[var(--hello-csv-radius-md)] border border-hello-csv-input bg-transparent px-3 py-2 text-base text-hello-csv-foreground transition-[color,box-shadow] outline-none placeholder:text-hello-csv-muted-foreground focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
          onBlur={(e) => onBlur?.(getParsedValue(e))}
        />
        {iconBuilder?.({
          'aria-hidden': 'true',
          className:
            'pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-hello-csv-muted-foreground sm:size-4',
        })}

        {displayClearIcon && (
          <span
            role="button"
            tabIndex={0}
            aria-label={t('components.input.clear')}
            onClick={(e) => {
              e.stopPropagation();
              onChange?.('');
            }}
            className="col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2"
          >
            <XMarkIcon
              className="h-5 w-5 text-hello-csv-muted-foreground hover:text-hello-csv-foreground"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    );
  }
);

export default Input;
