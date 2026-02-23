import { ImporterOutputFieldType, RequiredValidatorDefinition, SheetRow } from '../../types';
import { Validator } from './base';
export declare class RequiredValidator extends Validator {
    when: (row: SheetRow) => boolean;
    constructor(definition: RequiredValidatorDefinition);
    isValid(fieldValue: ImporterOutputFieldType, row: SheetRow): string | undefined;
}
//# sourceMappingURL=required_validator.d.ts.map