import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Typology {
  name: string;
  units: number;
  size: number;
  price: number;
}

interface ProjectInfo {
  siteArea: string;
}

interface Props {
  projectInfo: ProjectInfo;
  typologies: Typology[];
  formatPercent: (n: number) => string;
}

const styles = StyleSheet.create({
  card: { marginBottom: 12 },
});

const DevelopmentSummary: React.FC<Props> = ({ projectInfo, typologies, formatPercent }) => {
  let totalUnits = 0;
  let totalGFA = 0;
  typologies.forEach(typ => {
    totalUnits += typ.units;
    totalGFA += typ.units * typ.size;
  });
  const site = parseFloat(projectInfo.siteArea) || 1000;
  const siteCoverage = site > 0 ? (totalGFA / site) * 100 : 0;
  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Title title={<Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>Development Summary</Text>} />
      <Card.Content>
        <Text>Total Units: {totalUnits}</Text>
        <Text>Total GFA (sqm): {totalGFA}</Text>
        <Text style={{ color: theme.colors.accent, fontWeight: 'bold' }}>Site Coverage: {formatPercent(siteCoverage)}</Text>
      </Card.Content>
    </Card>
  );
};

export default DevelopmentSummary;
