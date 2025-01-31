<script lang="ts">
	import { fade } from 'svelte/transition';
	import TypeWriter from 'svelte-typewriter';
	import { formatTextIntoParagraphs } from '$lib/utils';
	import { getKeywords } from '$lib/utils';
	import type { Card } from '$lib/types';
	import type { CardBackType, ReadingType } from '$lib/constants';
	import CardBack from '$lib/components/CardBack.svelte';

	interface Props {
		card: Card;
		cardBackType: CardBackType;
		showFront: boolean;
		isSelected: boolean;
		isReadingVisible: boolean;
		typeWriterOn: boolean;
		aiReadingEnabled: boolean;
		readingType: ReadingType;
		onSelect: (card: Card) => void;
		onClose: () => void;
	}

	let response = $state('');
	let isLoading = $state(false);
	let {
		card,
		cardBackType,
		showFront,
		isSelected,
		isReadingVisible,
		typeWriterOn,
		aiReadingEnabled,
		readingType,
		onSelect,
		onClose
	}: Props = $props();

	let descriptionText = $derived(
		aiReadingEnabled
			? response
			: card.isUpright
				? card.description.upright
				: card.description.reversed
	);

	async function fetchGPTReading(card: Card, readingType: ReadingType) {
		isLoading = true;

		const payload = {
			prompt: `Give me a one card ${readingType} tarot card reading <120 words for The ${card.name}, ${
				card.isUpright ? 'upright' : 'reversed'
			}`
		};

		try {
			const res = await fetch('/api/gpt', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || 'Failed to fetch reading');
			}

			const data = await res.json();
			response = data.message;
			console.log(response);
		} catch (error) {
			// show default text
			response = card.isUpright ? card.description.upright : card.description.reversed;
		} finally {
			isLoading = false;
		}
	}

	// async function fetchGPTReadingMock(card: Card, readingType: ReadingType) {
	// 	isLoading = true;

	// 	const payload = {
	// 		prompt: `Give me a one card ${readingType} tarot card reading <120 words for The ${card.name}, ${
	// 			card.isUpright ? 'upright' : 'reversed'
	// 		}`
	// 	};

	// 	// Simulate the 2-second delay with a Promise
	// 	try {
	// 		await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

	// 		// Simulate an error response
	// 		throw new Error('Failed to fetch reading');
	// 	} catch (error) {
	// 		response = card.isUpright ? card.description.upright : card.description.reversed;
	// 		console.log(response);
	// 	} finally {
	// 		isLoading = false;
	// 	}
	// }

	$effect(() => {
		// fetch from gpt when selecting card + aiReadingEnabled
		if (isSelected && isReadingVisible && aiReadingEnabled) {
			fetchGPTReading(card, readingType);
		}
	});
</script>

<div
	class="card"
	class:center={isSelected}
	class:floatAnimation={isSelected && !isReadingVisible}
	class:cursor={isSelected && isReadingVisible}
	onclick={() => onSelect(card)}
	onkeydown={() => {}}
	tabindex="0"
	role="button"
	aria-label="Tarot card"
>
	{#if showFront}
		<div class="cardHeader" transition:fade={{ duration: showFront ? 500 : 0 }}>
			{#if isSelected}
				<span class="bold flex w-10 items-center justify-center"
					>{card.isUpright ? '↑' : '↓'}
				</span>
			{/if}
			<span
				class="w-full text-center"
				class:reversed={!card.isUpright && showFront}
				class:bold={isSelected}
			>
				{card.name}
			</span>
			{#if isSelected}
				<button
					class="closeButton flex w-10 items-center justify-center font-bold"
					onclick={(e) => {
						e.stopPropagation();
						onClose();
					}}>x</button
				>
			{/if}
		</div>
	{:else}
		<CardBack {isSelected} {cardBackType} />
	{/if}

	{#if isSelected && isReadingVisible}
		<div class="mb-4 border-b">
			<div class=" mb-4 flex w-full items-center justify-center gap-2 text-center">
				{#each getKeywords(card) as keyword}
					<span class="mb-0">{keyword}</span>
				{/each}
			</div>
		</div>
		<div class="flex-col items-center justify-center text-center">
			{#if isLoading}
				<div class="animate-pulse text-gray-500">Loading your personalized reading...</div>
			{:else if typeWriterOn}
				{#key response}
					<TypeWriter mode="cascade">
						{@html formatTextIntoParagraphs(descriptionText)}
					</TypeWriter>
				{/key}
			{:else}
				{@html formatTextIntoParagraphs(descriptionText)}
			{/if}
		</div>
	{/if}
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1;
		min-width: 90px;
		max-width: 90px;
		min-height: 90px;
		max-height: 90px;
		box-sizing: border-box;
		overflow: auto;
		border: 1px solid #dedede;
		border-radius: 2px;
		background-color: white;
		font-family: 'Inter', sans-serif;
		font-size: 0.875em;
		font-weight: 300;
		transition: transform 0.3s ease-in-out;
		cursor: pointer;
		z-index: 10;
	}

	.card:hover {
		border: 1px solid black;
	}

	.cardHeader {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.bold {
		font-weight: bold;
	}

	.closeButton:hover {
		text-decoration: underline;
	}

	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		min-width: 90%;
		min-height: 550px;
		font-size: 1em;
		padding: 1.5rem;
		justify-content: flex-start;
		transition: all 0.3s ease-in-out;
		border-color: black;
	}

	.center .cardHeader {
		margin-bottom: 1rem;
	}
	.cursor {
		cursor: default;
	}

	.floatAnimation {
		animation: float 2s ease-in-out infinite;
		transform-origin: center center;
	}

	.reversed::after {
		content: '*';
	}

	@media (min-width: 768px) {
		.center {
			min-width: 450px;
		}
	}

	@keyframes float {
		0% {
			transform: translateY(-50%, -50%);
		}
		50% {
			transform: translate(-50%, calc(-50% - 12px));
		}
		100% {
			transform: translateY(-50%, -50%);
		}
	}
</style>
