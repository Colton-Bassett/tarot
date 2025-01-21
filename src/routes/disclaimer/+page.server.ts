import type { TempType } from '$lib/deck';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export async function load() {
	// Initial data structure with no Bulbasaur data.
	return {
		data: null
	};
}
