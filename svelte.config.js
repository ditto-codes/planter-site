/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import { getHighlighter } from 'shiki';

const shiki = await getHighlighter({
	theme: 'css-variables',
	langs: ['shell', 'js', 'html', 'svelte', 'css', 'scss', 'json']
});	

function highlighter(code, lang) {
	return `{@html \`${shiki.codeToHtml(code, { lang })}\`}`;
}

const config = {
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		alias: {
			'$styles': './src/styles/',
			'$components': './src/components/',
			'$content': './src/content/',
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