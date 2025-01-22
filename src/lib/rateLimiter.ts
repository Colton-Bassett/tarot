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
