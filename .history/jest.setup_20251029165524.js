// jest.setup.js - Minimal mocking
import '@testing-library/jest-native/extend-expect';

// Only mock what breaks your tests
// Add mocks one-by-one as you encounter errors
// Document WHY each mock is needed

// Example:
// Mock PagerView - requires native iOS/Android ViewPager
jest.mock('react-native-pager-view', () => require('./__mocks__/react-native-pager-view'));
