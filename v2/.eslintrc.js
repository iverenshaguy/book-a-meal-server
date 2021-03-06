module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '../v2/tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base/legacy',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'new-cap': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'comma-dangle': 0,
    'import/named': 0,
    'import/no-unresolved': 'off',
    'no-shadow': [
      'error',
      {
        'allow': [
          'req',
          'res',
          'err'
        ]
      }
    ],
    'valid-jsdoc': [
      'error',
      {
        'requireReturn': true,
        'requireReturnType': true,
        'requireParamDescription': false,
        'requireReturnDescription': true
      }
    ],
    'require-jsdoc': [
      'error',
      {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': true
        }
      }
    ],
  },
  ignorePatterns: [
    'coverage/**/*',
    'src/**/*',
    'dist/**/*',
    'tests/**/*',
    'config/**/*',
    'docs/**/*',
    'jest.config.js',
    '.eslintrc.js'
  ]
};
