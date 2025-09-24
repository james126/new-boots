import React from 'react';
import { Card, Text, Divider, useTheme } from 'react-native-paper';
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
  formatPercent: (n: number) => string;
}

const UnitMixBreakdown: React.FC<Props> = ({ typologies, formatCurrency, formatPercent }) => {
  let grossRevenue = 0;
  typologies.forEach(typ => {
    grossRevenue += typ.units * typ.price;
  });
  const theme = useTheme();
  return (
    <ContentCard title="Unit Mix Breakdown" style={{ marginBottom: 12 }}>
        {typologies.map((typ, idx) => {
          const typRevenue = typ.units * typ.price;
          return (
            <Card key={idx} style={{ marginBottom: 12, backgroundColor: 'rgba(255, 255, 255, 0.55)', borderColor: theme.colors.primary, borderWidth: 1 }}>
              <Card.Content>
                <Text variant="titleMedium" style={{ marginBottom: 4, color: theme.colors.primary }}>{typ.name}</Text>
                <Divider style={{ marginBottom: 8 }} />
                <Text>Units: <Text style={{ fontWeight: 'bold' }}>{typ.units}</Text></Text>
                <Text>Size (sqm): <Text style={{ fontWeight: 'bold' }}>{typ.size}</Text></Text>
                <Text>Total Area: <Text style={{ fontWeight: 'bold' }}>{typ.units * typ.size}</Text></Text>
                <Text>Unit Price: <Text style={{ fontWeight: 'bold' }}>{formatCurrency(typ.price)}</Text></Text>
                <Text>Total Revenue: <Text style={{ fontWeight: 'bold' }}>{formatCurrency(typRevenue)}</Text></Text>
                <Text>% of Revenue: <Text style={{ fontWeight: 'bold', color: theme.colors.accent }}>{grossRevenue > 0 ? formatPercent((typRevenue / grossRevenue) * 100) : '0%'}</Text></Text>
              </Card.Content>
            </Card>
          );
        })}
    </ContentCard>
  );
};

export default UnitMixBreakdown;
