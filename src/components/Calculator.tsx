import React from 'react';
import { useState } from "react";
import { ScrollView, ImageBackground, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Heading from './Heading';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
//import Results from './Results';
import {backgroundStyle} from '../styles/backgroundStyle';

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
      <View style={backgroundStyle.view}>
        <ImageBackground
          source={require('../../assets/abstract-background-triangles-blue-purple-color.jpg')}
          style={backgroundStyle.backgroundImage}
          resizeMode="stretch"
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          // backgroundColor: 'transparent',
        }}
        scrollIndicatorInsets={{ right: -6 }}
        persistentScrollbar={true}
        style={{ zIndex: 2 }}
      >

        <Heading title="Property Development"/>
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
