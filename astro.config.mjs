import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	output: 'static',
	outDir: './dist',
	integrations: [
		starlight({
			title: 'Rock',
			social: {
				github: 'https://github.com/nickk-dv/rock',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Introduction', link: 'overview/introduction' },
						{ label: 'Lexical elements', link: 'overview/lexical_elements' },
						{ label: 'Module system', link: 'overview/module_system' },
						{ label: 'Type system', link: 'overview/type_system' },
						{ label: 'Attributes', link: 'overview/attributes' },
						{ label: 'Commands', link: 'overview/commands' },
						{ label: 'Manifest', link: 'overview/manifest' },
					]
				},
			],
		}),
	],
});
