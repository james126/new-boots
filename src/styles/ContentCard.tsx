import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface ContentCardProps {
  children: React.ReactNode;
  title?: string;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  style?: any;
  contentStyle?: any;
}

const ContentCard: React.FC<ContentCardProps> = ({
  children,
  title,
  elevation = 5,
  style,
  contentStyle
}) => {
  return (
    <Card
      elevation={elevation}
      style={[
        styles.card,
        { backgroundColor: 'rgba(255, 255, 255, 0.70)' },

        // style
      ]}
    >
      {title && (
        <Card.Title
          title={title}
          titleStyle={styles.title}
        />
      )}
      <Card.Content style={[{ padding: 0, margin: 0, opacity: 0 }, contentStyle]}>
        {children}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontFamily: 'ZenDots-Regular',
    color: '#1565c0', // primary color
    fontSize: 13,
    letterSpacing: 0.4,
  },
});

export default ContentCard;
