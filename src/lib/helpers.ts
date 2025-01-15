export function formatTextIntoParagraphs(text: string): string {
	// split the text by sentences
	const sentences = text.split(/(?<=[.!?])\s+/);
	const paragraphs: string[] = [];

	// make paragraphs two sentences
	for (let i = 0; i < sentences.length; i += 2) {
		const paragraph = sentences.slice(i, i + 2).join(' ');
		paragraphs.push(`<p style="margin-bottom: 1rem">${paragraph}</p>`);
	}

	// return the formatted text as a single string
	return paragraphs.join('\n');
}
