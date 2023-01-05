import { API_URL } from './config';

export type TDeck = {
	title: string;
	cards: string[];
	_id: string;
};

async function getDecks(): Promise<TDeck[]> {
	const response = await fetch(`${API_URL}/decks`);
	const fetchedDecks = await response.json();
	return fetchedDecks;
}

export default getDecks;
