import { StyleSheet, } from 'react-native';
import { theme } from '../theme'

export const headingLarge = StyleSheet.create({
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
    title: {
        color: theme.colors.primary,
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 4,
        marginTop: 0,
        marginBottom: 0,
    }
});
