<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let helpText = `AI-powered readings limited to ~2 per day. Subsequent readings default to pre-recorded general readings`;
</script>

<footer class="flex h-16 items-center justify-between px-8">
	<a class="button plexmono corner flex max-h-9 items-center" href="/">cb.tarot</a>

	<div class="flex items-center justify-center">
		<span class="plexmono text-center text-xs font-normal text-[#aaa]"
			>Copyright © 2025 cb.tarot.</span
		>
	</div>

	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<div class="help min-w-[34px] rounded-3xl border p-2 text-xs text-[#aaa]">?</div>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>
					ai readings are limited to ~2 per day <br />subsequent readings use pre-recorded, general
					material
				</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</footer>

<style>
	.plexmono {
		font-family: 'IBM Plex Mono', serif;
	}

	footer {
		font-family: 'Inter Tight', sans-serif;
	}

	.button {
		padding: 5px 8px;
		border-radius: 2px;
		font-family: 'IBM Plex Mono', serif;
	}

	.button:hover {
		background-color: #1e1e1e11;
		font-family: 'IBM Plex Mono', serif;
	}

	.help:hover {
		background-color: #1e1e1e11;
	}
</style>
