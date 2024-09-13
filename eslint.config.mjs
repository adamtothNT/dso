import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      react: eslintPluginReact,
      jest: eslintPluginJest,
    },
    languageOptions: {
      // Automatically detect the React version
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly', // React global for JSX in React 17+
        test: 'readonly',  // Jest global
        expect: 'readonly', // Jest global
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+ JSX support without import
      'jest/no-disabled-tests': 'warn', // Example Jest rule
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
  },
];

