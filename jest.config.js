module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$': require.resolve(
        'jest-expo/src/preset/assetFileTransformer.js'
      ),
    },
    setupFiles: [
      require.resolve('jest-expo/src/preset/setup.js')
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
    ],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/.expo/',
      '<rootDir>/.expo-shared/',
    ],
    cacheDirectory: '.jest/cache',
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/**/*/index.{ts,tsx}',
      '!src/**/**/*/*.model.{ts,tsx}',
      '!src/**/**/*/*.models.{ts,tsx}',
      '!src/**/models/**/*.{ts,tsx}',
    ],
  };
  