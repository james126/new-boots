import { StyleSheet,} from 'react-native';
import {theme} from './theme'

export const headingStyle = StyleSheet.create({
    view: {
        alignItems: 'center',
        marginHorizontal: 16
    },
    text: {
        color: theme.colors.primary,
        textAlign: 'center',
        marginBottom: 6,
        marginTop: 12
    }
});
