/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Icon } from 'react-native-paper';
import { Breakpoint } from '../styles/breakpoints';

interface ProgressIndicatorProps {
  currentPage: number;
  onStepPress: (position: number) => void;
  labels: string[];
  breakpoint: Breakpoint;
}



const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const iconConfig = {
    source: 'rss',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 15,
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

export default function ProgressIndicator({ currentPage,  onStepPress,  labels,}: ProgressIndicatorProps) {
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
      <View style={styles.labelContainer}>
        {position === currentPosition ? (
          <Text style={styles.stepLabelSelected}>
            {label}
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={secondIndicatorStyles}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  stepIndicator: {
    marginVertical: 20,
  },
  labelContainer: {
    height: 30, // Fixed height container
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 80, // Fixed width to prevent horizontal shifting
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
    lineHeight: 15,
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
    lineHeight: 15,
  },
});

