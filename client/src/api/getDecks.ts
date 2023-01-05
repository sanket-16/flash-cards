import { API_URL } from './config';
import { TDeck } from './config';

async function getDecks(): Promise<TDeck[]> {
	const response = await fetch(`${API_URL}/decks`);
	const fetchedDecks = await response.json();
	return fetchedDecks;
}

export default getDecks;
