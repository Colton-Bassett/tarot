<script lang="ts">
	import type { CardBackType } from '$lib/constants';

	let {
		isSelected = false,
		cardBackType
	}: {
		isSelected: boolean;
		cardBackType: CardBackType;
	} = $props();
</script>

<div class="cardBg" class:bgBorder={isSelected}>
	{#each Array(9) as _, index}
		<div class="flex items-center justify-center">
			{#if cardBackType === 'plus'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class={isSelected ? 'size-6' : 'size-2'}
					style="transform: rotate({index * 45}deg);"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
			{/if}
			{#if cardBackType === 'hearts'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class={isSelected ? 'size-6' : 'size-2'}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>
			{/if}
			{#if cardBackType === 'stars'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class={isSelected ? 'size-6' : 'size-2'}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
					/>
				</svg>
			{/if}
		</div>
	{/each}
</div>

<style>
	.cardBg {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		height: 100%;
		width: 100%;

		border-radius: 10px;
		pointer-events: none;
	}

	.bgBorder {
		border: 1px solid #dedede;
	}
</style>
