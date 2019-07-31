import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import renameExtensions from '@slikts/rollup-plugin-rename-extensions';

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const rollupConfig = () => ({
  input: 'src/index.ts',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    // },
    {
      dir: 'lib',
      format: 'es',
      entryFileNames: '[name].js',
      sourcemap: true,
    },
    // {
    //   file: pkg.browser,
    //   format: 'umd',
    //   name: 'MyPackage',
    // },
  ],
  // sourceMap: true,
  preserveModules: true,
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    babel({
      // TODO: ?
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    commonjs(),
    renameExtensions({
      include: ['**/*.ts'],
      mappings: {
        '.ts': '.js',
      },
      sourceMap: true,
    }),
    // production && terser(),
  ],
});

export default rollupConfig;
