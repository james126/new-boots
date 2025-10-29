// jest.setup.js - Minimal mocking
import '@testing-library/jest-native/extend-expect';


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

// Clear all timers after each test to prevent warnings
afterEach(() => {
  // Clear any pending timers
  jest.clearAllTimers();
  
  // Ensure we're using real timers after each test
  if (jest.isMockFunction(setTimeout)) {
    jest.useRealTimers();
  }
});
