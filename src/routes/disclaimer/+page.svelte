<svelte:options runes />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { createBubbler } from 'svelte/legacy';
	// svelte:window events

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'd') {
			goto('/disclaimer');
		}
		if (event.key === 'g') {
			window.open('https://github.com/sveltejs/kit', '_blank');
		}
		if (event.key === 'h') {
			goto('/');
		}
		if (event.key === 's') {
			goto('/');
			alert('settings!');
		}
	}
</script>

<svelte:window onkeydown={handleKeyPress} />

<svelte:head>
	<title>cb.tarot - disclaimer</title>
	<meta name="description" content="disclaimer" />
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
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
