import { MD3LightTheme, configureFonts } from 'react-native-paper';
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
    titleLarge: {
        fontFamily: 'ZenDots-Regular',
        fontWeight: '600' as Font['fontWeight'],
        letterSpacing: 0.4,
        lineHeight: 22,
        fontSize: 20,
    }
    ,
    titleMedium: {
        fontFamily: 'Montserrat-ExtraBold',
        // fontWeight: '600' as Font['fontWeight'],
        // letterSpacing: 0.4,
        // lineHeight: 22,
        // fontSize: 20,
    }
};

export const theme = {
    ...MD3LightTheme,
    colors: {
        // Primary role
        primary: '#24473B',          // confirmed
        onPrimary: '#ffffff',
        primaryContainer: '#bbdefb', // blue[100]
        onPrimaryContainer: '#0d47a1', // blue[900]

        // Secondary role
        secondary: '#577B5E',          // confirmed
        onSecondary: '#ffffff',
        secondaryContainer: '#b2dfdb', // teal[100]
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

        // Special
        shadow: '#000000',
        scrim: 'rgba(0,0,0,0.5)',

        // Elevation levels
        elevation: {
            level0: 'transparent',
            level1: 'rgba(0,0,0,0.05)',
            level2: 'rgba(0,0,0,0.08)',
            level3: 'rgba(0,0,0,0.11)',
            level4: 'rgba(0,0,0,0.12)',
            level5: 'rgba(0,0,0,0.14)',
        },

        // Misc
        backdrop: 'rgba(0,0,0,0.4)',
    },
    fonts: configureFonts({config: fontConfig})
};
