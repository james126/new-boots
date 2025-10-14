import { MD3LightTheme, configureFonts } from 'react-native-paper';
import { fontConfig } from "./typography"

export const theme = {
    ...MD3LightTheme,
    colors: {
        // Primary role
        primary: '#24473B',          // confirmed
        onPrimary: '#ffffff',
        primaryContainer: '#f2f2f2', // blue[100]
        primaryContainerVariant: ''rgba(245, 245, 245, 0.5)'', // blue[200]
        onPrimaryContainer: '#0d47a1', // blue[900]

        // Secondary role
        secondary: '#577B5E',          // confirmed
        onSecondary: '#ffffff',
        secondaryContainer: '#f7f7f7', // teal[100]
        onSecondaryContainer: '#004d40', // teal[900]

        // Tertiary role
        tertiary: '#45563C',           // cyan[500]
        onTertiary: '#ffffff',
        tertiaryContainer: '#b2ebf2',  // cyan[100]
        onTertiaryContainer: '#006064', // cyan[900]

        // Error role
        error: '#f44336',              // red[500]
        onError: '#ffffff',
        errorContainer: '#ffcdd2',     // red[100]
        onErrorContainer: '#b71c1c',   // red[900]

        // Background & surface
        background: '#fafafa',         // grey[50]
        onBackground: '#212121',       // grey[900]
        surface: '#ffffff',
        onSurface: '#212121',          // grey[900]
        surfaceVariant: '#eeeeee',     // grey[200]
        onSurfaceVariant: '#616161',   // grey[700]
        surfaceDisabled: '#bdbdbd',    // grey[400]

        // Outline & borders
        outline: '#9e9e9e',            // grey[500]
        outlineVariant: '#e0e0e0',     // grey[300]

        // Inverse roles
        inverseSurface: '#212121',     // grey[900]
        inverseOnSurface: '#fafafa',   // grey[50]
        inversePrimary: '#90caf9',     // blue[200]

    },
    fonts: configureFonts({ config: fontConfig })
};

export const clayPalette = {
    brown: '#A65E2E',
    brownOrange: '#BE7436',
    orange: '#D68A3D',
    clay: '#E6B65D',
    lightClay: '#F2D6AO',
    veryLightClay: '#F9E8D6'
}

export const greyPalette = {
    grey900: '#212121',
    grey800: '#424242',
    grey700: '#616161',
    grey600: '#757575',
    grey500: '#9e9e9e',
    grey400: '#bdbdbd',
    grey300: '#e0e0e0',
    grey200: '#eeeeee',
    grey100: '#f5f5f5',
    grey50: '#fafafa',
}