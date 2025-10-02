import { StyleSheet,} from 'react-native';
import {theme} from './theme'

export const headingStyle = StyleSheet.create({
    view: {
        alignItems: 'center',
        marginHorizontal: 16,
        flex: 1
    },
    heading: {
        color: theme.colors.primary,
        textAlign: 'center',
        marginBottom: 6,
        marginTop: 12
    },
    title: {
        color: theme.colors.secondary,
        textAlign: 'center',
        marginBottom: 6,
        marginTop: 12
    }
});
