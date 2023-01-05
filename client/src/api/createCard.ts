import { API_URL, TDeck } from './config';

async function createCard(deckId: string, cardText: string): Promise<TDeck> {
	const response = await fetch(`${API_URL}/decks/${deckId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			cardText,
		}),
	});
	const deck = await response.json();
	return deck;
}

export default createCard;
