import type { TempType } from '$lib/deck';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export async function load() {
	// incase loading data from server -> client needed
	return {
		data: null
	};
}
