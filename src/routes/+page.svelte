<svelte:options runes />

<script lang="ts">
	import { flip } from 'svelte/animate';
	import { goto } from '$app/navigation';
	import { deck, type Card } from '$lib/deck';
	import { formatTextIntoParagraphs } from '$lib/helpers';
	import TypeWriter from 'svelte-typewriter';

	let tarotDeck = $state(deck);

	function shuffleDeck() {
		// shuffle
		tarotDeck = tarotDeck.sort(() => (Math.random() > 0.5 ? 1 : -1));

		// isUpright
		tarotDeck.forEach((card) => {
			card.isUpright = Math.random() < 0.5;
		});
	}

	let showCardFront: boolean = $state(true);
	function toggleFlip() {
		showCardFront = !showCardFront;
	}

	let selectedCard: Card | null = $state(null);
	let pickPreviewCard: Card | null = $state(null);
	let isReadingVisible: boolean | undefined = $state();
	let typeWriterOn: boolean | undefined = $state(true);

	function selectCard(tarotCard: Card) {
		if (isSelected(tarotCard)) {
			isReadingVisible = true;
			return;
		}

		selectedCard = tarotCard;
	}

	// comparison helpers
	function isSelected(tarotCard: Card) {
		return selectedCard && selectedCard.id === tarotCard.id;
	}

	function isHighlighted(tarotCard: Card) {
		return pickPreviewCard && pickPreviewCard.id === tarotCard.id;
	}

	function getRandomCard() {
		const randomIndex = Math.floor(Math.random() * tarotDeck.length);
		return tarotDeck[randomIndex];
	}

	function getKeywords(tarotCard: Card) {
		if (tarotCard.isUpright) {
			return tarotCard.keywords.upright;
		} else {
			return tarotCard.keywords.reversed;
		}
	}

	function randomlyPickCard() {
		let cardCount = 0;

		// pick and set a new previewCard every second
		const interval = setInterval(() => {
			if (cardCount < 5) {
				pickPreviewCard = getRandomCard();
				cardCount++;
			} else {
				clearInterval(interval);
				if (pickPreviewCard) {
					selectCard(pickPreviewCard);
				}
			}
		}, 1000);
	}

	// svelte:window events
	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			selectedCard = null;
			isReadingVisible = false;
		}
		if (event.key === 'd') {
			goto('/disclaimer');
		}
		if (event.key === 'g') {
			window.open('https://github.com/sveltejs/kit', '_blank');
		}
		if (event.key === 'h') {
			goto('/');
		}
		if (event.key === 'p') {
			randomlyPickCard();
		}
		if (event.key === 's') {
			alert('settings!');
		}
		if (event.key === 'x') {
			shuffleDeck();
		}
	}

	function handleClickOutside(event: MouseEvent) {
		// check if the clicked element has the class 'card'
		if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('card')) {
			selectedCard = null;
			pickPreviewCard = null;
			isReadingVisible = false;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window onkeydown={handleKeyPress} onclick={handleClickOutside} />

<div class="flex flex-col items-center justify-center">
	<TypeWriter><h1 class="welcome">Welcome to cb.tarot</h1></TypeWriter>

	<div class="flex min-h-[972px] max-w-5xl flex-col-reverse lg:flex-col">
		<div class="">
			<div class="my-6 grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-[repeat(10,_1fr)]">
				{#each tarotDeck as tarotCard (tarotCard)}
					<div animate:flip={{ duration: 500 }}>
						<div
							class="card"
							class:center={isSelected(tarotCard)}
							class:highlight={isHighlighted(tarotCard)}
							onclick={() => selectCard(tarotCard)}
							onkeydown={(e) => {}}
							tabindex="0"
							role="button"
							aria-label="Tarot card"
						>
							<span
								class="pointer-events-none w-full text-center"
								class:reversed={!tarotCard.isUpright}
							>
								{#if showCardFront}
									{tarotCard.name}
								{:else}
									?
								{/if}
							</span>
							<span class="hidden w-full" class:showReading={isSelected(tarotCard)}>
								{getKeywords(tarotCard)}
							</span>
							<div
								class="hidden flex-col"
								class:showReading={isSelected(tarotCard) && isReadingVisible}
							>
								{#if isReadingVisible}
									{#if typeWriterOn}
										<TypeWriter mode="cascade">
											{@html formatTextIntoParagraphs(
												tarotCard.isUpright
													? tarotCard.description.upright
													: tarotCard.description.reversed
											)}
										</TypeWriter>
									{:else}
										{@html formatTextIntoParagraphs(
											tarotCard.isUpright
												? tarotCard.description.upright
												: tarotCard.description.reversed
										)}
									{/if}
								{/if}
							</div>
						</div>
						<div class="hidden" class:visible={selectedCard === tarotCard}></div>
					</div>
				{/each}
			</div>
		</div>
		<div class="max-w-5xl">
			<div class="flex flex-col justify-between md:flex-row">
				<div class="flex justify-between">
					<button class="button border border-gray-500 px-6 py-1 lowercase" onclick={shuffleDeck}
						>[x] shuffle</button
					>
					<!-- <button class="border border-gray-500 px-6 py-1 lowercase" onclick={toggleFlip}
						>Flip</button
					> -->
				</div>
				<button class="button border border-gray-500 px-6 py-1 lowercase" onclick={randomlyPickCard}
					>[p] pick</button
				>
			</div>
		</div>
	</div>
	<p class="mt-6 text-center">
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</div>

<style>
	.welcome {
	}

	.card {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 0.875em;
		font-weight: 300;
		aspect-ratio: 1;
		min-width: 90px;
		max-width: 90px;
		max-height: 90px;
		min-height: 90px;

		border: 1px solid #dedede;
		background-color: white;
		transition:
			transform 0.3s ease-in-out,
			z-index 0.3s ease-in-out,
			border 0.15s ease;
		cursor: pointer;

		overflow: auto;

		font-family: 'Inter', sans-serif;
	}

	.card:hover {
		border: 1px solid black;
	}

	.card span {
		transition: transform 0.3s ease;
	}

	.card:hover span {
		transform: none;
	}

	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		min-width: 90%;
		min-height: 500px;
		font-size: 1.2em;
		padding: 1.5rem;

		transition: all 0.3s ease-in-out;

		align-items: flex-start;
		justify-content: flex-start;

		animation: tilt-n-move-shaking 0.5s ease-in-out 1s;
	}

	.center span {
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		.center {
			min-width: 450px;
		}
	}

	.highlight {
		border: 2px solid black;
	}

	.visible {
		display: flex;
	}

	.reversed::after {
		content: '*';
	}

	.showReading {
		display: flex;
	}

	.button {
		font-family: 'Inter Tight', sans-serif;
	}

	@keyframes tilt-n-move-shaking {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		25% {
			transform: translate(-50%, -50%) rotate(2.5deg);
		}
		50% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		75% {
			transform: translate(-50%, -50%) rotate(-2.5deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
	}
</style>
