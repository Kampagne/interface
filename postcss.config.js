// const purgecss = require("@fullhuman/postcss-purgecss")({
//     content: ["./src/**/*.html", "./src/**/*.svelte"],

//     whitelistPatterns: [/svelte-/],

//     defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// })

// const dev = process.env.ROLLUP_WATCH

// module.exports = {
//     plugins: [require("tailwindcss"), ...(!dev ? [purgecss] : [])],
// }
import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.cjs'
import autoprefixer from 'autoprefixer'

export default {
  plugins:[tailwind(tailwindConfig),autoprefixer]
}