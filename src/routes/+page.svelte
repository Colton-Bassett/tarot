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

	function cardClicked(tarotcard: string) {
		activeCard = activeCard === tarotcard ? null : tarotcard;
	}

	function handleEscPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			activeCard = null;
		}
	}
</script>

<svelte:window on:keydown={handleEscPress} />

<div>
	<div class="flex flex-col items-center justify-center">
		<h1>Welcome to SvelteKit</h1>
		<div class="example boxes-example max-w-5xl">
			<div class="boxes">
				{#each tarotcards as tarotcard (tarotcard)}
					<div
						class="box cursor-pointer"
						animate:flip={{ duration: 500 }}
						class:center={activeCard === tarotcard}
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
			<div class="flex justify-between">
				<div>
					<button class="border border-gray-500 px-6 py-1 lowercase" on:click={randomize}
						>Randomize</button
					>
					<button class="border border-gray-500 px-6 py-1 lowercase" on:click={toggleVisibility}
						>Flip</button
					>
				</div>
				<button class="border border-gray-500 px-6 py-1 lowercase" on:click={toggleVisibility}
					>Pick</button
				>
			</div>
		</div>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
	</div>
</div>

<style>
	.boxes {
		display: flex;
		flex-wrap: wrap;
		margin: 2em -0.25em 2em -0.25em;
	}

	.box {
		box-sizing: border-box;
		width: calc(10% - 0.5em);
		margin: 0.25em;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875em;
		font-weight: 300;
		aspect-ratio: 1;
		border: 1px solid gray;
		background-color: white;

		position: relative;
		transition:
			transform 0.3s ease-in-out,
			z-index 0.3s;
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
	}
</style>
