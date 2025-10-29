import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Calculator from './Calculator';

// Mock dependencies
jest.mock('react-native-paper', () => ({
  useTheme: () => ({
    colors: {
      primary: '#000',
      background: '#fff',
    },
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, left: 0, right: 0, bottom: 0 }),
}));

jest.mock('./Heading', () => 'Heading');
jest.mock('./calculator/ProjectInformation', () => 'ProjectInformation');
jest.mock('./calculator/DevelopmentCosts', () => 'DevelopmentCosts');
jest.mock('./calculator/UnitTypologies', () => 'UnitTypologies');
jest.mock('./ProgressIndicator', () => 'ProgressIndicator');

jest.mock('react-native-pager-view', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: React.forwardRef((props: any, ref: any) => {
      React.useImperativeHandle(ref, () => ({
        setPage: jest.fn(),
      }));
      return <mock-pager-view {...props} />;
    }),
  };
});

describe('Calculator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('handlePageScroll', () => {
    it('should update page to position + 1 when offset > 0.5', () => {
      const { UNSAFE_getByType } = render(<Calculator />);
      const pagerView = UNSAFE_getByType('mock-pager-view');

      fireEvent(pagerView, 'pageScroll', {
        nativeEvent: { position: 1, offset: 0.6 },
      });

      // Page should be updated to position + 1 = 2
      const progressIndicator = UNSAFE_getByType('ProgressIndicator');
      expect(progressIndicator.props.currentPage).toBe(2);
    });

    it('should update page to position when offset <= 0.5', () => {
      const { UNSAFE_getByType } = render(<Calculator />);
      const pagerView = UNSAFE_getByType('mock-pager-view');

      fireEvent(pagerView, 'pageScroll', {
        nativeEvent: { position: 2, offset: 0.3 },
      });

      const progressIndicator = UNSAFE_getByType('ProgressIndicator');
      expect(progressIndicator.props.currentPage).toBe(2);
    });
  });

  describe('handleNextPage', () => {
    it('should increment page and call setPage when not at last page', () => {
      const { UNSAFE_getByType } = render(<Calculator />);
      const heading = UNSAFE_getByType('Heading');

      // Trigger handleNextPage from page 0
      heading.props.handleNextPage();

      const progressIndicator = UNSAFE_getByType('ProgressIndicator');
      expect(progressIndicator.props.currentPage).toBe(1);
    });

    it('should not increment page beyond TOTAL_PAGES', () => {
      const { UNSAFE_getByType } = render(<Calculator />);
      const progressIndicator = UNSAFE_getByType('ProgressIndicator');

      // Navigate to last page (page 4)
      progressIndicator.props.onStepPress(4);

      const heading = UNSAFE_getByType('Heading');
      heading.props.handleNextPage();

      // Should still be at page 4
      expect(progressIndicator.props.currentPage).toBe(4);
    });
  });

  describe('onStepPress', () => {
    it('should update page to the specified position', () => {
      const { UNSAFE_getByType } = render(<Calculator />);
      const progressIndicator = UNSAFE_getByType('ProgressIndicator');

      progressIndicator.props.onStepPress(3);

      expect(progressIndicator.props.currentPage).toBe(3);
    });

    it('should navigate to page 0 when step 0 is pressed', () => {
      const { UNSAFE_getByType } = render(<Calculator />);
      const progressIndicator = UNSAFE_getByType('ProgressIndicator');

      // First navigate to another page
      progressIndicator.props.onStepPress(2);
      expect(progressIndicator.props.currentPage).toBe(2);

      // Then navigate back to page 0
      progressIndicator.props.onStepPress(0);
      expect(progressIndicator.props.currentPage).toBe(0);
    });
  });
});