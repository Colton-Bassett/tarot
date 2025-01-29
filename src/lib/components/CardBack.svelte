<script lang="ts">
	let {
		isSelected = false
	}: {
		isSelected: boolean;
	} = $props();
</script>

<div class="cardBg" class:bgBorder={isSelected}>
	{#each Array(9) as _, index}
		<div class="flex items-center justify-center">
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
		border-radius: 2px;
		pointer-events: none;
	}

	.bgBorder {
		border: 1px solid #dedede;
	}
</style>
