module.exports = {
  globals: {
    NodeJS: true
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    semi: 0,
    indent: 'off',
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'object-curly-spacing': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'operator-linebreak': [
      1,
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore'
        }
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'object-curly-newline': ['off', { multiline: true }],
    'no-unused-expressions': [
      'error',
      { allowTernary: true, allowShortCircuit: true }
    ],
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}