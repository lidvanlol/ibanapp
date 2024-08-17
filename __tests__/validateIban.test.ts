import { validateIban, suggestCorrectIban } from '../utills/ibanUtils';

describe('IBAN Validation', () => {
  test('validates a correct IBAN', () => {
    const validIban = 'ME25505000012345678951';
    expect(validateIban(validIban)).toBe(true);
  });

  test('invalidates an incorrect IBAN', () => {
    const invalidIban = 'ME25505000012345678952';
    expect(validateIban(invalidIban)).toBe(false);
  });

  test('suggests a correct IBAN for a close but invalid one', () => {
    const incorrectIban = 'ME25505000012345678952';
    expect(suggestCorrectIban(incorrectIban)).toBe('ME95 5050 0001 2345 6789 52'); // Update to the correct suggestion
  });

 
});


