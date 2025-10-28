import { StyleSheet } from 'react-native';
import { theme } from "./theme"

export const unitTypologiesStyle = StyleSheet.create({
    card: {
        marginBottom: 12,
        backgroundColor: 'rgba(211, 211, 211, 0.50)',
        borderColor: theme.colors.outline,
        borderWidth: 1,
        elevation: 0,
        shadowColor: 'rgba(211, 211, 211, 0.50)'
    }
})
