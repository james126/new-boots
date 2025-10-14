import { StyleSheet, } from 'react-native';
import { greyPalette, theme } from '../theme'

export const formCardStyle = StyleSheet.create({
    parentView: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 16,
        flex: 1
    },
    card: {
        backgroundColor: theme.colors.primaryContainer,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        shadowColor: 'transparent'
    },
    title: {
        color: theme.colors.secondary,
        textAlign: 'center',
        paddingTop: 16,
        paddingBottom: 4,
        marginTop: 0,
        marginBottom: 0,
    },
    // CustomTextInput
    input: {
        paddingBottom: 0,
        marginBottom: 0,
        borderColor: theme.colors.primary
    },
    // Buttons
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 4,
    },
    nextContentStyle: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        // alignItems: 'flex-end',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: greyPalette.grey700
    }
})