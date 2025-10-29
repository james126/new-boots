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
  labels: string[];
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

  const getStepIndicatorIconConfig = ({position,stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
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

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};


