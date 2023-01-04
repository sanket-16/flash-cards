import { API_URL } from './config';

async function createDeck(deckTitle: string) {
	const response = await fetch(`${API_URL}/decks`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: deckTitle,
		}),
	});
	const deck = await response.json();
	return deck;
}

export default createDeck;
