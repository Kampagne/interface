// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import makeAttractionsImporter from 'attractions/importer.js';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				importer: makeAttractionsImporter({
					themeFile: 'static/theme.scss',
				}),
				includePaths: ['./static/'],
			},
		}),
	],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},
};

export default config;
