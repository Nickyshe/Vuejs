// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: 
			[
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
				{ icon: 'twitter', label: 'X', href: 'https://x.com/vuejs' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/vue' }
				
,			
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/quickstart' },
						{ slug: 'getting-started/creating-a-vue-application' },
						{ slug: 'getting-started/components-basics' },
				
					
						
					],
				},
				{
					label: 'Core Concepts',
					// Each item here is one entry in the navigation menu.
					items: [
						{ slug: 'core-concepts/template-syntax' },
						{ slug: 'core-concepts/reactivity-fundamentals' },
						{ slug: 'core-concepts/computed-properties' },
						{ slug: 'core-concepts/class-and-style' },

						{ slug: 'core-concepts/conditional-rendering' },
						{ slug: 'core-concepts/list-rendering' },
						{ slug: 'core-concepts/event-handling' },
						{ slug: 'core-concepts/form-input-binding' },
						{ slug: 'core-concepts/watchers' },
						{ slug: 'core-concepts/template-refs' },
						
						
						
						
						
					],
					
				},
				{
				label: 'Building Applications',
				collapsed: true,
				items:[
					{
						label: 'Components',
						items:[
							{slug: 'building-applications/components/registration'},
							{slug: 'building-applications/components/prop'},
							{slug: 'building-applications/components/events'},
							{slug: 'building-applications/components/v-model'},
							{slug: 'building-applications/components/fallthrough-attributes'},
							{slug: 'building-applications/components/slots'},
							{slug: 'building-applications/components/provide-inject'},
							{slug: 'building-applications/components/async-components'},
						]
					},

					{
						label: 'Reusable Components',
						items:[
							{slug: 'building-applications/reusable-components/composable'},
				
						]
					}

					
					
				]

				},


				
				{
					label: 'Advance',
					autogenerate: { directory: 'advance-topics' }
				},


			],
		}),
	],
});
