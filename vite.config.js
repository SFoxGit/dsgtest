import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import dynamicImport from '@rollup/plugin-dynamic-import-vars'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      base: '/dsgtest/',
      esbuild: {
        jsxInject: 'import React from "react";',
      },
      build: {
        // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
        target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all']),
        rollupOptions: {
          plugins: [dynamicImport()],
        },
      },
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
          babel: {
            plugins: ['@emotion/babel-plugin', '@babel/plugin-transform-react-constant-elements'],
          },
        }),
      ],
    }
  } else {
    return {
      base: '/dsgtest/',
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
          babel: {
            plugins: ['@emotion/babel-plugin'],
          },
        }),
      ],
    }
  }
})
