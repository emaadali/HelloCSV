import { ImporterOutputFieldType } from '../../types';
import { useTranslations } from '../../i18';
import { Badge } from '../../../src/components';

interface Props {
  examples: ImporterOutputFieldType[] | null;
  csvHeader: string | null;
}

export default function HeaderMapperDataPreview({
  examples,
  csvHeader,
}: Props) {
  const { t, tHtml } = useTranslations();

  return (
    csvHeader && (
      <div className="m-4 rounded-[--radius-hello-csv-lg] border border-hello-csv-border bg-hello-csv-card px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full divide-y divide-hello-csv-border">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-medium text-hello-csv-muted-foreground sm:pl-6 lg:pl-8"
                    >
                      {tHtml('mapper.dataPreview', {
                        csvHeader: <Badge>{csvHeader}</Badge>,
                      })}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hello-csv-border">
                  {examples?.map((example, idx) => (
                    <tr key={idx}>
                      <td className="h-12 py-4 pr-3 pl-4 text-sm text-hello-csv-foreground sm:pl-6 lg:pl-8">
                        {example ||
                          (idx === 0 && (
                            <span className="text-hello-csv-muted-foreground italic">
                              {t('mapper.noData')}
                            </span>
                          ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
