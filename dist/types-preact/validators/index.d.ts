import { ImporterValidationError } from './types';
import { SheetColumnDefinition, SheetDefinition, SheetState } from '../types';
export declare function fieldIsRequired(columnDefinition: SheetColumnDefinition, { skipConditionCheck }?: {
    skipConditionCheck?: boolean;
}): boolean;
export declare function applyValidations(sheetDefinitions: SheetDefinition[], sheetStates: SheetState[]): Promise<ImporterValidationError[]>;
//# sourceMappingURL=index.d.ts.map