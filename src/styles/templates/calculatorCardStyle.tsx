import { StyleSheet } from 'react-native';
import {theme} from "../theme"

export const calculatorCardStyle = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 0,
    paddingHorizontal: 0,
    backgroundColor: theme.colors.background,
    borderWidth: 0,
    borderColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent'
    //  backgroundColor: 'lightgrey'
  },
  title: {
    fontFamily: 'ZenDots-Regular',
    color: theme.colors.primary,
    fontSize: 13,
    lineHeight: 16,
    minHeight: 0,
    letterSpacing: 0.4,
    paddingTop: 16,
    paddingBottom: 8
  },
  input: {
    marginBottom: 8,
    backgroundColor: theme.colors.background}
});

