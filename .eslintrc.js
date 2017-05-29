module.exports = {
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    'node/exports-style': ['error', 'module.exports'],
    'no-console': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
  env: {
    es6: true,
    node: true,
  },
};
