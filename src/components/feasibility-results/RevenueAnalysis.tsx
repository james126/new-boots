import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Typology {
  name: string;
  units: number;
  size: number;
  price: number;
}

interface Props {
  typologies: Typology[];
  formatCurrency: (n: number) => string;
}

const styles = StyleSheet.create({
  card: { marginBottom: 12 },
});

const RevenueAnalysis: React.FC<Props> = ({ typologies, formatCurrency }) => {
  let grossRevenue = 0;
  typologies.forEach(typ => {
    grossRevenue += typ.units * typ.price;
  });
  const gst = grossRevenue * 0.15;
  const commission = grossRevenue * 0.035;
  const netRevenue = grossRevenue - gst - commission;
  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Title title={<Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>Revenue Analysis</Text>} />
      <Card.Content>
        <Text>Gross Sales Revenue: {formatCurrency(grossRevenue)}</Text>
        <Text>GST (15%): {formatCurrency(gst)}</Text>
        <Text>Sales Commission (3.5%): {formatCurrency(commission)}</Text>
        <Text style={{ color: theme.colors.accent, fontWeight: 'bold' }}>Net Revenue: {formatCurrency(netRevenue)}</Text>
      </Card.Content>
    </Card>
  );
};

export default RevenueAnalysis;
