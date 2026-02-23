import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'preact/compat';
import Button, { ButtonVariant } from './Button';
import { useTranslations } from '../i18';

type VariantType = 'default' | 'danger';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  subTitle?: string;
  confirmationText?: string;
  cancelText?: string;
  onConfirm: () => void;
  variant?: VariantType;
}

export default function ConfirmationModal({
  open,
  setOpen,
  title,
  subTitle,
  confirmationText,
  cancelText,
  onConfirm,
  variant = 'default',
}: Props) {
  const { t } = useTranslations();

  const baseClasses: Record<
    VariantType,
    { icon?: ReactNode; btnVariant: ButtonVariant; bgColor?: string }
  > = {
    danger: {
      icon: (
        <ExclamationTriangleIcon
          className="text-hello-csv-destructive size-6"
          aria-hidden="true"
        />
      ),
      btnVariant: 'danger',
      bgColor: 'bg-hello-csv-destructive/10',
    },
    default: {
      btnVariant: 'primary',
    },
  };

  const { icon, btnVariant, bgColor } = baseClasses[variant];

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative grid w-full max-w-[calc(100%-2rem)] translate-x-0 translate-y-0 gap-6 rounded-[--radius-hello-csv-lg] border border-hello-csv-border bg-hello-csv-background p-6 text-left shadow-lg duration-200 data-closed:opacity-0 data-closed:zoom-out-95 data-enter:animate-in data-enter:fade-in-0 data-enter:zoom-in-95 data-leave:animate-out data-leave:fade-out-0 sm:max-w-lg"
          >
            <div className="sm:flex sm:items-start">
              {icon && (
                <div
                  className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${bgColor} sm:mx-0 sm:size-10`}
                >
                  {icon}
                </div>
              )}
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <DialogTitle
                  as="h3"
                  className="text-lg font-semibold text-hello-csv-foreground"
                >
                  {title}
                </DialogTitle>
                {subTitle && (
                  <div className="mt-2">
                    <p className="text-sm text-hello-csv-muted-foreground">
                      {subTitle}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 sm:flex sm:flex-row-reverse gap-3">
              <div className="sm:w-auto">
                <Button
                  variant={btnVariant}
                  onClick={() => {
                    onConfirm();
                    setOpen(false);
                  }}
                  withFullWidth
                >
                  {confirmationText ??
                    t('components.confirmationModal.defaultConfirm')}
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:w-auto">
                <Button
                  variant="tertiary"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  withFullWidth
                >
                  {cancelText ?? t('components.confirmationModal.cancel')}
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
