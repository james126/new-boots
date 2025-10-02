import React from 'react';
import { useState, useRef } from "react";
import { ImageBackground, View, Dimensions, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Heading from './Heading';
import ProjectInformation from './calculator/ProjectInformation';
import DevelopmentCosts from './calculator/DevelopmentCosts';
import UnitTypologies from './calculator/UnitTypologies';
import Pagination from './Pagination';
import { backgroundStyle } from '../styles/backgroundStyle';
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";

const TOTAL_PAGES = 3;

const Calculator: React.FC = () => {
  const [size, setSize] = useState({ width: 0, height: 0, loading: true });
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  // Formatting helpers
  const formatCurrency = (amount: number) => `NZD ${amount.toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;
  const handlePageChange = (e: PagerViewOnPageSelectedEvent) => {
    setPage(e.nativeEvent.position);
  };
  const goToPage = (index: number) => {
    pagerRef.current?.setPage(index);
    setPage(index);
  };
  const nextPage = () => {
    if (page < TOTAL_PAGES - 1) {
      goToPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 0) {
      goToPage(page - 1);
    }
  };

  let x = 1;
  console.log("App executed")

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {/* Static Background Image */}
      <View style={backgroundStyle.view}>
        <ImageBackground
          source={require('../../assets/background/green_wave.png')}
          style={backgroundStyle.backgroundImage}
          resizeMode="stretch"
        />
      </View>

      {/* PagerView with explicit dimensions */}
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          zIndex: 2
        }}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setSize({ width, height, loading: false });
        }}
      >

        {!size.loading && (
          <PagerView
            style={{ width: size.width, height: size.height }}
            initialPage={0}
          >
            <View key="0" collapsable={false}>
              <Heading />
              <Pagination
                page={page}
                totalPages={TOTAL_PAGES}
                onPrevPage={prevPage}
                onNextPage={nextPage}
              />
            </View>
            <View key="1" style={{ flex: 1 }} collapsable={false}>
              <ProjectInformation />
            </View>
            <View key="2" style={{ flex: 1 }} collapsable={false}>
              <DevelopmentCosts />
            </View>
            <View key="3" style={{ flex: 1 }} collapsable={false}>
              <UnitTypologies />
            </View>
          </PagerView>
        )}

        <Pagination
          page={page}
          totalPages={TOTAL_PAGES}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  pager: { flex: 1 },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Calculator;
