import { StyleSheet, } from 'react-native';
import { theme } from '../theme'

export const sharedSmall = StyleSheet.create({
  //Property Development Feasibility Calculator  
  title: {
        color: theme.colors.primary,
        textAlign: 'center',
        paddingTop: 6,
        paddingBottom: 0,
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
        fontSize: 18,
        lineHeight: 26
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12
    }
});