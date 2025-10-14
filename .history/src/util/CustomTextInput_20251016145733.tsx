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
  displayError?: boolean;
}

export interface CustomInputRef {
  reset: () => void;
  nextPage: () => void;
}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>((props, ref) => {
  const [input, setInput] = useState<any>();
  const [hasError, setHasError] = useState<boolean>(false);
  const theme = useTheme();

  const validateInput = (input: string | number) => {
    let errorState = false;
    if (props.inputType === InputTypes.TEXT && input.toString().length < 1) {
        errorState = true;
    } else if (props.inputType === InputTypes.NUMBER && isNaN(Number(input))) {
        errorState = true;
    } else if (props.inputType === InputTypes.DATE && isNaN(Date.parse(input.toString()))) {
        errorState = true;
    }
    
    setHasError(errorState)
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
      console.log('resetting input');
      setInput(null);
      setHasError(false);
    },
    nextPage: () => {
      let errorState = validateInput(input);
      console.log(errorState)
      if (errorState) {
        props.updateParent(input, errorState);
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
      {hasError ? (
         <HelperText type="error" visible={hasError}>
            { props.errorText || 'Invalid input' }
          </HelperText>
      ) : null}
    </View>
  );
});

export default CustomInput;