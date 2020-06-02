module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/__tests__/**/*+(spec|test).ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
