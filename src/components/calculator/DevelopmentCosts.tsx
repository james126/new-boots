import React, { useState, useEffect } from 'react';
import { TextInput, useTheme, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ContentCard from '../../styles/ContentCard';

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

interface Props {
  onChange?: (costs: Costs) => void;
}

const styles = StyleSheet.create({
  input: { marginBottom: 8 },
});

const DevelopmentCosts: React.FC<Props> = ({ onChange }) => {
  const [landCost, setLandCost] = useState('447826');
  const [civilCost, setCivilCost] = useState('80000');
  const [constructionPerSqm, setConstructionPerSqm] = useState('2300');
  const [consultantsCost, setConsultantsCost] = useState('100000');
  const [councilCost, setCouncilCost] = useState('100000');
  const [contingencyPercent, setContingencyPercent] = useState('10');
  const [marketingCost, setMarketingCost] = useState('20000');
  const [financeRate, setFinanceRate] = useState('8.5');
  const theme = useTheme();

  useEffect(() => {
    if (onChange) {
      onChange({
        landCost,
        civilCost,
        constructionPerSqm,
        consultantsCost,
        councilCost,
        contingencyPercent,
        marketingCost,
        financeRate,
      });
    }
  }, [landCost, civilCost, constructionPerSqm, consultantsCost, councilCost, contingencyPercent, marketingCost, financeRate, onChange]);

  return (
    <ContentCard title="Development Costs">
        <TextInput
          label="Land Cost (NZD)"
          value={landCost}
          onChangeText={setLandCost}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Civil & Infrastructure (NZD)"
          value={civilCost}
          onChangeText={setCivilCost}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Construction Cost per sqm (NZD)"
          value={constructionPerSqm}
          onChangeText={setConstructionPerSqm}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Consultants & Design (NZD)"
          value={consultantsCost}
          onChangeText={setConsultantsCost}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Council Costs (NZD)"
          value={councilCost}
          onChangeText={setCouncilCost}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Contingency (%)"
          value={contingencyPercent}
          onChangeText={setContingencyPercent}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Marketing & Sales (NZD)"
          value={marketingCost}
          onChangeText={setMarketingCost}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Finance Rate (% p.a.)"
          value={financeRate}
          onChangeText={setFinanceRate}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
    </ContentCard>
  );
};

export default DevelopmentCosts;
