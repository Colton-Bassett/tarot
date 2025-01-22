import { json, error } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';
import { RateLimiter } from '$lib/rateLimiter.js';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// 1 request per minute
const rateLimiter = new RateLimiter(1);

export const POST = async ({ request, getClientAddress }) => {
	// Get client IP address
	const clientIp = getClientAddress();

	// Check rate limit
	if (!rateLimiter.checkRateLimit(clientIp)) {
		const resetTime = rateLimiter.getResetTime(clientIp);
		throw error(429, {
			message: 'Rate limit exceeded'
			// headers: {
			//     'Retry-After': String(Math.ceil((resetTime! - Date.now()) / 1000)),
			//     'X-RateLimit-Remaining': String(rateLimiter.getRemainingRequests(clientIp))
			// }
		});
	}

	// Get the request data
	const { prompt } = await request.json();

	if (!prompt) {
		throw error(400, 'Prompt is required');
	}

	try {
		// Send request to OpenAI API
		const response = await fetch(OPENAI_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			},
			body: JSON.stringify({
				model: 'gpt-4o-mini',
				messages: [{ role: 'user', content: prompt }],
				max_tokens: 150,
				temperature: 0.7
			})
		});

		if (!response.ok) {
			throw new Error('Failed to get response from OpenAI');
		}

		const data = await response.json();

		// Send OpenAI response back to client
		return json(
			{
				message: data.choices[0].message.content
			},
			{
				headers: {
					'X-RateLimit-Remaining': String(rateLimiter.getRemainingRequests(clientIp))
				}
			}
		);
	} catch (err: any) {
		return json(
			{ error: err.message },
			{
				status: 500,
				headers: {
					'X-RateLimit-Remaining': String(rateLimiter.getRemainingRequests(clientIp))
				}
			}
		);
	}
};
