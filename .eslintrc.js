module.exports = {
  settings: {
    'import/extensions': ['.mjs', '.js'],
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js'],
      },
    },
  },
  env: {
    browser: false,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:jest/all'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    semi: ['error', 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
