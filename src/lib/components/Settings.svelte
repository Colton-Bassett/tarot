<script lang="ts">
	import TooltipWrapper from './TooltipWrapper.svelte';
	import type { CardBackType, ReadingType, OrientationType } from '$lib/constants';
	let {
		aiReadingEnabled,
		orientationType,
		readingType,
		cardBackType,
		updateOrientationType,
		updateReadingType,
		updateCardbackType
	}: {
		aiReadingEnabled: boolean;
		orientationType: OrientationType;
		readingType: ReadingType;
		cardBackType: CardBackType;
		updateOrientationType(): void;
		updateReadingType(): void;
		updateCardbackType(): void;
	} = $props();
</script>

<div class="mb-4 flex flex-row-reverse justify-center gap-8 md:justify-start">
	<TooltipWrapper content="Card orientation">
		<div
			role="button"
			tabindex="0"
			class="settingsButton min-w-12 underline-offset-2"
			onclick={updateOrientationType}
			onkeydown={(e) => {}}
		>
			{orientationType === 'both' ? '↑ / ↓' : orientationType === 'upright' ? '↑' : '↓'}
		</div>
	</TooltipWrapper>
	<TooltipWrapper content="Reading type">
		<div
			role="button"
			tabindex="0"
			class="settingsButton min-w-[4.25rem] underline-offset-2"
			onclick={updateReadingType}
			onkeydown={(e) => {}}
		>
			{readingType}
		</div>
	</TooltipWrapper>
	<TooltipWrapper content="Cardback style">
		<div
			role="button"
			tabindex="0"
			class="settingsButton min-w-12 underline-offset-2"
			onclick={updateCardbackType}
			onkeydown={(e) => {}}
		>
			{cardBackType}
		</div>
	</TooltipWrapper>
	<TooltipWrapper content={aiReadingEnabled ? 'AI reading: on' : 'AI reading: off'}>
		<div
			role="button"
			tabindex="0"
			class="aiAvailableButton min-w-8 rounded-2xl border border-[#dedede] text-xl text-[#dedede] underline-offset-2"
			class:aiOn={aiReadingEnabled}
			onclick={() => {
				aiReadingEnabled = !aiReadingEnabled;
			}}
			onkeydown={(e) => {}}
		>
			✦
		</div>
	</TooltipWrapper>
</div>

<style>
	.settingsButton {
		font-family: 'IBM Plex Mono', serif;
	}

	.settingsButton:hover {
		text-decoration: underline;
	}

	.aiAvailableButton {
		font-family: 'IBM Plex Mono', serif;
	}

	.aiOn {
		color: black;
		border-color: black;
	}
</style>
