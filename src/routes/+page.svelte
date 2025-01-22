<svelte:options runes />

<script lang="ts">
	import TypeWriter from 'svelte-typewriter';
	import { flip } from 'svelte/animate';
	import { goto } from '$app/navigation';
	import { deck, type Card } from '$lib/deck';
	import { formatTextIntoParagraphs } from '$lib/helpers';
	import { fade } from 'svelte/transition';

	let tarotDeck = $state(deck);
	let showCardFront: boolean = $state(true);
	let selectedCard: Card | null = $state(null);
	let isReadingVisible: boolean | undefined = $state(true);
	let typeWriterOn: boolean | undefined = $state(true);

	let readingType: string = $state('general');
	let cardBackType: string = $state('plus');
	let uprightType: string = $state('both');

	function shuffleDeck() {
		// shuffle
		tarotDeck = tarotDeck.sort(() => (Math.random() > 0.5 ? 1 : -1));

		// isUpright
		tarotDeck.forEach((card) => {
			card.isUpright = Math.random() < 0.5;
		});
	}

	function resetDeck() {
		tarotDeck = deck;
		showCardFront = true;
	}

	function selectCard(tarotCard: Card) {
		if (isSelected(tarotCard)) {
			isReadingVisible = true;
			showCardFront = true;
			return;
		}

		selectedCard = tarotCard;
	}

	function pickCard() {
		showCardFront = false;
		shuffleDeck();
	}

	function isSelected(tarotCard: Card) {
		return selectedCard && selectedCard.id === tarotCard.id;
	}

	function closeCard() {
		selectedCard = null;
	}

	function getKeywords(tarotCard: Card) {
		if (tarotCard.isUpright) {
			return tarotCard.keywords.upright;
		} else {
			return tarotCard.keywords.reversed;
		}
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
			pickCard();
		}
		if (event.key === 'r') {
			resetDeck();
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
			// pickPreviewCard = null;
			isReadingVisible = false;
		}
	}

	const updateReadingType = () => {
		switch (readingType) {
			case 'general':
				readingType = 'romance';
				break;
			case 'romance':
				readingType = 'finance';
				break;
			case 'finance':
				readingType = 'career';
				break;
			case 'career':
				readingType = 'general';
				break;
		}
	};

	const updateCardBackType = () => {
		switch (cardBackType) {
			case 'plus':
				cardBackType = 'minus';
				break;
			case 'minus':
				cardBackType = 'ohs';
				break;
			case 'ohs':
				cardBackType = 'plus';
				break;
		}
	};

	const updateUprightType = () => {
		console.log(uprightType);
		switch (uprightType) {
			case 'both':
				uprightType = 'upright';
				break;
			case 'upright':
				uprightType = 'reversed';
				break;
			case 'reversed':
				uprightType = 'both';
				break;
		}
	};
</script>

<svelte:head>
	<title>cb.tarot - home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window onkeydown={handleKeyPress} onclick={handleClickOutside} />

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
			{#each tarotDeck as tarotCard (tarotCard)}
				<div animate:flip={{ duration: 500 }}>
					<div
						class="card"
						class:center={isSelected(tarotCard)}
						onclick={() => selectCard(tarotCard)}
						onkeydown={(e) => {}}
						tabindex="0"
						role="button"
						aria-label="Tarot card"
					>
						{#if showCardFront}
							<div
								class="pointer-events-none flex w-full items-center justify-center"
								transition:fade={{ duration: 500 }}
							>
								{#if tarotCard.isUpright && isSelected(tarotCard)}
									<span>↑</span>
								{/if}
								{#if !tarotCard.isUpright && isSelected(tarotCard)}
									<span>↓</span>
								{/if}
								<span
									class="w-full text-center"
									class:reversed={!tarotCard.isUpright && showCardFront}
									>{tarotCard.name}
								</span>
								{#if isSelected(tarotCard)}
									<span>x</span>
								{/if}
							</div>
						{:else}
							<div class="cardbg">
								{#each Array(9) as _, index}
									<div class="flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class={isSelected(tarotCard) ? 'size-6' : 'size-2'}
											style="transform: rotate({index * 45}deg);"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4.5v15m7.5-7.5h-15"
											/>
										</svg>
									</div>
								{/each}
							</div>
						{/if}

						<div
							class="mb-4 hidden w-full gap-2 border-b"
							class:showReading={isSelected(tarotCard) && isReadingVisible}
						>
							{#each getKeywords(tarotCard) as keyword}
								<span class="mb-0">{keyword} </span>
							{/each}
						</div>
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

		<div class="my-6 max-w-5xl">
			<div class="mb-4 flex flex-row-reverse gap-8">
				<button onclick={updateUprightType}>
					{uprightType === 'both' ? '↑ / ↓' : uprightType === 'upright' ? '↑' : '↓'}
				</button>
				<button onclick={updateReadingType}>{readingType}</button>
				<button onclick={updateCardBackType}>{cardBackType}</button>
			</div>
			<div class="flex flex-col justify-between md:flex-row">
				<div class="flex justify-between">
					<button class="button px-6 py-1 lowercase" onclick={shuffleDeck}>[x] shuffle</button>
					<button class="button px-6 py-1 lowercase" onclick={resetDeck}>[r] reset</button>
				</div>
				<button class="button px-6 py-1 lowercase" onclick={pickCard}>[p] pick</button>
			</div>
		</div>
	</div>
	<div class="hidden" class:overlay={selectedCard !== null}></div>
</div>

<style>
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
		border-radius: 2px;
		background-color: white;
		transition:
			transform 0.3s ease-in-out,
			z-index 0.3s ease-in-out,
			border 0.15s ease;
		cursor: pointer;

		overflow: auto;

		font-family: 'Inter', sans-serif;
		z-index: 10;
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

	.cardbg {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		height: 100%;
		width: 100%;
		pointer-events: none;
		border-radius: 2px;
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

		transition: all 0.3s ease-in-out;

		justify-content: flex-start;
	}

	.center span {
		margin-bottom: 1rem;
	}

	.center:hover {
		animation: tilt-n-move-shaking 0.5s ease-in-out 1s;
	}

	.center .cardbg {
		border: 1px solid #dedede;
	}

	@media (min-width: 768px) {
		.center {
			min-width: 450px;
		}
	}

	/* .highlight {
		border: 2px solid black;
	} */

	.visible {
		display: flex;
	}

	.reversed::after {
		content: '*';
	}

	.showReading {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.button {
		border: 1px solid #dedede;
		font-family: 'Inter Tight', sans-serif;
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
		/* background: rgba(193, 193, 193, 0.5); */
		backdrop-filter: blur(5px);
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
