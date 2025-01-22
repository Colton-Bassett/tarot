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
	let isReadingVisible = $state(true);
	let typeWriterOn = $state(true);

	let readingType: ReadingType = $state('general');
	let cardBackType: CardBackType = $state('plus');
	let uprightType: OrientationType = $state('both');

	function handleCardSelect(card: Card) {
		if (selectedCard?.id === card.id) {
			isReadingVisible = true;
			showCardFront = true;
			return;
		}
		selectedCard = card;
	}

	function pickCard() {
		showCardFront = false;
		tarotDeck = shuffleCards(tarotDeck);
	}

	function resetDeck() {
		tarotDeck = deck;
		showCardFront = true;
	}

	// keyboard shortcuts handler
	function handleKeyPress(event: KeyboardEvent) {
		const shortcuts: Record<string, () => void> = {
			Escape: () => {
				selectedCard = null;
				isReadingVisible = false;
			},
			d: () => goto('/disclaimer'),
			g: () => window.open('https://github.com/sveltejs/kit', '_blank'),
			h: () => goto('/'),
			p: pickCard,
			r: resetDeck,
			s: () => alert('settings!'),
			x: () => {
				tarotDeck = shuffleCards(tarotDeck);
			}
		};

		shortcuts[event.key]?.();
	}

	function handleClickOutside(event: MouseEvent) {
		if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('card')) {
			selectedCard = null;
			isReadingVisible = false;
		}
	}
</script>

<svelte:head>
	<title>cb.tarot - home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window on:keydown={handleKeyPress} on:click={handleClickOutside} />

<div class="flex flex-col items-center justify-center">
	<div class="min-h-20">
		<TypeWriter mode="cascade">
			<div class="mb-4 flex flex-col items-center justify-center">
				<h1 class="mb-4">Welcome to cb.tarot</h1>
				<p class="text-center">
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
						onSelect={handleCardSelect}
					/>
				</div>
			{/each}
		</div>

		<div class="my-6 max-w-5xl">
			<div class="mb-4 flex flex-row-reverse gap-8">
				<button
					onclick={() => {
						const types = ['both', 'upright', 'reversed'] as const;
						const currentIndex = types.indexOf(uprightType);
						uprightType = types[(currentIndex + 1) % types.length];
					}}
				>
					{uprightType === 'both' ? '↑ / ↓' : uprightType === 'upright' ? '↑' : '↓'}
				</button>
				<button
					onclick={() => {
						const types = ['general', 'romance', 'finance', 'career'] as const;
						const currentIndex = types.indexOf(readingType);
						readingType = types[(currentIndex + 1) % types.length];
					}}
				>
					{readingType}
				</button>
				<button
					onclick={() => {
						const types = ['plus', 'minus', 'ohs'] as const;
						const currentIndex = types.indexOf(cardBackType);
						cardBackType = types[(currentIndex + 1) % types.length];
					}}
				>
					{cardBackType}
				</button>
			</div>
			<div class="flex flex-col justify-between md:flex-row">
				<div class="flex justify-between">
					<button
						class="button px-6 py-1"
						onclick={() => {
							tarotDeck = shuffleCards(tarotDeck);
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
	<div class="hidden" class:overlay={selectedCard !== null}></div>
</div>

<style>
	.button {
		border: 1px solid #dedede;
		font-family: 'Inter Tight', sans-serif;
		text-transform: lowercase;
	}

	.button:hover {
		border: 1px solid rgb(107 114 128 / var(--tw-border-opacity, 1));
		backdrop-filter: blur(10px);
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
