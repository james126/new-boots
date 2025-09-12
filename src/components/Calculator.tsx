import React, { useRef } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
import FeasibilityResults from './FeasibilityResults';

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
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: '#F5F6FA', // light grey background
      }}
      scrollIndicatorInsets={{ right: -6 }}
      persistentScrollbar={true}
    >
      {/*<Surface style={{*/}
      {/*  margin: 16,*/}
      {/*  marginBottom: 0,*/}
      {/*  padding: 0,*/}
      {/*  borderRadius: 16,*/}
      {/*  backgroundColor: '#fff',*/}
      {/*  alignItems: 'center',*/}
      {/*  elevation: 4,*/}
      {/*  position: 'relative',*/}
      {/*  overflow: 'hidden',*/}
      {/*  minHeight: 120,*/}
      {/*  justifyContent: 'center',*/}
      {/*}}>*/}
      <View>
        <Image
          source={require('../../assets/excavator.png')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.18,
            zIndex: 0,
          }}
          resizeMode="cover"
        />
        <Text
          variant="headlineMedium"
          style={{
            color: theme.colors.primary,
            textAlign: 'center',
            textShadowColor: 'rgba(0,0,0,0.10)',
            textShadowOffset: { width: 0, height: 2 },
            textShadowRadius: 4,
          }}
          accessibilityRole="header"
          accessibilityLabel="Property Development Feasibility Calculator"
        >
          Property Development
        </Text>
          <Text
              variant="displaySmall"
              style={{
                  color: theme.colors.primary,
                  textAlign: 'center',
                  textShadowColor: 'rgba(0,0,0,0.10)',
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 4,
              }}
              accessibilityRole="header"
              accessibilityLabel="Property Development Feasibility Calculator"
          >
              Feasibility Calculator
          </Text>
      </View>
      {/*</Surface>*/}
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
  );
};

export default Calculator;
