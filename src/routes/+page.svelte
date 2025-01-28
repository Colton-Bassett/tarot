<svelte:options runes />

<script lang="ts">
	import { flip } from 'svelte/animate';
	import { goto } from '$app/navigation';
	import TypeWriter from 'svelte-typewriter';
	import TarotCard from './TarotCard.svelte';
	import type { ReadingType, CardBackType, OrientationType } from '$lib/constants';
	import { shuffleCards } from '$lib/utils';
	import type { Card } from '$lib/types';
	import { deck } from '$lib/deck';

	let tarotDeck = $state(deck);
	let selectedCard: Card | null = $state(null);
	let showCardFront = $state(true);
	let isReadingVisible = $state(false);
	let typeWriterOn = $state(true);

	let aiReadingAvailable = $state(false);

	let readingType: ReadingType = $state('general');
	let cardBackType: CardBackType = $state('plus');
	let orientationType: OrientationType = $state('both');

	function handleCardSelect(card: Card) {
		if (selectedCard?.id === card.id && isReadingVisible === true) {
			console.log('toggling typewriter');
			typeWriterOn = false;
		} else if (selectedCard?.id === card.id) {
			console.log('here is card');
			isReadingVisible = true;
			showCardFront = true;
			return;
		}
		console.log('selectedCard = card');
		selectedCard = card;
	}

	function pickCard() {
		showCardFront = false;
		tarotDeck = shuffleCards(tarotDeck, orientationType);
	}

	function resetDeck() {
		tarotDeck = deck;
		showCardFront = true;
	}

	function closeCard() {
		selectedCard = null;
		isReadingVisible = false;
		typeWriterOn = true;
	}

	function updateOrientationType() {
		const types = ['both', 'upright', 'reversed'] as const;
		const currentIndex = types.indexOf(orientationType);
		orientationType = types[(currentIndex + 1) % types.length];
		shuffleCards(tarotDeck, orientationType);
	}

	// keyboard shortcuts handler
	function handleKeyPress(event: KeyboardEvent) {
		const shortcuts: Record<string, () => void> = {
			Escape: () => {
				closeCard();
			},
			a: () => goto('/about'),
			g: () => window.open('https://github.com/sveltejs/kit', '_blank'),
			h: () => goto('/'),
			p: pickCard,
			r: resetDeck,
			s: () => alert('settings!'),
			x: () => {
				tarotDeck = shuffleCards(tarotDeck, orientationType);
			}
		};

		shortcuts[event.key]?.();
	}
</script>

<svelte:head>
	<title>cb.tarot - home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window onkeydown={handleKeyPress} />

<div class="flex flex-col items-center justify-center">
	<div class="min-h-24">
		<TypeWriter mode="cascade">
			<div class="mb-4 flex flex-col items-center justify-center">
				<h1 class="mb-4 text-center text-3xl font-bold">Welcome to cb.tarot</h1>
				<p class="text-center text-[#6d6d6d]">
					Choose a card and get insight. A simple, focused reading for today.
				</p>
			</div>
		</TypeWriter>
	</div>

	<div class="flex min-h-[972px] max-w-5xl flex-col-reverse lg:flex-col">
		<div class="grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-[repeat(10,_1fr)]">
			{#each tarotDeck as card (card)}
				<div animate:flip={{ duration: 500 }}>
					<TarotCard
						{card}
						showFront={showCardFront}
						isSelected={selectedCard?.id === card.id}
						{isReadingVisible}
						{typeWriterOn}
						{aiReadingAvailable}
						onSelect={handleCardSelect}
						onClose={closeCard}
					/>
				</div>
			{/each}
		</div>

		<div class="my-6 max-w-5xl">
			<div class="mb-4 flex flex-row-reverse justify-center gap-8 md:justify-start">
				<button onclick={updateOrientationType} class="settingsButton min-w-12 underline-offset-2">
					{orientationType === 'both' ? '↑ / ↓' : orientationType === 'upright' ? '↑' : '↓'}
				</button>
				<button
					onclick={() => {
						const types = ['general', 'romance', 'finance', 'career'] as const;
						const currentIndex = types.indexOf(readingType);
						readingType = types[(currentIndex + 1) % types.length];
					}}
					class="settingsButton min-w-[4.25rem] underline-offset-2"
				>
					{readingType}
				</button>
				<button
					onclick={() => {
						const types = ['plus', 'minus', 'ohs'] as const;
						const currentIndex = types.indexOf(cardBackType);
						cardBackType = types[(currentIndex + 1) % types.length];
					}}
					class="settingsButton min-w-12 underline-offset-2"
				>
					{cardBackType}
				</button>
			</div>
			<div class="flex flex-col justify-between md:flex-row">
				<div class="flex justify-between">
					<button
						class="button px-6 py-1"
						onclick={() => {
							tarotDeck = shuffleCards(tarotDeck, orientationType);
						}}
					>
						[x] shuffle
					</button>
					<button class="button px-6 py-1 lowercase" onclick={resetDeck}> [r] reset </button>
				</div>
				<button class="button px-6 py-1 lowercase" onclick={pickCard}> [p] pick </button>
			</div>
		</div>
	</div>
	<div class="hidden" class:overlay={selectedCard !== null} onclick={closeCard}></div>
</div>

<style>
	.settingsButton {
		font-family: 'IBM Plex Mono', serif;
	}

	.settingsButton:hover {
		text-decoration: underline;
	}

	.button {
		border: 1px solid #dedede;
		/* font-family: 'Inter Tight', sans-serif; */
		font-family: 'IBM Plex Mono', serif;
		text-transform: lowercase;
	}

	.button:hover {
		border: 1px solid rgb(107 114 128 / var(--tw-border-opacity, 1));
	}

	.overlay {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(5px);
	}
</style>
