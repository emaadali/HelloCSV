import { useTranslations } from '../../i18';
import { fieldIsRequired } from '../../validators';
import { SheetColumnDefinition } from '../types';
import { isColumnReadOnly } from '../utils';

interface Props {
  column: SheetColumnDefinition;
}

export default function SheetDataEditorHeader({ column }: Props) {
  const { t } = useTranslations();
  const isReadOnly = isColumnReadOnly(column);

  return (
    <div
      className="flex items-center"
      title={isReadOnly ? t('sheet.readOnly') : undefined}
    >
      {column.label} {fieldIsRequired(column) && '*'}
    </div>
  );
}
