import { json, error } from '@sveltejs/kit';

import { OPENAI_API_KEY } from '$env/static/private';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const POST = async ({ request }) => {
	// Get the request data (assuming the client sends a JSON body)
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
				Authorization: `Bearer ${OPENAI_API_KEY}` // Securely retrieve API key
			},
			body: JSON.stringify({
				model: 'gpt-4o-mini', // You can change to GPT-3 if needed
				messages: [{ role: 'user', content: prompt }],
				max_tokens: 150,
				temperature: 0.7 // Adjust temperature to control response creativity
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
		return json({ error: err.message }, { status: 500 });
	}
};
