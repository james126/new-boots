import { StyleSheet } from 'react-native';

export const progressIndicatorLarge = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  stepIndicator: {
    marginVertical: 20,
  },
  labelContainer: {
    height: 30, // Fixed height container
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 80, // Fixed width to prevent horizontal shifting
  },
  stepLabel: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
    lineHeight: 16,
  },
  stepLabelSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
    lineHeight: 18,
  },
});