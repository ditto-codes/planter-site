/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

const config = {
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		alias: {
			'$styles': './src/styles/',
			'$components': './src/components/',
		}
	},
	preprocess: [
		mdsvex({ extensions: ['.md', '.svx'] }),
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