import { StyleSheet } from 'react-native';

export const progressIndicatorSmall = StyleSheet.create({
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
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
    lineHeight: 15,
    backgroundColor: 'red'
  },
});

export const smallIndicatorStyles = {
  stepIndicatorSize: 25,                    // Reduced from 30
  currentStepIndicatorSize: 30,             // Reduced from 40 (should be 5px larger than stepIndicatorSize)
  separatorStrokeWidth: 2,                  // Reduced from 3 (thinner connector lines)
  currentStepStrokeWidth: 2,                // Reduced from 3 
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 2,                       // Reduced from 3
  separatorStrokeFinishedWidth: 3,          // Reduced from 4
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 10,           // Reduced from 13 (smaller font for smaller circles)
  currentStepIndicatorLabelFontSize: 12,    // Reduced from 13
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 10,                            // Reduced from 13
  currentStepLabelColor: '#fe7013',
};