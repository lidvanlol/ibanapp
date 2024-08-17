import React from 'react';
import { render, fireEvent,waitFor } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
  test('renders the input field and validation button', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    expect(getByPlaceholderText('MEkk BBBB CCCC CCCC CCCC CC')).toBeTruthy();
    expect(getByText('Validate & Save')).toBeTruthy();
  });


  test('shows an error for an incorrect IBAN', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('MEkk BBBB CCCC CCCC CCCC CC');
    const button = getByText('Validate & Save');

    // Enter invalid IBAN
    fireEvent.changeText(input, 'ME25505000012345678952');
    fireEvent.press(button);

    // Wait for the "Invalid IBAN" text to appear
    await waitFor(() => {
      expect(getByText('Invalid IBAN')).toBeTruthy();
    });
  });



  test('validates a correct IBAN on button press', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('MEkk BBBB CCCC CCCC CCCC CC');
    const button = getByText('Validate & Save');

    // Enter valid IBAN
    fireEvent.changeText(input, 'ME25505000012345678951');
    fireEvent.press(button);

    // Wait for the "Valid IBAN" text to appear
    await waitFor(() => {
      expect(getByText('Valid IBAN')).toBeTruthy();
    });
  });

  test('shows a suggestion for an incorrect IBAN', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('MEkk BBBB CCCC CCCC CCCC CC');
    const button = getByText('Validate & Save');

    // Enter invalid IBAN
    fireEvent.changeText(input, 'ME25505000012345678952');
    fireEvent.press(button);

    // Wait for the "Invalid IBAN" text to appear
    await waitFor(() => {
      expect(getByText('Invalid IBAN')).toBeTruthy();
    });

    // Check for suggestion
    await waitFor(() => {
      expect(getByText('Did you mean: ME25 5050 0001 2345 6789 51?')).toBeTruthy();
    });
  });

  test('clears the IBAN input field and result on pressing the Clear button', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('MEkk BBBB CCCC CCCC CCCC CC');
    const validateButton = getByText('Validate & Save');
    const clearButton = getByText('x');

    // Enter valid IBAN and validate
    fireEvent.changeText(input, 'ME25505000012345678951');
    fireEvent.press(validateButton);
    //expect(getByText('Valid IBAN')).toBeTruthy();

    // Clear the IBAN input
    fireEvent.press(clearButton);
    
    // Check that the input and result message are cleared
    expect(input.props.value).toBe('');  // Input field should be empty
   expect(() => getByText('Valid IBAN')).toThrow();  // 'Valid IBAN' message should no longer be present
  });
});