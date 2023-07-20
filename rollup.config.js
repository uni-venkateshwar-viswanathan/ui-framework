import css from 'rollup-plugin-import-css';
import babel from '@rollup/plugin-babel';
import { copy } from '@web/rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    css({ output: 'uniphore-styles.css' }),
    babel({ exclude: 'node_modules/**' }),
    copy({
      patterns: 'public_assets/**/*',
      rootDir: 'src',
    }),
    dev &&
      serve({
        contentBase: ['build', 'demo'],
      }),
  ],
  external: [],
};
