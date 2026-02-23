import { ImporterOutputFieldType } from '../../types';
import { UniqueValidatorDefinition } from '../types';
import { Validator } from './base';
export declare class UniqueValidator extends Validator {
    seen: Set<ImporterOutputFieldType>;
    caseInsensitive: boolean;
    constructor(definition: UniqueValidatorDefinition);
    private comparableValue;
    isValid(fieldValue: ImporterOutputFieldType): string | undefined;
}
//# sourceMappingURL=unique_validator.d.ts.map