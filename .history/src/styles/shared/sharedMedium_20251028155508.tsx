import { StyleSheet, } from 'react-native';
import { theme } from '../theme'

export const sharedLarge = StyleSheet.create({
    title: {
        color: theme.colors.primary,
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 4,
        marginTop: 0,
        marginBottom: 0,
    }
});