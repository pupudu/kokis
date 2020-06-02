module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'no-only-tests'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all'
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    "@typescript-eslint/no-unused-vars": 'error',
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/ban-ts-ignore": 'off',
    'no-only-tests/no-only-tests': 'error'
  }
};
