import { ThemeVariant, ImporterValidationError, ParsedFile, SheetDefinition, SheetState, MappedData, OnDataColumnsMappedCallback, ColumnMapping, SheetRow, ImportStatistics, CustomFileLoader, Translation } from '../types';
export interface ImporterDefinition {
    sheets: SheetDefinition[];
    initialState?: ImporterState;
    translationResources?: Record<string, Translation>;
    theme?: ThemeVariant;
    onDataColumnsMapped?: OnDataColumnsMappedCallback;
    customFileLoaders?: CustomFileLoader[];
    allowManualDataEntry?: boolean;
    onComplete: (state: ImporterState, onProgress: (progress: number) => void, submissionFiles: ImporterSubmissionFile[]) => Promise<void> | Promise<ImportStatistics>;
    locale?: string;
    preventUploadOnValidationErrors?: boolean | ((errors: ImporterValidationError[]) => boolean);
    availableActions?: AvailableAction[];
    maxFileSizeInBytes?: number;
    onSummaryFinished?: () => void;
    onStateChanged?: (previous: ImporterState, next: ImporterState) => void;
    customSuggestedMapper?: (sheetDefinitions: SheetDefinition[], csvHeaders: string[]) => ColumnMapping[] | Promise<ColumnMapping[]>;
    persistenceConfig?: PersistenceConfig;
    csvDownloadMode?: CsvDownloadMode;
}
export declare const availableActionList: readonly ["addRows", "removeRows", "editRows", "downloadCsv", "search", "resetState", "backToPreviousStep"];
export type AvailableAction = (typeof availableActionList)[number];
export type CsvDownloadMode = 'value' | 'label';
export interface PersistenceConfig {
    enabled: boolean;
    customKey?: string;
}
export type StateBuilderImporterDefinition = Pick<ImporterDefinition, 'sheets' | 'customFileLoaders' | 'customSuggestedMapper' | 'onDataColumnsMapped'>;
/**
 * mapping - user is mapping the columns from the file to the sheet columns
 * preview - user is reviewing the data to be imported or is imputing data manually
 * submit  - user is submitting the data - during/after the onComplete callback
 * completed - the import process is completed
 * failed - the import process failed
 */
export type ImporterMode = 'upload' | 'mapping' | 'preview' | 'submit' | 'completed' | 'failed';
export interface ImporterState {
    sheetDefinitions: SheetDefinition[];
    currentSheetId: string;
    mode: ImporterMode;
    validationErrors: ImporterValidationError[];
    sheetData: SheetState[];
    parsedFile?: ParsedFile;
    rowFile?: File;
    columnMappings?: ColumnMapping[];
    importProgress: number;
    validationInProgress?: boolean;
    /**
     * Monotonic id for the currently running validation batch. When async
     * validations complete we only apply results if the runId matches the
     * latest value stored in state. This avoids race conditions where slow
     * validators from earlier runs overwrite newer results.
     */
    validationRunId?: string;
    importStatistics?: ImportStatistics;
}
export interface ImporterSubmissionFile {
    file: Blob;
    sheetId: string;
}
export type ImporterOutputFieldType = string | number | boolean | undefined;
export interface CellChangedPayload {
    sheetId: string;
    rowIndex: number;
    value: SheetRow;
}
export interface RemoveRowsPayload {
    sheetId: string;
    rows: SheetRow[];
}
export type ImporterAction = {
    type: 'ENTER_DATA_MANUALLY';
    payload: {
        amountOfEmptyRowsToAdd: number;
    };
} | {
    type: 'FILE_PARSED';
    payload: {
        parsed: ParsedFile;
        rowFile: File;
    };
} | {
    type: 'UPLOAD';
} | {
    type: 'COLUMN_MAPPING_CHANGED';
    payload: {
        mappings: ColumnMapping[];
    };
} | {
    type: 'DATA_MAPPED';
    payload: {
        mappedData: MappedData;
    };
} | {
    type: 'CELL_CHANGED';
    payload: CellChangedPayload;
} | {
    type: 'REMOVE_ROWS';
    payload: RemoveRowsPayload;
} | {
    type: 'ADD_EMPTY_ROW';
} | {
    type: 'SHEET_CHANGED';
    payload: {
        sheetId: string;
    };
} | {
    type: 'SUBMIT';
} | {
    type: 'PROGRESS';
    payload: {
        progress: number;
    };
} | {
    type: 'COMPLETED';
    payload: {
        importStatistics?: ImportStatistics;
    };
} | {
    type: 'FAILED';
} | {
    type: 'PREVIEW';
} | {
    type: 'MAPPING';
} | {
    type: 'RESET';
} | {
    type: 'SET_STATE';
    payload: {
        state: ImporterState;
    };
} | {
    type: 'VALIDATION_STARTED';
    payload: {
        runId: string;
    };
} | {
    type: 'VALIDATION_COMPLETED';
    payload: {
        errors: ImporterValidationError[];
        runId: string;
    };
};
type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type ImporterDefinitionWithDefaults = WithRequired<ImporterDefinition, 'maxFileSizeInBytes' | 'persistenceConfig' | 'csvDownloadMode' | 'allowManualDataEntry' | 'availableActions'>;
export {};
//# sourceMappingURL=types.d.ts.map