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
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
    lineHeight: 15,
  },
  stepLabelSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
    lineHeight: 15,
  },
});