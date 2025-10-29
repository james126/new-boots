import '@testing-library/jest-native/extend-expect';

// Mock react-native modules if needed

// jest.config.js
module.exports = {
  preset: 'react-native', // This provides many built-in mocks
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Only add transformIgnorePatterns for modules that need special handling
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-paper|react-native-svg)/)',
  ],
};
