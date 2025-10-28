import React from 'react';
import { useState, useRef } from "react";
import { ImageBackground, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Heading from './Heading';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
import ProgressIndicator from './ProgressIndicator';
import { backgroundStyle } from '../styles/backgroundStyle';
import PagerView from "react-native-pager-view";

const Calculator = () => {
  const TOTAL_PAGES = 4; // Updated to match actual pages
  const BACKGROUND_IMAGE = require('../../assets/background/aibackground.png')
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [page, setPage] = useState<number>(1); // Start at ProjectInformation
  const pagerRef = useRef<PagerView>(null);

  const handlePageScroll = (e) => {
    const { position, offset } = e.nativeEvent;
    if (offset > 0.5) {
      setPage(position + 1);
    } else {
      setPage(position);
    }
  };

  const handleSwipeNavigation = (direction: 'left' | 'right') => {
    if (direction === 'right' && page < TOTAL_PAGES - 1) {
      const nextPage = page + 1;
      pagerRef.current?.setPage(nextPage);
      setPage(nextPage);
    } else if (direction === 'left' && page > 0) {
      const prevPage = page - 1;
      pagerRef.current?.setPage(prevPage);
      setPage(prevPage);
    }
  };

  const handleNextPage = () => {
    handleSwipeNavigation('right');
  }

  const onStepPress = (position: number) => {
    setPage(position);
    pagerRef.current?.setPage(position);
  };

  // Labels for the progress indicator
  const stepLabels = [
    'Home',
    'Info', 
    'Costs', 
    'Typology',
    'Results'
  ];

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={backgroundStyle.view}>
        <ImageBackground source={BACKGROUND_IMAGE} style={backgroundStyle.backgroundImage} resizeMode="stretch" />
      </View>

      <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, zIndex: 2 }}>
        
        <PagerView 
          ref={pagerRef}
          style={{ flex: 1 }}
          initialPage={1}
          onPageScroll={handlePageScroll}>
          <View key="0" collapsable={false}>
            <Heading handleNextPage={handleNextPage}/>
          </View>
          <View key="1" collapsable={false}>
            <ProjectInformation handleNextPage={handleNextPage}/>
          </View>
          <View key="2" collapsable={false}>
            <DevelopmentCosts />
          </View>
          <View key="3" collapsable={false}>
            <UnitTypologies />
          </View>
        </PagerView>

        <ProgressIndicator 
          currentPage={page}
          onStepPress={onStepPress}
          labels={stepLabels}
        />
        
      </View>
    </View>
  );
};

export default Calculator;

// Formatting helpers
const formatCurrency = (amount: number) => `NZD ${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const formatPercent = (value: number) => `${value.toFixed(2)}%`;
