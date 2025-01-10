<script lang="ts">
	import { flip } from 'svelte/animate';

	let tarotcards: string[] = [
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

	let showNumbers: boolean = true;

	function randomize() {
		tarotcards = tarotcards.sort(() => (Math.random() > 0.5 ? 1 : -1));
	}

	function toggleVisibility() {
		showNumbers = !showNumbers;
	}

	let activeCard: string | null = null;
	let spotlightCard: string | null = null;

	function cardClicked(tarotcard: string) {
		// if active, set null
		// if not active, set active
		activeCard = activeCard === tarotcard ? null : tarotcard;
	}

	function handleEscPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			activeCard = null;
		}
	}

	function getRandomCard() {
		const randomIndex = Math.floor(Math.random() * tarotcards.length);
		return tarotcards[randomIndex];
	}

	function setSpotlightCards() {
		let cardCount = 0;

		// Set an interval to pick and set a new spotlight card every second
		const interval = setInterval(() => {
			if (cardCount < 5) {
				spotlightCard = getRandomCard();
				cardCount++;
			} else {
				clearInterval(interval); // Stop the interval after 5 cards
				if (spotlightCard) {
					cardClicked(spotlightCard);
				}
			}
		}, 1000);
	}

	function handleClickOutside(event: MouseEvent) {
		// Check if the clicked element has the class 'box'
		if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('box')) {
			activeCard = null;
			spotlightCard = null;
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
	<div class="max-w-5xl">
		<div class="my-6 grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-[repeat(10,_1fr)]">
			{#each tarotcards as tarotcard (tarotcard)}
				<div
					class="box"
					animate:flip={{ duration: 500 }}
					class:center={activeCard === tarotcard}
					class:spotlight={spotlightCard === tarotcard}
					on:click={() => cardClicked(tarotcard)}
					on:keydown={(e) => {}}
					tabindex="0"
					role="button"
					aria-label="Tarot card"
				>
					{#if showNumbers}
						{tarotcard}
					{:else}
						?
					{/if}
				</div>
			{/each}
		</div>
		<div class="flex flex-col justify-between md:flex-row">
			<div class="flex justify-between">
				<button class="border border-gray-500 px-6 py-1 lowercase" on:click={randomize}
					>Randomize</button
				>
				<button class="border border-gray-500 px-6 py-1 lowercase" on:click={toggleVisibility}
					>Flip</button
				>
			</div>
			<button class="border border-gray-500 px-6 py-1 lowercase" on:click={setSpotlightCards}
				>Pick</button
			>
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

	.spotlight {
		border: 2px solid black;
	}
</style>
