import css from "rollup-plugin-import-css";
import babel from "@rollup/plugin-babel";

export default {
    input:'src/components/index.js',
    output: {
        dir: 'build',
        format: 'esm',
    },
    plugins: [ css(), babel({exclude: 'node_modules/**' }) ],
    external: []
};