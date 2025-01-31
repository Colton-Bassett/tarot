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
		updateCardbackType,
		updateAiReadingEnabled
	}: {
		aiReadingEnabled: boolean;
		orientationType: OrientationType;
		readingType: ReadingType;
		cardBackType: CardBackType;
		updateOrientationType(): void;
		updateReadingType(): void;
		updateCardbackType(): void;
		updateAiReadingEnabled(): void;
	} = $props();
</script>

<div class="mb-4 flex flex-row-reverse justify-center gap-8 md:justify-start">
	<TooltipWrapper
		content={orientationType === 'both'
			? 'card orientation: mixed'
			: orientationType === 'upright'
				? 'card orientation: upright'
				: 'card orientation: reversed'}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="settingsButton min-w-12 underline-offset-2" onclick={updateOrientationType}>
			{orientationType === 'both' ? '↑ / ↓' : orientationType === 'upright' ? '↑' : '↓'}
		</div>
	</TooltipWrapper>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<TooltipWrapper content="Reading type">
		<div
			class="settingsButton min-w-[4.25rem] underline-offset-2"
			class:disabled={!aiReadingEnabled}
			onclick={updateReadingType}
		>
			{readingType}
		</div>
	</TooltipWrapper>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<TooltipWrapper content="Cardback style">
		<div class="settingsButton min-w-[58px] underline-offset-2" onclick={updateCardbackType}>
			{cardBackType}
		</div>
	</TooltipWrapper>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<TooltipWrapper content={aiReadingEnabled ? 'AI reading: on' : 'AI reading: off'}>
		<div
			class="aiAvailableButton flex h-7 min-w-7 items-center justify-center rounded-2xl border border-[#dedede] text-xl text-[#dedede] underline-offset-2"
			class:aiOn={aiReadingEnabled}
			onclick={updateAiReadingEnabled}
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

	.disabled {
		color: #dedede;
		pointer-events: none;
		opacity: 0.5;
	}
</style>
