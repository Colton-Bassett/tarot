<script lang="ts">
	import { fade } from 'svelte/transition';
	import TypeWriter from 'svelte-typewriter';
	import CardBack from './CardBack.svelte';
	import { formatTextIntoParagraphs } from '$lib/utils';
	import { getKeywords } from '../utils';
	import type { Card } from '../types';
	import type { ReadingType } from '$lib/constants';

	let response = $state('');

	let {
		card,
		showFront,
		isSelected,
		isReadingVisible,
		typeWriterOn,
		aiReadingEnabled,
		readingType,
		onSelect,
		onClose
	}: {
		card: Card;
		showFront: boolean;
		isSelected: boolean;
		isReadingVisible: boolean;
		typeWriterOn: boolean;
		aiReadingEnabled: boolean;
		readingType: ReadingType;
		onSelect: (card: Card) => void;
		onClose: () => void;
	} = $props();

	let descriptionText = $derived(
		aiReadingEnabled
			? response
			: card.isUpright
				? card.description.upright
				: card.description.reversed
	);

	async function fetchGPTReading(card: Card, readingType: ReadingType) {
		const name = card.name;
		const orientation = card.isUpright ? 'upright' : 'reversed';

		try {
			const res = await fetch('/api/gpt', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					prompt:
						'Give me a one card ' +
						readingType +
						' tarot card reading <120 words for The ' +
						name +
						', ' +
						orientation
				})
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || 'Something went wrong');
			}

			const data = await res.json();
			response = data.message;
			console.log(response);
		} catch (error: any) {
			response = `Error: ${error.message}`;
		}
	}

	// async function fetchGPTReadingMock(card: Card, simulateError: boolean = false) {
	// 	if (aiReadingEnabled) {
	// 		const name = card.name;
	// 		const orientation = card.isUpright ? 'upright' : 'reversed';

	// 		// Simulate a 2-second delay
	// 		const mockResponse = `The ${name} ${orientation} represents emotional depth, intuition, and compassion.
	// 	In this position, she signifies a nurturing and caring energy, encouraging you to tap into your feelings and trust your intuition.
	// 	This card suggests that you may be called to support others, offering empathy and understanding.
	// 	It’s also a reminder to take care of your own emotional well-being and to create a harmonious environment around you.
	// 	The ${name} invites you to embrace your sensitivity and use it as a strength, fostering connections with others
	// 	and allowing your intuitive insights to guide you. Overall, it’s a positive sign of emotional fulfillment and the importance of self-care.`;

	// 		return new Promise<string>((resolve, reject) => {
	// 			setTimeout(() => {
	// 				if (simulateError) {
	// 					// Simulating an error condition
	// 					response = 'Mock Error: Something went wrong with the GPT request.';
	// 					reject(new Error('Mock Error: Something went wrong with the GPT request.'));
	// 				} else {
	// 					// Simulating a successful response
	// 					response = mockResponse;
	// 					resolve(mockResponse); // Return the mock response after a 2-second delay
	// 				}
	// 			}, 2000);
	// 			console.log(response);
	// 		});
	// 	}
	// }
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
				<span class="flex w-10 items-center justify-center">{card.isUpright ? '↑' : '↓'} </span>
			{/if}
			<span class="w-full text-center" class:reversed={!card.isUpright && showFront}>
				{card.name}
			</span>
			{#if isSelected}
				<button
					class="closeButton flex w-10 items-center justify-center"
					onclick={(e) => {
						e.stopPropagation();
						// onClose();
						fetchGPTReading(card, readingType);
					}}>x</button
				>
			{/if}
		</div>
	{:else}
		<CardBack {isSelected} />
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
			{#if typeWriterOn}
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
