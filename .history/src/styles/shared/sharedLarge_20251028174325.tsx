import { StyleSheet, } from 'react-native';
import { theme } from '../theme'

export const sharedLarge = StyleSheet.create({
  //Property Development Feasibility Calculator    
  title: {
        color: theme.colors.primary,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 4,
        marginTop: 0,
        marginBottom: 0,
    },
    //Property Development
    displaySmall: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 20
    },
    //Subdivision feasibility calculator for buyers, developers and investors
    titleMedium: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 28,
        lineHeight: 36
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16
    },
    buttonStyle: {
      paddingTop: 5, 
      paddingBottom: 5, 
      borderRadius: 60
    }
  }
});
