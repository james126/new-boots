import { StyleSheet } from 'react-native';

export const progressIndicatorLarge = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  stepIndicator: {
    marginVertical: 20,
    marginBottom: 10,
  },
  labelContainer: {
    height: 20, // Fixed height container
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 80, // Fixed width to prevent horizontal shifting
  },
  stepLabelSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: 'clayPa',
    lineHeight: 16,
  },
});

export const largeIndicatorStyles = {
  stepIndicatorSize: 32,
  currentStepIndicatorSize: 38,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#fe7013',
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