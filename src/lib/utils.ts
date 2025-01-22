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

// chatgpt
export class RateLimiter {
	private requests: Map<string, { count: number; resetTime: number }>;
	private requestsPerMinute: number;

	constructor(requestsPerMinute: number) {
		this.requests = new Map();
		this.requestsPerMinute = requestsPerMinute;
	}

	checkRateLimit(ip: string): boolean {
		const now = Date.now();
		const userRequests = this.requests.get(ip);

		if (!userRequests) {
			// First request from this IP
			this.requests.set(ip, {
				count: 1,
				resetTime: now + 60000 // Current time + 1 minute
			});
			return true;
		}

		if (now > userRequests.resetTime) {
			// Reset period has passed
			this.requests.set(ip, {
				count: 1,
				resetTime: now + 60000
			});
			return true;
		}

		if (userRequests.count >= this.requestsPerMinute) {
			// Rate limit exceeded
			return false;
		}

		// Increment request count
		userRequests.count++;
		return true;
	}

	getRemainingRequests(ip: string): number {
		const userRequests = this.requests.get(ip);
		if (!userRequests) {
			return this.requestsPerMinute;
		}
		return Math.max(0, this.requestsPerMinute - userRequests.count);
	}

	getResetTime(ip: string): number | null {
		const userRequests = this.requests.get(ip);
		return userRequests ? userRequests.resetTime : null;
	}
}
