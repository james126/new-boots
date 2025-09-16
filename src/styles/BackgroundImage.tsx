import { StyleSheet,} from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1, // Ensures the ImageBackground component takes up the full screen
        width: '100%', // Ensures the image stretches horizontally
        height: '100%', // Ensures the image stretches vertically
    },
    overlayContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
