import React, { useRef } from 'react';
import { ScrollView, ImageBackground, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppHeadingCard from '../styles/AppHeadingCard';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
import FeasibilityResults from './FeasibilityResults';
import {styles} from '../styles/BackgroundImage';

const Calculator: React.FC = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  // Store latest values from children
  const projectInfoRef = useRef({
    projectName: 'Rotorua',
    siteArea: '1000',
    startDate: '2026-07-05',
    duration: '12',
  });
  const costsRef = useRef({
    landCost: '447826',
    civilCost: '80000',
    constructionPerSqm: '2300',
    consultantsCost: '100000',
    councilCost: '100000',
    contingencyPercent: '10',
    marketingCost: '20000',
    financeRate: '8.5',
  });
  const typologiesRef = useRef([
    { name: '2 Bedroom', units: 3, size: 75, price: 485000 },
    { name: '3 Bedroom', units: 2, size: 100, price: 615000 },
  ]);

  // Formatting helpers
  const formatCurrency = (amount: number) => `NZD ${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  // Callbacks to receive updates from children
  const handleProjectInfoChange = (info: any) => {
    projectInfoRef.current = info;
  };
  const handleCostsChange = (costs: any) => {
    costsRef.current = costs;
  };
  const handleTypologiesChange = (typologies: any) => {
    typologiesRef.current = typologies;
  };

  // FeasibilityResults input
  const feasibilityInput = {
    projectInfo: projectInfoRef.current,
    costs: costsRef.current,
    typologies: typologiesRef.current,
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {/* Static Background Image (centered, contain) */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0,
        }}
        pointerEvents="none"
      >
        <ImageBackground
          source={require('../../assets/blue-background-2.jpg')}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
      </View>

      {/* Dark Overlay */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          zIndex: 1,
        }}
      />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: 'transparent',
        }}
        scrollIndicatorInsets={{ right: -6 }}
        persistentScrollbar={true}
        style={{ zIndex: 2 }}
      >
        <AppHeadingCard
          title="Property Development"
          subtitle="Feasibility Calculator"
        />
        <ProjectInformation onChange={handleProjectInfoChange} />
        <DevelopmentCosts onChange={handleCostsChange} />
        <UnitTypologies onChange={handleTypologiesChange} />
        <FeasibilityResults
          input={feasibilityInput}
          formatCurrency={formatCurrency}
          formatPercent={formatPercent}
        />
        {/* Optimisation Section remains inline for now, not refactored */}
      </ScrollView>
    </View>
  );
};

export default Calculator;
