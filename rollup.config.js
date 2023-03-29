import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    terser(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    postcss(),
    image(),
    copy({
      targets: [
        {
          src: 'src/config/fonts',
          dest: 'build/config',
        },
        {
          src: 'src/icons/*.svg',
          dest: 'build/icons',
        },
        {
          src: 'src/img',
          dest: 'build',
        },
      ],
    }),
  ],
};
