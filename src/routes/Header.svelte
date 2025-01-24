<header class="flex justify-between px-8">
	<div class="corner flex h-16 items-center">
		<a href="/" class="button">cb.tarot</a>
	</div>

	<nav class="flex gap-6">
		<ul class="flex gap-6">
			<li class="flex h-16 items-center">
				<a href="/" class="button">[s] set.</a>
			</li>
			<li class="flex h-16 items-center">
				<a href="/disclaimer" class="button">[d] disc.</a>
			</li>
		</ul>
		<div class="flex h-16 items-center">
			<a href="https://github.com/sveltejs/kit" class="button">[g] gh.</a>
		</div>
	</nav>
</header>

<style>
	header {
		/* font-family: 'Inter Tight', sans-serif; */
		font-family: 'IBM Plex Mono', serif;
	}

	.button {
		padding: 5px 8px;
		border-radius: 2px;
		backdrop-filter: blur(10px);
	}

	.button:hover {
		background-color: #1e1e1e11;
	}
</style>
