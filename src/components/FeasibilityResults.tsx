import React, { useState } from 'react';
import { Button, useTheme, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ContentCard from '../styles/ContentCard';
import DevelopmentSummary from './feasibility-results/DevelopmentSummary';
import CostAnalysis from './feasibility-results/CostAnalysis';
import RevenueAnalysis from './feasibility-results/RevenueAnalysis';
import ProfitabilityMetrics from './feasibility-results/ProfitabilityMetrics';
import UnitMixBreakdown from './feasibility-results/UnitMixBreakdown';

interface Typology {
  name: string;
  units: number;
  size: number;
  price: number;
}

interface FeasibilityInput {
  projectInfo: {
    projectName: string;
    siteArea: string;
    startDate: string;
    duration: string;
  };
  costs: {
    landCost: string;
    civilCost: string;
    constructionPerSqm: string;
    consultantsCost: string;
    councilCost: string;
    contingencyPercent: string;
    marketingCost: string;
    financeRate: string;
  };
  typologies: Typology[];
}

interface Props {
  input: FeasibilityInput;
  formatCurrency: (n: number) => string;
  formatPercent: (n: number) => string;
}

const styles = StyleSheet.create({
  button: { marginBottom: 16 },
});

const FeasibilityResults: React.FC<Props> = ({ input, formatCurrency, formatPercent }) => {
  const [resultsVisible, setResultsVisible] = useState(false);
  const theme = useTheme();

  return (
    <ContentCard title="Feasibility Results">
        <Button mode="contained" onPress={() => setResultsVisible(true)} style={styles.button} buttonColor={theme.colors.primary} textColor="#fff">
          Calculate Feasibility
        </Button>
        {resultsVisible && (
          <>
            <DevelopmentSummary
              projectInfo={input.projectInfo}
              typologies={input.typologies}
              formatPercent={formatPercent}
            />
            <CostAnalysis
              costs={input.costs}
              projectInfo={input.projectInfo}
              typologies={input.typologies}
              formatCurrency={formatCurrency}
            />
            <RevenueAnalysis
              typologies={input.typologies}
              formatCurrency={formatCurrency}
            />
            <ProfitabilityMetrics
              typologies={input.typologies}
              costs={input.costs}
              projectInfo={input.projectInfo}
              formatCurrency={formatCurrency}
              formatPercent={formatPercent}
            />
            <UnitMixBreakdown
              typologies={input.typologies}
              formatCurrency={formatCurrency}
              formatPercent={formatPercent}
            />
          </>
        )}
    </ContentCard>
  );
};

export default FeasibilityResults;
