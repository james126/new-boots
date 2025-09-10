import {DefaultTheme} from "react-native-paper";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#1976D2', // Material Blue 700
        onPrimary: '#FFFFFF', // White text on primary
        primaryContainer: '#E3F2FD', // Light blue background for primary
        onPrimaryContainer: '#0D47A1',
        secondary: '#43A047', // Material Green 600
        onSecondary: '#FFFFFF',
        secondaryContainer: '#E8F5E9', // Light green background for secondary
        onSecondaryContainer: '#1B5E20',
        background: '#F5F6FA', // Light grey background
        onBackground: '#222B45',
        surface: '#FFFFFF',
        onSurface: '#222B45',
        error: '#D32F2F', // Material Red 700
        onError: '#FFFFFF',
        outline: '#B0BEC5', // Material Blue Grey 200
        // Custom accent for highlights
        accent: '#00B8D4', // Cyan A400
        // Add more overrides as needed
    },
    roundness: 8, // Slightly more rounded corners for a modern look
};
