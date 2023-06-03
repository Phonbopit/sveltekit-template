import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			hot: !process.env.VITEST
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts,svelte,jsx,tsx}'],
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'c8'
		}
	}
});
