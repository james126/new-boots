import { StyleSheet } from 'react-native';
import { clayPalette } from '../theme';

export const progressIndicatorMedium = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  stepIndicator: {
    marginVertical: 20,
    marginBottom: 10,
  },
  labelContainer: {
    height: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 80,
  },
  stepLabelSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: clayPalette.brown,
    lineHeight: 15,
  },
});

export const mediumIndicatorStyles = {
  stepIndicatorSize: 32,
  currentStepIndicatorSize: 38,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: clayPalette.brownOrange,
  stepStrokeWidth: 2,
  separatorStrokeFinishedWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 16,
  currentStepLabelColor: '#fe7013',
};