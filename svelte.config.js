/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

import { getHighlighter } from 'shiki';
const shikiHighlighter = await getHighlighter({
	theme: 'nord',
	langs: ['shell', 'js', 'html', 'svelte']
});
function highlighter(code, lang) {
	console.log(lang)
	return `<pre><code>` + shikiHighlighter.codeToHtml(code, { lang }) + `</code></pre>`;
}

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
		mdsvex({ 
			layout: './src/components/mdsvex/layout.svelte',
			extensions: ['.md', '.svx'],
			highlight: {
				highlighter
			}
		}),
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