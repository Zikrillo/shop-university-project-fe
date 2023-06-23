module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
   "react/prop-types": "off", // Если вы не используете PropTypes
    "react/react-in-jsx-scope": "off", // Не нужно импортировать React в каждый файл
    "react-hooks/rules-of-hooks": "off", // Проверка правил хуков
    "react-hooks/exhaustive-deps": "warn"
  },
}
