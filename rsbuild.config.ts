import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginSass(), pluginSvgr()],
  html: {
    title: 'Race Tournament',
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
      },
      // Roboto
      {
        tag: 'link',
        attrs: {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
      },
      // BBH Hegarty
      {
        tag: 'link',
        attrs: {
          href: 'https://fonts.googleapis.com/css2?family=BBH+Bartle&family=BBH+Hegarty&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
      },
    ]
  },
});
