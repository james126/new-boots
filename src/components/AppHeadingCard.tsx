import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

interface AppHeadingCardProps {
  title: string;
  subtitle: string;
  style?: any;
}

const AppHeadingCard: React.FC<AppHeadingCardProps> = ({ title, subtitle, style }) => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[
        'rgba(21, 101, 192, 0.2)', //left
        'rgba(21, 101, 192, 0.4)', //left 1
        'rgba(21, 101, 192, 0.6)', //left 2
        'rgba(34, 113, 121, 0.7)', //center
        'rgba(46, 125, 50, 0.6)',
        'rgba(46, 125, 50, 0.4)',
        'rgba(46, 125, 50, 0.2)'
      ]}
      locations={[0, 0.1, 0.2, 0.5, 0.8, 0.9, 1]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={[
        {
          marginHorizontal: 16,
          marginTop: 16,
          marginBottom: 8,
          borderRadius: 6,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 120,
          justifyContent: 'center',
        },
        style,
      ]}
    >



      <LinearGradient
        colors={[
          'rgba(0,0,0,0)', // top transparent
          'rgba(0,0,0,0.1)', // fade in, slightly darker
          'rgba(0,0,0,0.2)',
          'rgba(0,0,0,0.28)', // center more solid, slightly darker
          'rgba(0,0,0,0.2)', // fade out
          'rgba(0,0,0,0.1)',
          'rgba(0,0,0,0)'  // bottom transparent
        ]}
        locations={[0, 0.1, 0.2, 0.5, 0.8, 0.9, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1, width: '100%', height: '100%', borderRadius: 6, justifyContent: 'center' }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text
            variant="headlineMedium"
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: 6,
            }}
          >
            {title}
          </Text>
          <Text
            variant="titleMedium"
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default AppHeadingCard;
