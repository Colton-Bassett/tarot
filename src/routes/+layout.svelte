<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	let { children } = $props();
</script>

<div class="app text-tra">
	<Header />
	<main class="min-h-screen p-8 lowercase">
		{@render children()}
	</main>
	<Footer />
</div>
