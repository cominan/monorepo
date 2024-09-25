module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  setting: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
