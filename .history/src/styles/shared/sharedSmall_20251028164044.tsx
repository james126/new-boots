import { StyleSheet, } from 'react-native';
import { theme } from '../theme'

export const sharedSmall = StyleSheet.create({
    title: {
        color: theme.colors.primary,
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    displaySmall: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 20
    },
    titleMedium: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        lineHeight: 24
    },
});