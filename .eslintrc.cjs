module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Assuming you're using React
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    // Do not include 'prettier' here
  ],
  rules: {
    // Add your custom rules or override here
    'react/react-in-jsx-scope': 'off', // For React 17+ you don't need to import React when using JSX
    // You can add other rules that you prefer to enforce in your project
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
