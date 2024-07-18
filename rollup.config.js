import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from 'tailwindcss'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    external: ['react', 'react-dom', 'lucide-react'],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        postcss({
            plugins: [autoprefixer(), tailwindcss()],
            extract: 'styles.css',
        }),
    ],
}
