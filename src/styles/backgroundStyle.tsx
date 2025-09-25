import { StyleSheet,} from 'react-native';

export const backgroundStyle = StyleSheet.create({
    backgroundImage: {
        flex: 1, // Ensures the ImageBackground component takes up the full screen
        width: '100%', // Ensures the image stretches horizontally
        height: '100%', // Ensures the image stretches vertically
    },
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
    }
});
