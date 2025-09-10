import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Typology {
  name: string;
  units: number;
  size: number;
  price: number;
}

interface Costs {
  landCost: string;
  civilCost: string;
  constructionPerSqm: string;
  consultantsCost: string;
  councilCost: string;
  contingencyPercent: string;
  marketingCost: string;
  financeRate: string;
}

interface ProjectInfo {
  duration: string;
}

interface Props {
  costs: Costs;
  projectInfo: ProjectInfo;
  typologies: Typology[];
  formatCurrency: (n: number) => string;
}

const styles = StyleSheet.create({
  card: { marginBottom: 12 },
});

const CostAnalysis: React.FC<Props> = ({ costs, projectInfo, typologies, formatCurrency }) => {
  const land = parseFloat(costs.landCost) || 0;
  const civil = parseFloat(costs.civilCost) || 0;
  const construction = parseFloat(costs.constructionPerSqm) || 0;
  const consultants = parseFloat(costs.consultantsCost) || 0;
  const council = parseFloat(costs.councilCost) || 0;
  const contingencyP = parseFloat(costs.contingencyPercent) || 0;
  const marketing = parseFloat(costs.marketingCost) || 0;
  const finance = parseFloat(costs.financeRate) || 0;
  const dur = parseFloat(projectInfo.duration) || 12;

  let totalGFA = 0;
  typologies.forEach(typ => {
    totalGFA += typ.units * typ.size;
  });
  const constructionCost = totalGFA * construction;
  const contingency = constructionCost * (contingencyP / 100);
  const prefinanceCosts = land + civil + constructionCost + consultants + council + contingency + marketing;
  const averageOutstanding = prefinanceCosts * 0.6;
  const financeCost = averageOutstanding * (finance / 100) * (dur / 12);
  const totalCost = prefinanceCosts + financeCost;
  const otherCosts = civil + consultants + council + contingency + marketing;

  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Title title={<Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>Cost Analysis</Text>} />
      <Card.Content>
        <Text>Land Cost: {formatCurrency(land)}</Text>
        <Text>Construction Cost: {formatCurrency(constructionCost)}</Text>
        <Text>Other Costs: {formatCurrency(otherCosts)}</Text>
        <Text>Finance Cost: {formatCurrency(financeCost)}</Text>
        <Text style={{ color: theme.colors.accent, fontWeight: 'bold' }}>Total Development Cost: {formatCurrency(totalCost)}</Text>
      </Card.Content>
    </Card>
  );
};

export default CostAnalysis;
