<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	let { children } = $props();
</script>

<!-- {@render children()} -->

<div class="app">
	<Header />
	<main class="min-h-screen p-8">
		{@render children()}
	</main>
	<Footer />
</div>
