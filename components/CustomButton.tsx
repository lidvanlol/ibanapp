import React from 'react';
import { Text, Pressable, StyleSheet, PressableProps, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { styles } from '../styles/CustomButton.styles';

interface CustomButtonProps extends PressableProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  disabled?:boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ title, buttonStyle, textStyle, disabled ,onPress, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed && styles.pressedButton, // Apply pressed style when button is pressed
      ]}
      disabled={disabled}
      onPress={onPress}
    
      {...rest}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};


