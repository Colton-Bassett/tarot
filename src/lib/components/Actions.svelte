<script lang="ts">
	let {
		shuffle,
		reset,
		pick
	}: {
		shuffle(): void;
		reset(): void;
		pick(): void;
	} = $props();
</script>

<div class="flex flex-col justify-between md:flex-row">
	<div class="flex justify-between">
		<button class="button px-6 py-1" onclick={shuffle}> [x] shuffle </button>
		<button class="button px-6 py-1 lowercase" onclick={reset}> [r] reset </button>
	</div>
	<button class="button px-6 py-1 lowercase" onclick={pick}> [p] pick </button>
</div>

<style>
	.button {
		border: 1px solid #dedede;
		font-family: 'IBM Plex Mono', serif;
		text-transform: lowercase;
	}

	.button:hover {
		border: 1px solid rgb(107 114 128 / var(--tw-border-opacity, 1));
	}
</style>
