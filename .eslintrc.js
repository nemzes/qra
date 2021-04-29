// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'import/order': [
      'error',
      { 'newlines-between': 'always', alphabetize: { order: 'asc' } },
    ],
    'import/newline-after-import': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
  },
  settings: {
    'import/internal-regex': '\\.css$',
  },
};
