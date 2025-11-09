import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const hooksConfigBase = reactHooks.configs['recommended-latest'] ?? {}
const hooksConfig = {
  ...hooksConfigBase,
  plugins: {
    ...(hooksConfigBase.plugins ?? {}),
    'react-hooks': reactHooks,
  },
}

const refreshConfigBase = reactRefresh.configs.vite ?? {}
const refreshConfig = {
  ...refreshConfigBase,
  plugins: {
    ...(refreshConfigBase.plugins ?? {}),
    'react-refresh': reactRefresh,
  },
}

export default [
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  hooksConfig,
  refreshConfig,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]
