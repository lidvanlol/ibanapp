import React from 'react';
import { Keyboard, StyleProp, ViewStyle } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';


interface IbanInputProps {
  value: string;
  onValueChange: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  maxLenght?: number;
  placeholder?: string;
  mask?: string;  // Add a mask prop to customize the mask
}

export const CustomTextInput: React.FC<IbanInputProps> = ({
  value,
  style,
  onValueChange,
  maxLenght,
  placeholder,
  mask,  // Default IBAN mask format
  ...rest
}) => {
  return (
    <MaskedTextInput
      style={[style]}
      value={value}
      onChangeText={onValueChange}
      placeholder={placeholder}
      autoCapitalize="characters"
      maxLength={maxLenght}
      onSubmitEditing={Keyboard.dismiss}
      returnKeyType="done"
      mask={mask}  // Masking the input
      {...rest}
    />
  );
};
