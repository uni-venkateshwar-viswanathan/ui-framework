import css from "rollup-plugin-import-css";
import babel from "@rollup/plugin-babel";
import { copy } from '@web/rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
    input:'src/index.js',
    output: {
        dir: 'build',
        format: 'esm',
    },
    plugins: [
        nodeResolve(),
        css({output: 'uniphore-styles.css'}),
        babel({exclude: 'node_modules/**' }),
        copy({
            patterns: 'assets/**/*',
            rootDir: 'src',
        })
    ],
    external: []
};