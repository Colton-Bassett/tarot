<svelte:options runes />

<script lang="ts">
	import { flip } from 'svelte/animate';
	import { goto } from '$app/navigation';
	import TypeWriter from 'svelte-typewriter';
	import TarotCard from '$lib/components/TarotCard.svelte';
	import type { ReadingType, CardBackType, OrientationType } from '$lib/constants';
	import { shuffleCards } from '$lib/utils';
	import type { Card } from '$lib/types';
	import { deck } from '$lib/deck';
	import Settings from '$lib/components/Settings.svelte';
	import Actions from '$lib/components/Actions.svelte';

	// state
	const initialState = {
		tarotDeck: deck,
		selectedCard: null as Card | null,
		showCardFront: true,
		isReadingVisible: false,
		typeWriterOn: true,
		aiReadingEnabled: false,
		readingType: 'general' as ReadingType,
		cardBackType: 'plus' as CardBackType,
		orientationType: 'both' as OrientationType
	};

	let {
		tarotDeck,
		selectedCard,
		showCardFront,
		isReadingVisible,
		typeWriterOn,
		aiReadingEnabled,
		readingType,
		cardBackType,
		orientationType
	} = $state(initialState);

	// card handling
	function handleCardSelect(card: Card) {
		if (selectedCard?.id === card.id) {
			if (isReadingVisible) {
				//skip typewriter
				typeWriterOn = false;
			} else {
				// show reading
				isReadingVisible = true;
				showCardFront = true;
			}
			return;
		}
		selectedCard = card;
	}

	// deck operations
	const deckOperations = {
		shuffle: () => {
			tarotDeck = shuffleCards(tarotDeck, orientationType);
		},
		pick: () => {
			showCardFront = false;
			deckOperations.shuffle();
		},
		reset: () => {
			tarotDeck = deck;
			showCardFront = true;
		}
	};

	function closeCard() {
		selectedCard = null;
		isReadingVisible = false;
		typeWriterOn = true;
	}

	// settings updates
	function cycleThrough<T>(current: T, options: readonly T[]): T {
		const currentIndex = options.indexOf(current);
		return options[(currentIndex + 1) % options.length];
	}

	const settingsUpdaters = {
		orientationType: () => {
			orientationType = cycleThrough(orientationType, ['both', 'upright', 'reversed'] as const);
			shuffleCards(tarotDeck, orientationType);
		},
		readingType: () => {
			readingType = cycleThrough(readingType, ['general', 'romance', 'finance', 'career'] as const);
		},
		cardBackType: () => {
			cardBackType = cycleThrough(cardBackType, ['plus', 'minus', 'ohs'] as const);
		},
		aiReadingEnabled: () => {
			aiReadingEnabled = !aiReadingEnabled;
			if (!aiReadingEnabled) {
				readingType = 'general';
			}
		}
	};

	// keyboard shortcuts
	const shortcuts: Record<string, () => void> = {
		Escape: closeCard,
		a: () => goto('/about'),
		g: () => window.open('https://github.com/sveltejs/kit', '_blank'),
		h: () => goto('/'),
		p: deckOperations.pick,
		r: deckOperations.reset,
		s: () => alert('settings!'),
		x: deckOperations.shuffle
	};

	function handleKeyPress(event: KeyboardEvent) {
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
						{aiReadingEnabled}
						{readingType}
						onSelect={handleCardSelect}
						onClose={closeCard}
					/>
				</div>
			{/each}
		</div>

		<div class="my-6 max-w-5xl">
			<Settings
				{aiReadingEnabled}
				{orientationType}
				{readingType}
				{cardBackType}
				updateOrientationType={settingsUpdaters.orientationType}
				updateReadingType={settingsUpdaters.readingType}
				updateCardbackType={settingsUpdaters.cardBackType}
				updateAiReadingEnabled={settingsUpdaters.aiReadingEnabled}
			></Settings>
			<Actions
				shuffle={deckOperations.shuffle}
				reset={deckOperations.reset}
				pick={deckOperations.pick}
			></Actions>
		</div>
	</div>
	<div
		role="button"
		tabindex="-1"
		class="hidden cursor-default"
		class:overlay={selectedCard !== null}
		onclick={closeCard}
		onkeydown={(e) => {}}
	></div>
</div>

<style>
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
