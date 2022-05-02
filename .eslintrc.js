module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  ignorePatterns: [
    'node_modules/**',
    '**/dist/**'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    semi: [
      'error',
      'always'
    ],
    'comma-dangle': [
      'warn',
      'always-multiline'
    ],
    quotes: [
      'warn',
      'single'
    ]
  },
  env: {
    'browser': true,
    'node': false
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue']
  }
};
