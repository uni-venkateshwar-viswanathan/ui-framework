export default {
  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/**/*.test.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // for mocking css files
  },
};
