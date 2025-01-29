import { json, error } from '@sveltejs/kit';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis/cloudflare';
import {
	OPENAI_API_KEY,
	UPSTASH_REDIS_REST_URL,
	UPSTASH_REDIS_REST_TOKEN
} from '$env/static/private';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const ratelimit = new Ratelimit({
	redis: new Redis({
		url: UPSTASH_REDIS_REST_URL,
		token: UPSTASH_REDIS_REST_TOKEN
	}),
	limiter: Ratelimit.slidingWindow(2, '50 s'),
	analytics: true,
	prefix: '@upstash/ratelimit'
});

export const POST = async ({ request }) => {
	console.log('chatgpt request');
	// Get the request data
	const { prompt } = await request.json();

	if (!prompt) {
		throw error(400, 'Prompt is required');
	}

	const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
	console.log(ip);
	const { success } = await ratelimit.limit(ip);

	if (!success) {
		throw error(429, 'Rate limited');
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
				max_tokens: 140,

				temperature: 0.6
			})
		});

		if (!response.ok) {
			throw new Error('Failed to get response from OpenAI');
		}

		const data = await response.json();

		// Send OpenAI response back to client
		return json({
			message: data.choices[0].message.content
		});
	} catch (err: any) {
		return json(
			{ error: err.message },
			{
				status: 500
			}
		);
	}
};
