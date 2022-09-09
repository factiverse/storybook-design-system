import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default {
  input: ['src/index.ts'],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    image(),
    terser(),
    postcss(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
    copy({
      targets: [
        {
          src: 'src/icons/*.svg',
          dest: 'dist/icons',
        },
        {
          src: 'src/config/fonts/**/*',
          dest: 'dist/config',
        },
      ],
    }),
  ],
};
