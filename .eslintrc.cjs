module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  extends: ['standard-with-typescript'],
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  rules: {
    'import/first': 'off',
    'import/no-duplicates': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }]
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': true
  },
  // Updated ignorePatterns array
  ignorePatterns: [
    'node_modules/*', 
    'dist/*', 
    'src-tauri/*', 
    '.eslintrc.cjs', 
    '*.json',
    '**/*.svelte', // Ignore all .svelte files
    'src/lib/'     // Ignore everything in the src/lib/ directory
  ]
};
