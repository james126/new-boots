import {DefaultTheme, configureFonts} from "react-native-paper";
import {Font} from "react-native-paper/src/types";

const fontConfig = {
    headlineMedium: {
        fontFamily: 'AnonymousPro-Bod',
        fontWeight: '800' as Font['fontWeight'],
        letterSpacing: 0.5,
        lineHeight: 27,
        fontSize: 22,
    },
    displaySmall: {
        fontFamily: 'Bagel Fat One Regular',
        fontWeight: '400' as Font['fontWeight'],
        letterSpacing: 1.0,
        lineHeight: 28,
        fontSize: 17,
    },
    titleMedium: {
        fontFamily: 'ZenDots-Regular',
        fontWeight: '200' as Font['fontWeight'],
        letterSpacing: 0.7,
        lineHeight: 27,
        fontSize: 22,
    }
};

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#1565c0', // Material Blue 800
        onPrimary: '#FFFFFF', // White text on primary
        primaryContainer: '#E3F2FD', // Light blue background for primary
        onPrimaryContainer: '#0D47A1',
        secondary: '#2e7d32', // Material Green 800
        onSecondary: '#FFFFFF',
        secondaryContainer: '#E8F5E9', // Light green background for secondary
        onSecondaryContainer: '#1B5E20',
        tertiary: '#0d47a1', // Material Blue 900
        onTertiary: '#FFC107',
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
    roundness: 2, // Slightly more rounded corners for a modern look
    // Surface prop
    elevation: {
        level0: 'transparent',  // flat
        level1: '#e0e0e0',
        level2: '#c7c7c7',
        level3: '#aeaeae',
        level4: '#949494',
        level5: '#7a7a7a',
    },
    fonts: configureFonts({config: fontConfig}),
};
