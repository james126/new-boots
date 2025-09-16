import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ContentCard from '../../styles/ContentCard';

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

const styles = StyleSheet.create({});

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
    <ContentCard title="Revenue Analysis" style={{ marginBottom: 12 }}>
      <Text>Gross Sales Revenue: {formatCurrency(grossRevenue)}</Text>
      <Text>GST (15%): {formatCurrency(gst)}</Text>
      <Text>Sales Commission (3.5%): {formatCurrency(commission)}</Text>
      <Text style={{ color: theme.colors.accent, fontWeight: 'bold' }}>Net Revenue: {formatCurrency(netRevenue)}</Text>
    </ContentCard>
  );
};

export default RevenueAnalysis;
