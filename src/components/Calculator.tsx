import React from 'react';
import { useState } from "react";
import { ScrollView, ImageBackground, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppHeadingCard from './AppHeadingCard';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
//import Results from './Results';
import {styles} from '../styles/BackgroundImage';

const Calculator: React.FC = () => {
  const [size, setSize] = useState({ width: 0, height: 0, loading: true });
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  // Formatting helpers
  const formatCurrency = (amount: number) => `NZD ${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  // Results input
  // const feasibilityInput = {
  //   projectInfo: ProjectInformationService.getInstance().getProjectInfo(),
  //   costs: DevelopmentCostsService.getInstance().getCosts(),
  //   typologies: UnitTypologiesService.getInstance().getTypologies(),
  // };

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
          {/*<Image source={require('../../assets/feasibility-calculator.png')}*/}
          {/*       style={{width: dimensions.width, height: 'auto'}}/>*/}

        <AppHeadingCard
          title="Property Development"
          subtitle="Feasibility Calculator"
        />
        <ProjectInformation />
        <DevelopmentCosts />
        <UnitTypologies />
        {/*<Results*/}
        {/*  input={feasibilityInput}*/}
        {/*  formatCurrency={formatCurrency}*/}
        {/*  formatPercent={formatPercent}*/}
        {/*/>*/}
        {/* Optimisation Section remains inline for now, not refactored */}
      </ScrollView>
    </View>
  );
};

export default Calculator;
