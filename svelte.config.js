import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	extensions: ['.svelte', '.svx'],
	preprocess: mdsvex()
};

export default config;
