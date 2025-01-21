import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async () => {
	try {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
		const data = await response.json();

		return json({
			name: data.name,
			id: data.id,
			types: data.types.map((type: { type: { name: string } }) => type.type.name)
		});
	} catch (error) {
		return json({ error: 'Failed to fetch Bulbasaur' }, { status: 500 });
	}
}) satisfies RequestHandler;
