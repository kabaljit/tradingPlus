module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:json/recommended',
    'plugin:sonarjs/recommended',
    // Make sure prettier rules are always the last ones.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    'prettier',
  ],
  plugins: ['react', 'react-native', 'react-hooks', 'import'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/default': 1,

    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    fetch: false,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/ignore': ['/pino/', '/pino-http/', '/find-root/'],
  },
};
