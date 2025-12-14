import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

const ESLintPlugin = require('eslint-rspack-plugin');

const options = {
  // Контекст для проверки
  context: process.cwd(),
  
  // Расширения файлов для проверки
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  
  // Исключаемые файлы и директории
  exclude: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.rsbuild',
    '.rspack'
  ],
  
  // Для flat config (eslint.config.js)
  eslintPath: require.resolve('eslint'),
  
  // Использовать flat config
  // useEslintrc: false,
  
  // Указать путь к конфиг файлу
  baseConfig: './eslint.config.mjs',
  
  // Или для традиционного конфига:
  // useEslintrc: true,
  // configFile: './.eslintrc.js',
  
  // Опции для разработки
  emitError: true,
  emitWarning: true,
  failOnError: false,
  failOnWarning: false,
  
  // Отключить кэширование для разработки
  cache: false,
  
  // Формат вывода
  // formatter: 'stylish',
  
  // Проверять только измененные файлы (повышает скорость)
  lintDirtyModulesOnly: true,
  
  // Использовать многопоточность
  threads: true,
  
  // Установки для разных окружений
  // ...(process.env.NODE_ENV === 'production' && {
  //   emitWarning: false,
  //   failOnError: true,
  //   failOnWarning: false
  // })
};

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginSass(), new ESLintPlugin(options)],
  html: {
    title: 'Race Tournament',
  },
});
