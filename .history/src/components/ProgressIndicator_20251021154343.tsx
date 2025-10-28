/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Icon } from 'react-native-paper';

interface ProgressIndicatorProps {
  currentPage: number;
  onStepPress: (position: number) => void;
  labels: string[];
}

const indicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
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
  stepIndicatorLabelFontSize: 0, // Hide default labels
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#fe7013',
};

const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
  originalPosition,
}: {
  position: number;
  stepStatus: string;
  originalPosition: number;
}) => {
  const iconConfig = {
    source: 'rss',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 15,
  };
  
  // Use originalPosition for icon selection
  switch (originalPosition) {
    case 0: {
      iconConfig.source = 'home';
      break;
    }
    case 1: {
      iconConfig.source = 'information';
      break;
    }
    case 2: {
      iconConfig.source = 'chart-line';
      break;
    }
    case 3: {
      iconConfig.source = 'credit-card';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

export default function ProgressIndicator({
  currentPage,
  onStepPress,
  labels,
}: ProgressIndicatorProps) {
  
  // Calculate which 3 steps to show
  const getVisibleSteps = () => {
    const totalSteps = labels.length;
    
    if (currentPage === 0) {
      // First page: show steps 0, 1, 2
      return {
        startIndex: 0,
        visibleLabels: labels.slice(0, 3),
        visiblePositions: [0, 1, 2],
        currentVisiblePosition: 0
      };
    } else if (currentPage === totalSteps - 1) {
      // Last page: show last 3 steps
      const start = Math.max(0, totalSteps - 3);
      return {
        startIndex: start,
        visibleLabels: labels.slice(start),
        visiblePositions: Array.from({ length: labels.slice(start).length }, (_, i) => start + i),
        currentVisiblePosition: currentPage - start
      };
    } else {
      // Middle pages: show previous, current, next
      const start = currentPage - 1;
      return {
        startIndex: start,
        visibleLabels: labels.slice(start, start + 3),
        visiblePositions: [start, start + 1, start + 2],
        currentVisiblePosition: 1
      };
    }
  };

  const { startIndex, visibleLabels, visiblePositions, currentVisiblePosition } = getVisibleSteps();

  const renderStepIndicator = (params: any) => {
    const originalPosition = visiblePositions[params.position];
    return (
      <Icon {...getStepIndicatorIconConfig({ ...params, originalPosition })} />
    );
  };

  const handleStepPress = (position: number) => {
    const originalPosition = visiblePositions[position];
    onStepPress(originalPosition);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={indicatorStyles}
          currentPosition={currentVisiblePosition}
          onPress={handleStepPress}
          renderStepIndicator={renderStepIndicator}
          labels={visibleLabels}
          renderLabel={({ position, label, currentPosition }) => (
            <View style={styles.labelContainer}>
              <Text
                style={[
                  styles.stepLabel,
                  position === currentPosition && styles.stepLabelSelected
                ]}
              >
                {label}
              </Text>
            </View>
          )}
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
    width: 80, // Fixed width to ensure centering
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
    flexWrap: 'wrap',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fe7013',
  },
});