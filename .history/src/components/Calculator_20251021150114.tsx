import React from 'react';
import { useState, useRef } from "react";
import { ImageBackground, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Heading from './Heading';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
import { backgroundStyle } from '../styles/backgroundStyle';
import PagerView from "react-native-pager-view";
import { Pagination } from './Pagination';

const Calculator = () => {
  const TOTAL_PAGES = 3;
  const BACKGROUND_IMAGE = require('../../assets/background/aibackground.png')
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [page, setPage] = useState<number>(0);

  const handlePageScroll = (e) => {
    const { position, offset } = e.nativeEvent;
    // Update immediately when starting to swipe to next page
    if (offset > 0.5) {
      setPage(position + 1);
    } else {
      setPage(position);
    } else if (offset < -0.5){
      
    }
  };

  const handleNextPage = () => {
    console.log('Navigating to next page from page', page);
    setPage(page+1)
  }

  return (
    <View style={{ flex: 1, position: 'relative' }}>

      <View style={backgroundStyle.view}>
        <ImageBackground source={BACKGROUND_IMAGE} style={backgroundStyle.backgroundImage} resizeMode="stretch" />
      </View>

      <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, zIndex: 2 }}>
        <PagerView style={{ flex: 1 }}
          initialPage={1}
          onPageScroll={handlePageScroll}>
          <View key="0" collapsable={false}>
            <Heading />
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
        <Pagination page={page} numPages={TOTAL_PAGES} />
      </View>
    </View>
  );
};

export default Calculator;

// Formatting helpers
const formatCurrency = (amount: number) => `NZD ${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const formatPercent = (value: number) => `${value.toFixed(2)}%`;
