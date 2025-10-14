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
  error?: boolean;
}

export interface CustomInputRef {
  reset: () => void;
  nextPage: () => void;
}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>((props, ref) => {
  console.log('CustomInput rendered with displayError:' + props.error + ' ' + props.label);
  const [input, setInput] = useState<any>();
  const [hasError, setHasError] = useState<boolean>(false); // Add local error state
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
    
    setHasError(errorState); // Update local error state
    return errorState;
  };

  const handleTextChange = (inputText: string) => {
    // 1. Update local state
    setInput(inputText);
    
    // 2. Call validation
    let errorState = validateInput(inputText);
    
    // 3. Call parent's updateParent method
    if (props.updateParent) {
      props.updateParent({props.labelinputText}, errorState);
    }
  };

  // Expose reset method to parent
  useImperativeHandle(ref, () => ({
    reset: () => {
      setInput(null);
      setHasError(false); // Reset local error state
      props.updateParent?.(null, false);
    },
    nextPage: () => {
      let errorState = validateInput(input);
      // Always call updateParent with current state
      console.log('CustomInput nextPage called. ' + props.label + ' ErrorState: ' + errorState); 
      props.updateParent?.(input, errorState);
    }
  }), [input, props.updateParent]); // Add dependencies

  return (
    <View style={{ marginTop: 16, backgroundColor: theme.colors.primaryContainer}}>
      <TextInput
        dense={true}
        mode="outlined"
        style={[formCardStyle.input, {backgroundColor: theme.colors.secondaryContainer}]}
        contentStyle={[theme.fonts.bodyMedium]}
        outlineColor={theme.colors.primary}
        value={input || ''} // Provide fallback for null
        onChangeText={handleTextChange}
        label={
          props.label && (
            <Text style={[theme.fonts.bodySmall, { color: theme.colors.secondary, backgroundColor: theme.colors.secondaryContainer }]}>
              {props.label}
            </Text>
          )}
        {...props}
      />
      {(hasError && props.error) ? (
         <HelperText type="error" visible={true}>
            { props.errorText || 'Invalid input' }
          </HelperText>
      ) : null}
    </View>
  );
});

export default CustomInput;