import { StyleSheet } from 'react-native';

export const progressIndicatorMedium = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    backgroundColor: 'blue'
  },
  stepIndicator: {
    marginVertical: 20,
    backgroundColor: 'green',
    marginBottom: 0,
  },
  labelContainer: {
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 80,
    backgroundColor: 'yellow'
  },
  stepLabelSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
    lineHeight: 15,
    backgroundColor: 'red'
  },
});

export const mediumIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};