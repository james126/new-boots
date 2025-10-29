// jest.setup.js - Minimal mocking
import '@testing-library/jest-native/extend-expect';

// Only mock what breaks your tests
// Add mocks one-by-one as you encounter errors
// Document WHY each mock is needed

// Mock PagerView - requires native iOS/Android ViewPager
jest.mock('react-native-pager-view', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: React.forwardRef((props, ref) => {
      React.useImperativeHandle(ref, () => ({
        setPage: jest.fn(),
      }));
      return null;
    }),
  };
});
