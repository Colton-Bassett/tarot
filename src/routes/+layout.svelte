<script lang="ts">
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	let { children } = $props();
</script>

<div class="app text-tra">
	<Header />
	<main class="min-h-screen p-8 pt-4 lowercase">
		{@render children()}
	</main>
	<Footer />
</div>
