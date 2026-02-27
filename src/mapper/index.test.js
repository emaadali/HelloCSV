import { buildSuggestedHeaderMappings } from './utils';
import { describe, it, expect } from 'vitest';

const sheets = [
  {
    columns: [
      { label: 'Full Name', id: 'name' },
      { label: 'Email', id: 'email' },
      { label: 'Phone Number', id: 'phone_number' },
    ],
  },
];

describe('buildSuggestedHeaderMappings', () => {
  it('creates suggested header mappings', () => {
    const suggestedHeaderMappings = buildSuggestedHeaderMappings(sheets, [
      'Name',
      'Email',
      'Phone Number',
    ]);
    const phoneNumberMapping = suggestedHeaderMappings.find(
      (headerMapping) => headerMapping.csvColumnName === 'Phone Number'
    );
    expect(phoneNumberMapping.sheetColumnId).toEqual('phone_number');

    const emailMapping = suggestedHeaderMappings.find(
      (headerMapping) => headerMapping.csvColumnName === 'Email'
    );
    expect(emailMapping.sheetColumnId).toEqual('email');

    const nameMapping = suggestedHeaderMappings.find(
      (headerMapping) => headerMapping.csvColumnName === 'Name'
    );
    expect(nameMapping.sheetColumnId).toEqual('name');
  });

  it('suggests mappings case-insensitively', () => {
    const suggestedHeaderMappings = buildSuggestedHeaderMappings(sheets, [
      'EMAIL',       // uppercase
      'Phone_Number', // underscore, mixed case
      'NAME',        // uppercase
    ]);
    expect(suggestedHeaderMappings.find((m) => m.csvColumnName === 'EMAIL').sheetColumnId).toBe('email');
    expect(suggestedHeaderMappings.find((m) => m.csvColumnName === 'Phone_Number').sheetColumnId).toBe('phone_number');
    expect(suggestedHeaderMappings.find((m) => m.csvColumnName === 'NAME').sheetColumnId).toBe('name');
  });
});
