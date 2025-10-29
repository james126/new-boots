/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Icon } from 'react-native-paper';
import { Breakpoint } from '../styles/breakpoints';
import { largeIndicatorStyles, progressIndicatorLarge } from '../styles/progress-indicator/progressIndicatorLarge';
import { mediumIndicatorStyles, progressIndicatorMedium } from '../styles/progress-indicator/progressIndicatorMedium';
import { progressIndicatorSmall, smallIndicatorStyles } from '../styles/progress-indicator/progressIndicatorSmall';
import { clayPalette } from '../styles/theme';

interface ProgressIndicatorProps {
  currentPage: number;
  onStepPress: (position: number) => void;
  breakpoint: Breakpoint;
}

export default function ProgressIndicator({ currentPage, onStepPress, labels, breakpoint }: ProgressIndicatorProps) {
  const [style, setStyle] = React.useState(progressIndicatorLarge);
  const [indicatorStyles, setIndicatorStyles] = React.useState(largeIndicatorStyles);

  React.useEffect(() => {
    if (breakpoint === Breakpoint.LARGE) {
      setStyle(progressIndicatorLarge)
      setIndicatorStyles(largeIndicatorStyles)
    } else if (breakpoint === Breakpoint.MEDIUM) {
      setStyle(progressIndicatorMedium)
      setIndicatorStyles(mediumIndicatorStyles)
    } else {
      setStyle(progressIndicatorSmall)
      setIndicatorStyles(smallIndicatorStyles)
    }
  }, [breakpoint, style, indicatorStyles]);

  const getStepIndicatorIconConfig = ({position, stepStatus,}: {position: number; stepStatus: string}) => {
  const iconConfig = {
    source: 'rss',
    color: stepStatus === 'finished' ? '#ffffff' : clayPalette.brownOrange,
    size: breakpoint === Breakpoint.LARGE ? 16 : breakpoint === Breakpoint.MEDIUM ? 15 : 14,
  };
  switch (position) {
    case 0: {
      iconConfig.source = 'home';
      break;
    }
    case 1: {
      iconConfig.source = 'information';
      break;
    }
    case 2: {
      iconConfig.source = 'currency-usd';
      break;
    }
    case 3: {
      iconConfig.source = 'home-group-plus';
      break;
    }
    case 4: {
      iconConfig.source = 'file-document';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

  const renderStepIndicator = (params: any) => (
    <Icon {...getStepIndicatorIconConfig(params)} />
  );

  const renderLabel = ({
    position,
    label,
    currentPosition,
  }: {
    position: number;
    stepStatus: string;
    label: string;
    currentPosition: number;
  }) => {
    // Always return a View with fixed height, but only show text for current position
    return (
      <View style={style.labelContainer}>
        {position === currentPosition ? (
          <Text style={style.stepLabelSelected}>
            {label}
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.stepIndicator}>
        <StepIndicator
          customStyles={indicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
          renderStepIndicator={renderStepIndicator}
          renderLabel={renderLabel}
          labels={labels}
        />
      </View>
    </View>
  );
}



