import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import ContentCard from '../../styles/ContentCard';

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
  siteArea: string;
}

interface Props {
  typologies: Typology[];
  costs: Costs;
  projectInfo: ProjectInfo;
  formatCurrency: (n: number) => string;
  formatPercent: (n: number) => string;
}

const ProfitabilityMetrics: React.FC<Props> = ({ typologies, costs, projectInfo, formatCurrency, formatPercent }) => {
  // Revenue
  let grossRevenue = 0;
  let totalUnits = 0;
  let totalGFA = 0;
  typologies.forEach(typ => {
    grossRevenue += typ.units * typ.price;
    totalUnits += typ.units;
    totalGFA += typ.units * typ.size;
  });
  const gst = grossRevenue * 0.15;
  const commission = grossRevenue * 0.035;
  const netRevenue = grossRevenue - gst - commission;

  // Costs
  const land = parseFloat(costs.landCost) || 0;
  const civil = parseFloat(costs.civilCost) || 0;
  const construction = parseFloat(costs.constructionPerSqm) || 0;
  const consultants = parseFloat(costs.consultantsCost) || 0;
  const council = parseFloat(costs.councilCost) || 0;
  const contingencyP = parseFloat(costs.contingencyPercent) || 0;
  const marketing = parseFloat(costs.marketingCost) || 0;
  const finance = parseFloat(costs.financeRate) || 0;
  const dur = parseFloat(projectInfo.duration) || 12;

  const constructionCost = totalGFA * construction;
  const contingency = constructionCost * (contingencyP / 100);
  const prefinanceCosts = land + civil + constructionCost + consultants + council + contingency + marketing;
  const averageOutstanding = prefinanceCosts * 0.6;
  const financeCost = averageOutstanding * (finance / 100) * (dur / 12);
  const totalCost = prefinanceCosts + financeCost;

  // Metrics
  const profit = netRevenue - totalCost;
  const margin = netRevenue > 0 ? (profit / netRevenue) * 100 : 0;
  const costPerUnit = totalUnits > 0 ? totalCost / totalUnits : 0;
  const revenuePerUnit = totalUnits > 0 ? netRevenue / totalUnits : 0;

  const theme = useTheme();

  return (
    <ContentCard title="Profitability Metrics" style={{ marginBottom: 12 }}>
      <Text>Net Revenue: {formatCurrency(netRevenue)}</Text>
      <Text>Total Cost: {formatCurrency(totalCost)}</Text>
      <Text style={{ color: theme.colors.accent, fontWeight: 'bold' }}>Profit: {formatCurrency(profit)}</Text>
      <Text style={{ color: theme.colors.accent, fontWeight: 'bold' }}>Margin: {formatPercent(margin)}</Text>
      <Text>Cost per Unit: {formatCurrency(costPerUnit)}</Text>
      <Text>Revenue per Unit: {formatCurrency(revenuePerUnit)}</Text>
    </ContentCard>
  );
};

export default ProfitabilityMetrics;
