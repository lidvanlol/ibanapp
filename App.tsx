import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import {validateIban, suggestCorrectIban} from './utills/ibanUtils';
import {styles} from './styles/App.styles';
import React, {useState} from 'react';

import {CustomTextInput} from './components/CustomTextInput';

import {CustomButton} from './components/CustomButton';

import {CustomText} from './components/CustomText';

interface ValidationHistoryItem {
  iban: string;
  isValid: boolean;
  timestamp: string;
  suggestedIban?: string | null;
}

const IBAN_MIN_LENGTH = 27;
const IBAN_MAX_LENGTH = 27;

export default function App() {
  const [iban, setIban] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [history, setHistory] = useState<ValidationHistoryItem[]>([]);

  const handleValidate = (input: string) => {
    // If the input is empty, reset the result and suggestion
    if (input.trim() === '') {
      setResult('');    // Clear the result message
      setSuggestion(null);  // Clear the suggestion
      setIban('');  // Clear the IBAN state
      return;
    }
  
    // Remove all non-alphanumeric characters and convert to uppercase
    const rawIban = input.replace(/\W/gi, '').toUpperCase();
  
    // Validate the raw IBAN without formatting
    const isValid = validateIban(rawIban);
    setResult(isValid ? 'Valid IBAN' : 'Invalid IBAN');
  
    // Update the IBAN state without formatting
    setIban(input);
  
    // Suggest a correct IBAN if the input is invalid
    const suggestedIban = !isValid ? suggestCorrectIban(rawIban) ?? null : null;
    setSuggestion(suggestedIban);
  };


  const handleClear = () => {
    // Clear the IBAN, result, and suggestion
    setIban('');
    setResult('');
    setSuggestion(null);
  };
  
  const handleDelete = (ibanToDelete: string) => {
    // Filter out the history entry that matches the ibanToDelete
    const updatedHistory = history.filter(item => item.iban !== ibanToDelete);
    setHistory(updatedHistory);
  };

  const handleValidationHistory = () => {
    // Check if the IBAN already exists in the history
    const isDuplicate = history.some(item => item.iban === iban);
    
    if (isDuplicate) {
      Alert.alert('This IBAN has already been validated.');
      return;
    }
  
    // Proceed with adding the entry if it's not a duplicate
    if (iban.length >= IBAN_MIN_LENGTH && iban.length <= IBAN_MAX_LENGTH) {
      const timestamp = new Date().toLocaleString();
      const newEntry: ValidationHistoryItem = {
        iban,
        isValid: result === 'Valid IBAN',
        timestamp,
        suggestedIban: suggestion,
      };
  
      setHistory([newEntry, ...history]);
  
      // Clear the input field by resetting the IBAN state
      setIban('');
      setResult('');  // Optionally, reset the result message
      setSuggestion(null);  // Optionally, reset the suggestion
    } else {
      Alert.alert('IBAN is not of the correct length.');
    }
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CustomText style={styles.label}>Enter IBAN:</CustomText>
        <View style={styles.row}>
        <CustomTextInput
          value={iban}
          onValueChange={handleValidate}
          style={styles.input}
          maxLenght={IBAN_MAX_LENGTH} // Max length for IBAN (27 characters)
          placeholder="MEkk BBBB CCCC CCCC CCCC CC"
          mask="ME99 9999 9999 9999 9999 99" // Mask to ensure input formatting
        />

       <CustomButton
          title="x"
          onPress={handleClear}  // Clear button action
          buttonStyle={[styles.clearButton]}
          textStyle={styles.clearButtonText}
          disabled={iban.length < 1}
        />
        </View>

        <CustomButton
          title="Validate & Save"
          onPress={handleValidationHistory}
          buttonStyle={[
            styles.button,
            {
              backgroundColor:
                iban.length >= IBAN_MIN_LENGTH && iban.length <= IBAN_MAX_LENGTH
                  ? 'blue'
                  : 'grey',
            },
          ]}
          disabled={
            iban.length < IBAN_MIN_LENGTH || iban.length > IBAN_MAX_LENGTH
          }
          textStyle={styles.buttonText}
        />

{result && (
  <CustomText
    style={[
      styles.result,
      { color: result === 'Valid IBAN' ? 'green' : 'red' },
    ]}>
    {result}
  </CustomText>
)}

        {suggestion && (
          <CustomText style={styles.suggestion}>
            Did you mean: {suggestion}?
          </CustomText>
        )}

        <CustomText style={styles.historyTitle}>Validation History</CustomText>
        <FlatList
  data={history}
  renderItem={({item}) => (
    <View style={styles.historyItem}>
      <View style={styles.deleteButtonText}>
      <CustomText style={styles.historyText}>
        {item.timestamp} - {item.iban} - {item.isValid ? 'Valid' : 'Invalid'}
      </CustomText>
      {item.suggestedIban && (
        <CustomText style={styles.suggestionText}>
          Suggested: {item.suggestedIban}
        </CustomText>
      )}
      </View>
       <CustomButton
        title="X"
        onPress={() => handleDelete(item.iban)} // Delete action
        buttonStyle={styles.deleteButton}
        textStyle={styles.deleteButtonIcon}
      />
    </View>
  )}
  keyExtractor={(item, index) => `${item.iban}-${item.timestamp}`}  // Ensure unique key
/>
      </View>
    </SafeAreaView>
  );
}
