<script lang="ts">
	import type { Card } from '$lib/types';
	import type { OrientationType } from '$lib/constants';

	let {
		shuffleDeck,
		resetDeck,
		pickCard
	}: {
		shuffleDeck(): void;
		resetDeck(): void;
		pickCard(): void;
	} = $props();
</script>

<div class="flex flex-col justify-between md:flex-row">
	<div class="flex justify-between">
		<button class="button px-6 py-1" onclick={shuffleDeck}> [x] shuffle </button>
		<button class="button px-6 py-1 lowercase" onclick={resetDeck}> [r] reset </button>
	</div>
	<button class="button px-6 py-1 lowercase" onclick={pickCard}> [p] pick </button>
</div>

<style>
	.button {
		border: 1px solid #dedede;
		/* font-family: 'Inter Tight', sans-serif; */
		font-family: 'IBM Plex Mono', serif;
		text-transform: lowercase;
	}

	.button:hover {
		border: 1px solid rgb(107 114 128 / var(--tw-border-opacity, 1));
	}
</style>
