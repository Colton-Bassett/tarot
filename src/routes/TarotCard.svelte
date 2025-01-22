<script lang="ts">
	import { fade } from 'svelte/transition';
	import TypeWriter from 'svelte-typewriter';
	import CardBack from './CardBack.svelte';
	import { formatTextIntoParagraphs } from '$lib/utils';
	import { getKeywords } from '../lib/utils';
	import type { Card } from '../lib/types';

	export let card: Card;
	export let showFront: boolean;
	export let isSelected: boolean;
	export let isReadingVisible: boolean;
	export let typeWriterOn: boolean;
	export let onSelect: (card: Card) => void;
	export let onClose: () => void;
</script>

<div
	class="card"
	class:center={isSelected}
	class:cursor={isSelected && isReadingVisible}
	onclick={() => onSelect(card)}
	onkeydown={() => {}}
	tabindex="0"
	role="button"
	aria-label="Tarot card"
>
	{#if showFront}
		<div class="cardHeader" transition:fade={{ duration: 500 }}>
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
						onClose();
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
				<TypeWriter mode="cascade">
					{@html formatTextIntoParagraphs(
						card.isUpright ? card.description.upright : card.description.reversed
					)}
				</TypeWriter>
			{:else}
				{@html formatTextIntoParagraphs(
					card.isUpright ? card.description.upright : card.description.reversed
				)}
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
		transition:
			transform 0.3s ease-in-out,
			z-index 0.3s ease-in-out,
			border 0.15s ease;
		cursor: pointer;
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
	}

	.center .cardHeader {
		margin-bottom: 1rem;
	}

	.center:hover {
		animation: tilt-n-move-shaking 0.5s ease-in-out 1s;
	}

	.cursor {
		cursor: default;
	}

	/* .center .cardbg {
		border: 1px solid #dedede;
	} */

	.reversed::after {
		content: '*';
	}

	@media (min-width: 768px) {
		.center {
			min-width: 450px;
		}
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
