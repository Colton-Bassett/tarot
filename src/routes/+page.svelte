<script lang="ts">
	import { flip } from 'svelte/animate';

	interface Card {
		id: Number;
		name: String;
		upright: String;
		reversed: String;
	}

	let tDeck: Card[] = [
		{ id: 1, name: 'Fool', upright: 'desc', reversed: 'desc' },
		{ id: 2, name: 'Magician', upright: 'desc', reversed: 'desc' },
		{ id: 3, name: 'H.Priestess', upright: 'desc', reversed: 'desc' },
		{ id: 4, name: 'Empress', upright: 'desc', reversed: 'desc' },
		{ id: 5, name: 'Emperor', upright: 'desc', reversed: 'desc' },
		{ id: 6, name: 'Hiero', upright: 'desc', reversed: 'desc' },
		{ id: 7, name: 'Lovers', upright: 'desc', reversed: 'desc' },
		{ id: 8, name: 'Chariot', upright: 'desc', reversed: 'desc' },
		{ id: 9, name: 'Strength', upright: 'desc', reversed: 'desc' },
		{ id: 10, name: 'Hermit', upright: 'desc', reversed: 'desc' },
		{ id: 11, name: 'Wheel.F', upright: 'desc', reversed: 'desc' },
		{ id: 12, name: 'Justice', upright: 'desc', reversed: 'desc' },
		{ id: 13, name: 'Hanged.M', upright: 'desc', reversed: 'desc' },
		{ id: 14, name: 'Death', upright: 'desc', reversed: 'desc' },
		{ id: 15, name: 'Temp.', upright: 'desc', reversed: 'desc' },
		{ id: 16, name: 'Devil', upright: 'desc', reversed: 'desc' },
		{ id: 17, name: 'Tower', upright: 'desc', reversed: 'desc' },
		{ id: 18, name: 'Star', upright: 'desc', reversed: 'desc' },
		{ id: 19, name: 'Moon', upright: 'desc', reversed: 'desc' },
		{ id: 20, name: 'Sun', upright: 'desc', reversed: 'desc' },
		{ id: 21, name: 'Judg.', upright: 'desc', reversed: 'desc' },
		{ id: 22, name: 'World', upright: 'desc', reversed: 'desc' },

		{ id: 23, name: 'Kn.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 24, name: 'K.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 25, name: 'Q.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 26, name: 'Pg.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 27, name: 'II.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 28, name: 'III.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 29, name: 'IV.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 30, name: 'V.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 31, name: 'VI.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 32, name: 'VII.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 33, name: 'VIII.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 34, name: 'IX.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 35, name: 'X.Wands', upright: 'desc', reversed: 'desc' },
		{ id: 36, name: 'A.Wands', upright: 'desc', reversed: 'desc' },

		{ id: 37, name: 'Kn.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 38, name: 'K.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 39, name: 'Q.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 40, name: 'Pg.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 41, name: 'II.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 42, name: 'III.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 43, name: 'IV.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 44, name: 'V.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 45, name: 'VI.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 46, name: 'VII.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 47, name: 'VIII.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 48, name: 'IX.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 49, name: 'X.Cups', upright: 'desc', reversed: 'desc' },
		{ id: 50, name: 'A.Cups', upright: 'desc', reversed: 'desc' },

		{ id: 51, name: 'Kn.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 52, name: 'K.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 53, name: 'Q.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 54, name: 'Pg.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 55, name: 'II.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 56, name: 'III.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 57, name: 'IV.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 58, name: 'V.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 59, name: 'VI.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 60, name: 'VII.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 61, name: 'VIII.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 62, name: 'IX.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 63, name: 'X.Swords', upright: 'desc', reversed: 'desc' },
		{ id: 64, name: 'A.Swords', upright: 'desc', reversed: 'desc' },

		{ id: 65, name: 'Kn.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 66, name: 'K.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 67, name: 'Q.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 68, name: 'Pg.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 69, name: 'II.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 70, name: 'III.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 71, name: 'IV.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 72, name: 'V.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 73, name: 'VI.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 74, name: 'VII.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 75, name: 'VIII.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 76, name: 'IX.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 77, name: 'X.Pents', upright: 'desc', reversed: 'desc' },
		{ id: 78, name: 'A.Pents', upright: 'desc', reversed: 'desc' }
	];

	let tarotDeck: string[] = [
		'Fool',
		'Magician',
		'H.Priestess',
		'Empress',
		'Emperor',
		'Hiero',
		'Lovers',
		'Chariot',
		'Strength',
		'Hermit',
		'Wheel.F',
		'Justice',
		'Hanged.M',
		'Death',
		'Temp.',
		'Devil',
		'Tower',
		'Star',
		'Moon',
		'Sun',
		'Judg.',
		'World',

		'Kn.Wands',
		'K.Wands',
		'Q.Wands',
		'Pg.Wands',
		'II.Wands',
		'III.Wands',
		'IV.Wands',
		'V.Wands',
		'VI.Wands',
		'VII.Wands',
		'VIII.Wands',
		'IX.Wands',
		'X.Wands',
		'A.Wands',

		'Kn.Cups',
		'K.Cups',
		'Q.Cups',
		'Pg.Cups',
		'II.Cups',
		'III.Cups',
		'IV.Cups',
		'V.Cups',
		'VI.Cups',
		'VII.Cups',
		'VIII.Cups',
		'IX.Cups',
		'X.Cups',
		'A.Cups',

		'Kn.Swords',
		'K.Swords',
		'Q.Swords',
		'Pg.Swords',
		'II.Swords',
		'III.Swords',
		'IV.Swords',
		'V.Swords',
		'VI.Swords',
		'VII.Swords',
		'VIII.Swords',
		'IX.Swords',
		'X.Swords',
		'A.Swords',

		'Kn.Pents',
		'K.Pents',
		'Q.Pents',
		'Pg.Pents',
		'II.Pents',
		'III.Pents',
		'IV.Pents',
		'V.Pents',
		'VI.Pents',
		'VII.Pents',
		'VIII.Pents',
		'IX.Pents',
		'X.Pents',
		'A.Pents'
	];

	function shuffleDeck() {
		tarotDeck = tarotDeck.sort(() => (Math.random() > 0.5 ? 1 : -1));
	}

	let showNumbers: boolean = true;
	function toggleVisibility() {
		showNumbers = !showNumbers;
	}

	let selectedCard: string | null = null;
	let pickPreviewCard: string | null = null;

	function selectCard(tarotCard: string) {
		// if active, set null; if not active, set active
		selectedCard = selectedCard === tarotCard ? null : tarotCard;
	}

	function getRandomCard() {
		const randomIndex = Math.floor(Math.random() * tarotDeck.length);
		return tarotDeck[randomIndex];
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

	function handleEscPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			selectedCard = null;
		}
	}

	function handleClickOutside(event: MouseEvent) {
		// check if the clicked element has the class 'box'
		if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('box')) {
			selectedCard = null;
			pickPreviewCard = null;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window on:keydown={handleEscPress} on:click={handleClickOutside} />

<div class="flex flex-col items-center justify-center">
	<h1>Welcome to SvelteKit</h1>
	<div class="flex max-w-5xl flex-col-reverse lg:flex-col">
		<div class="">
			<div class="my-6 grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-[repeat(10,_1fr)]">
				{#each tarotDeck as tarotCard (tarotCard)}
					<div animate:flip={{ duration: 500 }}>
						<div
							class="box"
							class:center={selectedCard === tarotCard}
							class:highlight={pickPreviewCard === tarotCard}
							on:click={() => selectCard(tarotCard)}
							on:keydown={(e) => {}}
							tabindex="0"
							role="button"
							aria-label="Tarot card"
						>
							{#if showNumbers}
								{tarotCard}
							{:else}
								?
							{/if}
						</div>
						<div class="hidden" class:visible={selectedCard === tarotCard}></div>
					</div>
				{/each}
			</div>
		</div>
		<div class="max-w-5xl">
			<div class="flex flex-col justify-between md:flex-row">
				<div class="flex justify-between">
					<button class="border border-gray-500 px-6 py-1 lowercase" on:click={shuffleDeck}
						>Shuffle</button
					>
					<button class="border border-gray-500 px-6 py-1 lowercase" on:click={toggleVisibility}
						>Flip</button
					>
				</div>
				<button class="border border-gray-500 px-6 py-1 lowercase" on:click={randomlyPickCard}
					>Pick</button
				>
			</div>
		</div>
	</div>
	<p class="mt-6 text-center">
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</div>

<style>
	.box {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875em;
		font-weight: 300;
		aspect-ratio: 1;
		min-width: 86px;
		border: 1px solid #dedede;
		background-color: white;
		transition:
			transform 0.3s ease-in-out,
			z-index 0.3s ease-in-out,
			border 0.15s ease;
		cursor: pointer;
	}

	.box:hover {
		border: 1px solid black;
	}

	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		width: 300px;
		height: 300px;
		font-size: 1.2em;
		font-weight: bold;
		transition: all 0.3s ease-in-out;
	}

	.highlight {
		border: 2px solid black;
	}

	.visible {
		display: flex;
	}
</style>
