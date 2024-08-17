import React from 'react';
import { Text, TextStyle,StyleProp } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export const CustomText: React.FC<CustomTextProps> = ({ children, style, numberOfLines }) => {
  return (
    <Text style={style} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};


