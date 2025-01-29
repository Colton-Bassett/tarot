<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	let {
		content,
		children
	}: {
		content: string;
		children(): any;
	} = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{@render children()}
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>{content}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
