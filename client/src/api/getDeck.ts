import { API_URL, TDeck } from './config';

async function getDeck(deckId: string): Promise<TDeck> {
	const response = await fetch(`${API_URL}/decks/${deckId}`);
	const fetchedDeck = await response.json();
	return fetchedDeck;
}

export default getDeck;
