import {
  Combobox,
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions,
  ComboboxInput,
} from '@headlessui/react';
import {
  ChevronUpDownIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/20/solid';
import { useTranslations } from '../i18';
import { useState } from 'preact/hooks';
import { ReactNode } from 'preact/compat';

export interface SelectOption<T> {
  label: string;
  value: T;
  icon?: ReactNode;
  group?: string;
}

interface Props<T> {
  value: T[] | T | null;
  options: SelectOption<T>[];
  onChange: (value: T[] | T | null) => void;
  multiple?: boolean;
  compareFunction?: (a: T, b: T) => boolean;
  clearable?: boolean;
  searchable?: boolean;
  placeholder?: string;
  classes?: string;
  displayPlaceholderWhenSelected?: boolean;
  'aria-label'?: string;
}

export default function Select<T>({
  value,
  options,
  onChange,
  multiple = false,
  compareFunction = (a, b) => a === b,
  clearable = false,
  searchable = false,
  placeholder,
  classes,
  displayPlaceholderWhenSelected = false,
  ...props
}: Props<T>) {
  const { t } = useTranslations();
  const [query, setQuery] = useState('');

  const isSelected = (valueToCheck: T) => {
    if (multiple && Array.isArray(value)) {
      return value.some((selected) => compareFunction(selected, valueToCheck));
    }
    return compareFunction(value as T, valueToCheck);
  };

  const handleChange = (selected: T | T[]) => {
    setQuery('');
    if (multiple) {
      const selectedArray = Array.isArray(selected) ? selected : [selected];
      onChange(selectedArray);
    } else {
      onChange(selected as T);
    }
  };

  const clear = () => {
    setQuery('');
    if (multiple) {
      onChange([]);
    } else {
      onChange(null);
    }
  };

  const selectedOptions = options.filter((option) => isSelected(option.value));
  const baseDisplayValue = selectedOptions.map((o) => o.label).join(', ');

  const filteredOptions =
    query && searchable
      ? options.filter((option) =>
          String(option.label).toLowerCase().includes(query.toLowerCase())
        )
      : options;

  const placeholderValue =
    placeholder ?? t('components.select.optionPlaceholder');

  const getDisplayValue = () => {
    if (searchable) {
      return baseDisplayValue;
    }
    if (selectedOptions.length > 0) {
      return displayPlaceholderWhenSelected
        ? `${placeholderValue}: ${baseDisplayValue}`
        : baseDisplayValue;
    }
    return '';
  };

  const hasGroupProperty = filteredOptions.some((option) => option.group);

  const groupedOptions = hasGroupProperty
    ? Object.entries(
        filteredOptions.reduce(
          (acc: Record<string, SelectOption<T>[]>, option) => {
            const groupKey = option.group || 'ungrouped';
            acc[groupKey] = acc[groupKey] || [];
            acc[groupKey].push(option);
            return acc;
          },
          {}
        )
      ).map(([group, items]) => ({
        label: group,
        items,
      }))
    : [{ label: null, items: filteredOptions }];

  const hasNoOptions = groupedOptions.every(({ items }) => items.length === 0);
  const clearButtonDisplayed = clearable && selectedOptions.length > 0;

  return (
    <Combobox value={value as any} onChange={handleChange} multiple={multiple}>
      <div className="relative">
        <ComboboxButton
          className="w-full"
          aria-label={props['aria-label'] ?? placeholder}
        >
          <ComboboxInput
            className={`${classes} flex h-10 w-full items-center justify-between gap-2 rounded-[var(--hello-csv-radius-md)] border border-hello-csv-input bg-transparent px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer truncate focus:cursor-text ${clearButtonDisplayed ? 'pr-12' : 'pr-8'} text-left text-hello-csv-foreground placeholder:text-hello-csv-muted-foreground`}
            displayValue={getDisplayValue}
            onChange={(event) =>
              searchable && setQuery((event.target as HTMLInputElement).value)
            }
            placeholder={placeholderValue}
            readOnly={!searchable}
          />
        </ComboboxButton>

        {clearButtonDisplayed && (
          <span
            role="button"
            tabIndex={0}
            aria-label={t('components.select.clear')}
            onClick={(e) => {
              e.stopPropagation();
              clear();
            }}
            className="absolute inset-y-0 right-6 flex cursor-pointer items-center text-hello-csv-muted-foreground hover:text-hello-csv-foreground"
          >
            <XMarkIcon
              className="h-5 w-5"
              aria-hidden="true"
            />
          </span>
        )}
        <ComboboxButton className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2">
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-4 self-center justify-self-end text-hello-csv-muted-foreground opacity-50"
          />
        </ComboboxButton>

        <ComboboxOptions
          anchor="bottom"
          transition
          className="absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-[var(--hello-csv-radius-md)] border border-hello-csv-border bg-hello-csv-popover p-1 text-hello-csv-popover-foreground shadow-md focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 text-sm"
        >
          {hasNoOptions && (
            <ComboboxOption
              key="no-options"
              disabled
              value={null}
              className="pointer-events-none relative flex items-center justify-center py-1.5 pr-8 pl-2 text-hello-csv-muted-foreground select-none"
            >
              <span className="block truncate font-normal">
                {t('components.select.noOptions')}
              </span>
            </ComboboxOption>
          )}
          {groupedOptions.map(({ label, items }) => (
            <div key={label || 'all'}>
              {label && (
                <div className="py-1.5 pr-8 pl-2 text-hello-csv-muted-foreground text-xs font-medium uppercase">
                  {label}
                </div>
              )}
              {items.map((option) => (
                <ComboboxOption
                  key={
                    typeof option.value === 'object'
                      ? JSON.stringify(option.value)
                      : String(option.value)
                  }
                  value={option.value}
                  className="group relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-hello-csv-foreground select-none outline-hidden data-focus:bg-hello-csv-accent data-focus:text-hello-csv-accent-foreground"
                >
                  {option.icon}

                  <span className="block truncate font-normal group-data-selected:font-semibold">
                    {option.label}
                  </span>

                  {isSelected(option.value) && (
                    <span className="absolute right-2 flex size-3.5 items-center justify-center text-hello-csv-primary group-data-focus:text-hello-csv-accent-foreground">
                      <CheckIcon aria-hidden="true" className="size-4" />
                    </span>
                  )}
                </ComboboxOption>
              ))}
            </div>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
}
