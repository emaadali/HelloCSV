import { Dispatch } from 'preact/hooks';
import { ImporterAction, ImporterState, PersistenceConfig, SheetDefinition } from '../types';
import { ReactNode } from 'preact/compat';
export declare const reducer: (state: ImporterState, action: ImporterAction) => ImporterState;
export declare function ReducerProvider({ sheets, persistenceConfig, initialState, onStateChanged, children, }: {
    sheets: SheetDefinition[];
    persistenceConfig: PersistenceConfig;
    initialState?: ImporterState;
    onStateChanged?: (prev: ImporterState, next: ImporterState) => void;
    children: ReactNode;
}): import("preact").JSX.Element;
export declare function useImporterState(): ImporterState;
export declare function useImporterStateDispatch(): Dispatch<ImporterAction>;
//# sourceMappingURL=reducer.d.ts.map