<script lang="ts">
	import { flip } from 'svelte/animate';

	interface Card {
		id: number;
		name: string;
		isUpright: boolean;
		description: {
			upright: string;
			reversed: string;
		};
	}

	let tarotDeck: Card[] = [
		{ id: 1, name: 'Fool', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{
			id: 2,
			name: 'Magician',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 3,
			name: 'H.Priestess',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 4, name: 'Empress', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 5, name: 'Emperor', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 6, name: 'Hiero', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 7, name: 'Lovers', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 8, name: 'Chariot', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{
			id: 9,
			name: 'Strength',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 10, name: 'Hermit', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{
			id: 11,
			name: 'Wheel.F',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 12,
			name: 'Justice',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 13,
			name: 'Hanged.M',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 14, name: 'Death', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 15, name: 'Temp.', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 16, name: 'Devil', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 17, name: 'Tower', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 18, name: 'Star', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 19, name: 'Moon', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 20, name: 'Sun', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 21, name: 'Judg.', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 22, name: 'World', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },

		{
			id: 23,
			name: 'Kn.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 24,
			name: 'K.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 25,
			name: 'Q.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 26,
			name: 'Pg.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 27,
			name: 'II.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 28,
			name: 'III.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 29,
			name: 'IV.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 30,
			name: 'V.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 31,
			name: 'VI.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 32,
			name: 'VII.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 33,
			name: 'VIII.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 34,
			name: 'IX.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 35,
			name: 'X.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 36,
			name: 'A.Wands',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},

		{
			id: 37,
			name: 'Kn.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 38, name: 'K.Cups', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 39, name: 'Q.Cups', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{
			id: 40,
			name: 'Pg.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 41,
			name: 'II.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 42,
			name: 'III.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 43,
			name: 'IV.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 44, name: 'V.Cups', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{
			id: 45,
			name: 'VI.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 46,
			name: 'VII.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 47,
			name: 'VIII.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 48,
			name: 'IX.Cups',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 49, name: 'X.Cups', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },
		{ id: 50, name: 'A.Cups', isUpright: true, description: { upright: 'desc', reversed: 'desc' } },

		{
			id: 51,
			name: 'Kn.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 52,
			name: 'K.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 53,
			name: 'Q.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 54,
			name: 'Pg.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 55,
			name: 'II.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 56,
			name: 'III.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 57,
			name: 'IV.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 58,
			name: 'V.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 59,
			name: 'VI.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 60,
			name: 'VII.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 61,
			name: 'VIII.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 62,
			name: 'IX.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 63,
			name: 'X.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 64,
			name: 'A.Swords',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},

		{
			id: 65,
			name: 'Kn.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 66,
			name: 'K.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 67,
			name: 'Q.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 68,
			name: 'Pg.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 69,
			name: 'II.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 70,
			name: 'III.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 71,
			name: 'IV.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 72,
			name: 'V.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 73,
			name: 'VI.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 74,
			name: 'VII.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 75,
			name: 'VIII.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 76,
			name: 'IX.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{
			id: 77,
			name: 'X.Pents',
			isUpright: true,
			description: { upright: 'desc', reversed: 'desc' }
		},
		{ id: 78, name: 'A.Pents', isUpright: true, description: { upright: 'desc', reversed: 'desc' } }
	];

	function shuffleDeck() {
		// shuffle
		tarotDeck = tarotDeck.sort(() => (Math.random() > 0.5 ? 1 : -1));

		// isUpright
		tarotDeck.forEach((card) => {
			card.isUpright = Math.random() < 0.5;
		});
	}

	let showCardFront: boolean = true;
	function toggleFlip() {
		showCardFront = !showCardFront;
	}

	let selectedCard: Card | null = null;
	let pickPreviewCard: Card | null = null;

	let revealReading: boolean;

	function selectCard(tarotCard: Card) {
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
							class:center={selectedCard && selectedCard.id === tarotCard.id}
							class:highlight={pickPreviewCard && pickPreviewCard.id === tarotCard.id}
							on:click={() => selectCard(tarotCard)}
							on:keydown={(e) => {}}
							tabindex="0"
							role="button"
							aria-label="Tarot card"
						>
							<span class="pointer-events-none" class:reversed={!tarotCard.isUpright}>
								{#if showCardFront}
									{tarotCard.name}
								{:else}
									?
								{/if}
							</span>
							<div
								class:showReading={selectedCard && selectedCard.id === tarotCard.id}
								class="hidden"
							>
								<p class="mb-4">
									Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia pellentesque feugiat
									dis magna augue natoque torquent dis. Lorem ipsum odor amet, consectetuer
									adipiscing elit. Lacinia pellentesque feugiat dis magna augue natoque torquent
									dis.
								</p>
								<p class="mb-4">
									Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia pellentesque feugiat
									dis magna augue natoque torquent dis. Lorem ipsum odor amet, consectetuer
									adipiscing elit. Lacinia pellentesque feugiat dis magna augue natoque torquent
									dis.
								</p>
								<p class="mb">
									Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia pellentesque feugiat
									dis magna augue natoque torquent dis. Lorem ipsum odor amet, consectetuer
									adipiscing elit. Lacinia pellentesque feugiat dis magna augue natoque torquent
									dis.
								</p>
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
					<button class="border border-gray-500 px-6 py-1 lowercase" on:click={shuffleDeck}
						>Shuffle</button
					>
					<button class="border border-gray-500 px-6 py-1 lowercase" on:click={toggleFlip}
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
	}

	.box:hover {
		border: 1px solid black;
		animation: tilt-n-move-shaking 0.5s ease-in-out 0.5s;
	}

	.box span {
		transition: transform 0.3s ease;
	}

	.box:hover span {
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
	}

	@media (min-width: 768px) {
		.center {
			min-width: 450px;
		}
	}

	.showReading {
		display: flex;
		flex-direction: column;
		padding-top: 0.5rem;
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

	@keyframes tilt-n-move-shaking {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		25% {
			transform: translate(-50%, -50%) rotate(5deg);
		}
		50% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		75% {
			transform: translate(-50%, -50%) rotate(-5deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
	}
</style>
