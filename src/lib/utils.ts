import type { Card } from './types';
import type { OrientationType } from './constants';

export function shuffleCards(cards: Card[], orientationType: OrientationType): Card[] {
	const shuffled = [...cards].sort(() => (Math.random() > 0.5 ? 1 : -1));

	switch (orientationType) {
		case 'both':
			shuffled.forEach((card) => {
				card.isUpright = Math.random() < 0.5;
			});
			break;
		case 'upright':
			shuffled.forEach((card) => {
				card.isUpright = true;
			});
			break;
		case 'reversed':
			shuffled.forEach((card) => {
				card.isUpright = false;
			});
			break;
		default:
			shuffled.forEach((card) => {
				card.isUpright = Math.random() < 0.5;
			});
	}

	return shuffled;
}

export function getKeywords(card: Card): string[] {
	return card.isUpright ? card.keywords.upright : card.keywords.reversed;
}

export function formatTextIntoParagraphs(text: string): string {
	// split the text by sentences
	const sentences = text.split(/(?<=[.!?])\s+/);
	const paragraphs: string[] = [];

	// make paragraphs two sentences
	for (let i = 0; i < sentences.length; i += 2) {
		const paragraph = sentences.slice(i, i + 2).join(' ');
		paragraphs.push(`<p style="margin-bottom: 1rem">${paragraph}</p>`);
	}

	// return the formatted text as a single string
	return paragraphs.join('\n');
}

// shadcn for tooltips
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
