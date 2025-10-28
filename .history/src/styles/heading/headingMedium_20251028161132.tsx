import { StyleSheet, } from 'react-native';
import { theme } from '../theme'

export const headingMedium = StyleSheet.create({
    parentView: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 16,
        flex: 1,
    },
    textView: {
        paddingTop: 12,
        paddingBottom: 24,
        paddingLeft: 16,
        paddingRight: 16,
    },
    svgView: {
        flex: 1, 
        maxHeight: 100, 
        minHeight: 80,
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 8
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        shadowColor: 'transparent'
    },
    bodyText: {
        color: theme.colors.onPrimary,
        paddingBottom: 14
    },
    buttonView: {
        alignSelf: 'flex-end',
        marginTop: -20,
        marginRight: 20,
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    }
});
