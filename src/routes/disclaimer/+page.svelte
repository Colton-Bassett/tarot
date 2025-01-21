<svelte:options runes />

<script lang="ts">
	import { goto } from '$app/navigation';
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

	let prompt = $state<string>('');
	let response = $state<string>('');
	let loading = $state<boolean>(false);

	async function fetchGPTResponse() {
		if (!prompt.trim()) {
			alert('Please enter a prompt.');
			return;
		}

		loading = true;
		try {
			const res = await fetch('/api/gpt', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ prompt })
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || 'Something went wrong.');
			}

			const data = await res.json();
			response = data.message;
		} catch (error: any) {
			response = `Error: ${error.message}`;
		} finally {
			loading = false;
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

	<div class="flex max-w-96 flex-col">
		<h1 class="my-4 font-bold uppercase">Ask GPT-4</h1>
		<textarea
			class="rounded-md border"
			bind:value={prompt}
			placeholder="Type your question here..."
			rows="4"
			cols="50"
		></textarea>

		<button class="mt-4 rounded-md border p-4" onclick={fetchGPTResponse} disabled={loading}>
			{loading ? 'Thinking...' : 'Ask GPT-4'}
		</button>

		{#if response}
			<h2>Response:</h2>
			<p>{response}</p>
		{/if}
	</div>
</div>
