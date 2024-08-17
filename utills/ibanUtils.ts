export const validateIban = (iban: string): boolean => {
    // Remove all spaces and ensure the string is uppercase
    const rawIban = iban.replace(/\s+/g, '').toUpperCase();
  
    console.log(`Validating IBAN: ${rawIban}`); // Debugging the input
  
    // Check for IBAN length
    if (rawIban.length !== 22) {
      console.log(`IBAN length is invalid: ${rawIban.length}`);
      return false;
    }
    
    // Check if it starts with "ME"
    if (!rawIban.startsWith("ME")) {
      console.log('IBAN does not start with ME');
      return false;
    }
  
    // Rearrange the IBAN to move the first four characters to the end
    const rearrangedIban = rawIban.slice(4) + rawIban.slice(0, 4);
    console.log(`Rearranged IBAN for validation: ${rearrangedIban}`);
  
    // Convert letters to numbers based on their position in the alphabet
    let numericIban = '';
    for (let i = 0; i < rearrangedIban.length; i++) {
      const char = rearrangedIban[i];
      if (/[A-Z]/.test(char)) {
        numericIban += (char.charCodeAt(0) - 55).toString();  // 'A' -> 10, 'B' -> 11, ...
      } else if (/[0-9]/.test(char)) {
        numericIban += char;
      } else {
        console.log(`Invalid character in IBAN: ${char}`);
        return false;  // Invalid character in IBAN
      }
    }
  
    console.log(`Numeric IBAN: ${numericIban}`);
  
    // Validate the IBAN using modulo 97
    try {
      const ibanNumber = BigInt(numericIban);
      return ibanNumber % BigInt(97) === BigInt(1);
    } catch (error) {
      console.log(`Error in IBAN validation: ${error}`);
      return false;  // In case there is an issue converting to BigInt
    }
  };
  
  
  export const suggestCorrectIban = (iban: string): string | null => {
    // Remove all spaces from the input IBAN
    const rawIban = iban.replace(/\s+/g, '').toUpperCase();
  
    console.log(`Suggesting IBAN correction for: ${rawIban}`);
  
    // Ensure the input is the correct length and starts with "ME"
    if (rawIban.length !== 22 || !rawIban.startsWith("ME")) {
      console.log('Invalid IBAN format or country code');
      return null;
    }
  
    // Extract the base IBAN (i.e., without the check digits)
    const baseIban = rawIban.slice(4);
  
    console.log(`Base IBAN: ${baseIban}`);
  
    // Try all possible check digits (00 to 99)
    for (let i = 0; i < 100; i++) {
      const checkDigits = i.toString().padStart(2, '0');
      const candidateIban = `ME${checkDigits}${baseIban}`;
  
      console.log(`Trying candidate IBAN: ${candidateIban}`);
  
      // Validate the candidate IBAN
      if (validateIban(candidateIban)) {
        // Format the suggested IBAN with spaces
        const formattedIban = candidateIban.match(/.{1,4}/g)?.join(' ') || candidateIban;
        console.log(`Valid IBAN found: ${formattedIban}`);
        return formattedIban;
      }
    }
  
    console.log('No valid IBAN found.');
    return null;
  };
  
  

  