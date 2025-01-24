<script lang="ts">
	import { goto } from '$app/navigation';

	// keyboard shortcuts handler
	function handleKeyPress(event: KeyboardEvent) {
		const shortcuts: Record<string, () => void> = {
			d: () => goto('/disclaimer'),
			g: () => window.open('https://github.com/sveltejs/kit', '_blank'),
			h: () => goto('/'),

			s: () => alert('settings!')
		};

		shortcuts[event.key]?.();
	}
</script>

<svelte:window onkeydown={handleKeyPress} />

<svelte:head>
	<title>cb.tarot - about</title>
	<meta name="description" content="about" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://svelte.dev/docs/kit">SvelteKit</a> app. You can make your own by typing
		the following into your command line and following the prompts:
	</p>

	<pre>npx sv create</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The Sverdle page illustrates SvelteKit's data loading and form handling. Try using it with
		JavaScript disabled!
	</p>
</div>
