export default [
  {
    files: ['src/a.js'],
    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    files: ['src/b.js'],
    rules: {
      'no-var': 'error',
    },
  },
  {
    rules: {
      'no-console': 'error',
    },
  },
];
