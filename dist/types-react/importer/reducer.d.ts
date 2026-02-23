import { Dispatch } from '../../react';
import { ImporterAction, ImporterState, PersistenceConfig, SheetDefinition } from '../types';
import { ReactNode } from '../../shims/react-compat-shim.js';
export declare const reducer: (state: ImporterState, action: ImporterAction) => ImporterState;
export declare function ReducerProvider({ sheets, persistenceConfig, initialState, onStateChanged, children, }: {
    sheets: SheetDefinition[];
    persistenceConfig: PersistenceConfig;
    initialState?: ImporterState;
    onStateChanged?: (prev: ImporterState, next: ImporterState) => void;
    children: ReactNode;
}): any;
export declare function useImporterState(): ImporterState;
export declare function useImporterStateDispatch(): Dispatch<ImporterAction>;
//# sourceMappingURL=reducer.d.ts.map