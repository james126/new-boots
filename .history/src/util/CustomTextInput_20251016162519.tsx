import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import { HelperText, Text, TextInput, useTheme } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper';
import { formCardStyle } from '../styles/calculator/formCardStyle';
import { View } from 'react-native';
import { InputTypes } from '../types/ProjectInfo';

interface CustomInputProps extends TextInputProps {
  // custom props
  errorText?: string;
  inputType?: InputTypes;
  updateParent?: (value: any, hasError: boolean) => void;
}

export interface CustomInputRef {
  reset: () => void;
  nextPage: () => void;
}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>((props, ref) => {
  const [input, setInput] = useState<any>();
  const theme = useTheme();

  const validateInput = (input: string | number | null) => {
    let errorState = false;

    if (input === null || input === undefined) {
        errorState = true;
    } else if (props.inputType === InputTypes.TEXT && input.toString().length < 1) {
        errorState = true;
    } else if (props.inputType === InputTypes.NUMBER && isNaN(Number(input))) {
        errorState = true;
    } else if (props.inputType === InputTypes.DATE && isNaN(Date.parse(input.toString()))) {
        errorState = true;
    }
    
    return errorState;
  };

  const handleTextChange = (inputText: string) => {
    // 1. Update local state
    setInput(inputText);
    
    // 2. Call validation
    let errorState = validateInput(inputText);
    
    // 3. Call parent's onChangeText (update method)
    if (props.onChangeText) {
      props.updateParent(inputText, errorState);
    }
  };

  // Expose reset method to parent
  useImperativeHandle(ref, () => ({
    reset: () => {
      setInput(null);
      props.updateParent?.(null, false);  // Use optional chaining
    },
    nextPage: () => {
      let errorState = validateInput(input);
      if (errorState) {
        props.updateParent?.(input, errorState);  // Use optional chaining
      }
    }
  }), []);

  return (
    <View style={{ marginTop: 16, backgroundColor: theme.colors.primaryContainer}}>
      <TextInput
        dense={true}
        mode="outlined"
        style={[formCardStyle.input, {backgroundColor: theme.colors.secondaryContainer}]}
        contentStyle={[theme.fonts.bodyMedium]}
        outlineColor={theme.colors.primary}
        value={input}
        onChangeText={handleTextChange}
        label={
          props.label && (
            <Text style={[theme.fonts.bodySmall, { color: theme.colors.secondary, backgroundColor: theme.colors.secondaryContainer }]}>
              {props.label}
            </Text>
          )}
        {...props}
      />
      {props.error ? (
         <HelperText type="error" visible={true}>
            { props.errorText || 'Invalid input' }
          </HelperText>
      ) : null}
    </View>
  );
});

export default CustomInput;