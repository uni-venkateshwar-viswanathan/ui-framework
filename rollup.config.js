import css from "rollup-plugin-import-css";
import babel from "@rollup/plugin-babel";
import { copy } from '@web/rollup-plugin-copy';

export default {
    input:'src/index.js',
    output: {
        dir: 'build',
        format: 'esm',
    },
    plugins: [
        css({output: 'uniphore.css'}),
        babel({exclude: 'node_modules/**' }),
        copy({
            patterns: 'assets/**/*',
            rootDir: 'src',
        })
    ],
    external: []
};