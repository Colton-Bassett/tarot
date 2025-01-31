<script lang="ts">
	import { goto } from '$app/navigation';

	// keyboard shortcuts handler
	function handleKeyPress(event: KeyboardEvent) {
		const shortcuts: Record<string, () => void> = {
			a: () => goto('/about'),
			g: () => window.open('https://github.com/Colton-Bassett/tarot', '_blank'),
			h: () => goto('/')
		};

		shortcuts[event.key]?.();
	}
</script>

<svelte:window onkeydown={handleKeyPress} />

<svelte:head>
	<title>cb.tarot - about</title>
	<meta name="description" content="about" />
</svelte:head>
<div class="flex flex-col items-center justify-center">
	<div class="mx-2 mb-24 flex min-h-[60.75rem] max-w-4xl flex-col md:mx-6">
		<div class="border-b pb-8">
			<h1 class="">About cb.tarot</h1>
			<h3 class="">
				For daily guidance or simple curiosity, cb.tarot is a transparent one-card reading
				experience.
			</h3>
		</div>
		<div class="mb-3 mt-8">
			<h2 class="mb-2">How it works:</h2>

			<ul class="list-disc">
				<li>
					<span>One-Card Readings: </span>
					Get your daily card pull with a simple, no-frills process. You can also shuffle the deck, reset
					it, or choose between upright, reversed, or a mix of card orientations.
				</li>
				<li>
					<span>AI-Powered Readings: </span>
					Every day, you can receive a personalized tarot reading based on a topic of your choice — whether
					that's general advice, career insights, romance, or financial guidance. Powered by ChatGPT,
					these readings offer thoughtful, context-aware responses tailored to your preferences.
				</li>
				<li>
					<span>Customization: </span>
					Personalize your experience by choosing a unique cardback design to make the deck your own.
				</li>
			</ul>
		</div>
		<div class="mb-6">
			<h2>Transparency at Every Step</h2>
			<p>
				Tarot readings should be straightforward. You to see exactly how your deck is shuffled in
				real time. There are no hidden tricks or algorithms. Every card is chosen randomly, and you
				can see the entire process unfold.
			</p>
		</div>

		<div class="mb-6">
			<h2>Simple Design, No Distractions</h2>
			<p>
				A simple layout ensures that your focus remains on what matters most: the reading itself.
				There are no unnecessary frills, just a straightforward experience that's easy to navigate
				and understand.
			</p>
		</div>
		<div class="border-b pb-8">
			<h2>Our Mission</h2>
			<p>
				Our goal is to create a transparent, easy-to-use tarot experience that anyone can enjoy. We
				want to demystify the process of tarot readings, offering you a clear way to connect with
				your intuition. With a focus on simplicity and usability, we aim to provide you with both
				clarity and insight—without the mystery.
			</p>
		</div>
		<div class=" mt-8">
			<h2>Disclaimer</h2>
			<p>
				Cb.tarot is intended for entertainment and guidance purposes only. The readings provided are
				based on traditional tarot card symbolism and should not be considered a substitute for
				professional advice in areas such as health, finance, or legal matters. Results and
				interpretations are for personal reflection and should be used at your own discretion.
			</p>
		</div>
	</div>
</div>

<style>
	div {
		line-height: 170%;
	}

	h1 {
		font-size: 1.875rem;
		line-height: 2.25rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	h2 {
		font-size: 1.25rem;
		line-height: 2rem;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	h3 {
		color: #6d6d6d;
	}

	span {
		font-family: 'Inter Tight', sans-serif;
		font-weight: 600;
	}

	li {
		display: list-item;
		list-style-type: disc;
		list-style-position: inside;
		padding-inline-start: 20px;
		margin-bottom: 0.75rem;
	}
</style>
