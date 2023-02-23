/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$styles': resolve("./src/styles/"),
			'$components': resolve("./src/components/"),
		}
	},
	preprocess: [
		sveltePreprocess({
			scss: {
				includePaths: ['./src/styles', './node_modules'],
				prependData: `@import "./src/styles/_imports.scss";`
			},
			postcss: {
				plugins: [
					autoprefixer(),
				]
			}
		}),
	]
};

export default config;