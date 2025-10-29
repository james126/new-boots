import React, { useEffect } from 'react';
import { useState, useRef } from "react";
import { Dimensions, ImageBackground, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Heading from './Heading';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
import ProgressIndicator from './ProgressIndicator';
import { backgroundStyle } from '../styles/backgroundStyle';
import PagerView from "react-native-pager-view";
import { Breakpoint, getBreakpoint } from '../styles/breakpoints';

const Calculator = () => {
  const TOTAL_PAGES = 4; // Updated to match actual pages
  const BACKGROUND_IMAGE = require('../../assets/background/aibackground.png')
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [page, setPage] = useState<number>(0);
  const pagerRef = useRef<PagerView>(null);
  const [screenData, setScreenData] = useState(Dimensions.get('window'));
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.MEDIUM);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenData(window);
    });

    const { height, width } = screenData;
    console.log("Screen data changed: ", height, width);
    const breakpoint = getBreakpoint(height);
    setBreakpoint(breakpoint);

    return () => subscription?.remove();
  }, [breakpoint]);

  const handlePageScroll = (e) => {
    const { position, offset } = e.nativeEvent;
    if (offset > 0.5) {
      setPage(position + 1);
    } else {
      setPage(position);
    }
  };

  const handleNextPage = () => {
    if (page < TOTAL_PAGES) {
      const nextPage = page + 1;
      pagerRef.current?.setPage(nextPage);
      setPage(nextPage);
    }
  }

  const onStepPress = (position: number) => {
    setPage(position);
    pagerRef.current?.setPage(position);
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={backgroundStyle.view}>
        <ImageBackground source={BACKGROUND_IMAGE} style={backgroundStyle.backgroundImage} resizeMode="stretch" />
      </View>

      <View style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        zIndex: 2
      }}>

        {/* PagerView takes remaining space */}
        <View style={{ flex: 1 }}>
          <PagerView
            ref={pagerRef}
            style={{ flex: 1 }}
            initialPage={0}
            onPageScroll={handlePageScroll}>
            <View key="0" collapsable={false}>
              <Heading handleNextPage={handleNextPage} breakpoint={breakpoint} />
            </View>
            <View key="1" collapsable={false}>
              <ProjectInformation handleNextPage={handleNextPage} />
            </View>
            <View key="2" collapsable={false}>
              <DevelopmentCosts />
            </View>
            <View key="3" collapsable={false}>
              <UnitTypologies />
            </View>
          </PagerView>
        </View>

        {/* ProgressIndicator pinned to bottom */}
        <View style={{
          paddingBottom: 0,
          marginBottom: 0,
          backgroundColor: 'transparent'
        }}>
          <ProgressIndicator
            currentPage={page}
            onStepPress={onStepPress}
            breakpoint={breakpoint}
          />
        </View>

      </View>
    </View>
  );
};

export default Calculator;

// Formatting helpers
const formatCurrency = (amount: number) => `NZD ${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const formatPercent = (value: number) => `${value.toFixed(2)}%`;
