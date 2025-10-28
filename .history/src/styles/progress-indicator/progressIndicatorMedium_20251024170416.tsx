import { StyleSheet } from 'react-native';

export const progressIndicatorMedium = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  stepIndicator: {
    marginVertical: 20,
  },
  labelContainer: {
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 80,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
    lineHeight: 15,
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
    lineHeight: 15,
  },
});