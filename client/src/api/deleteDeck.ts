import { API_URL } from './config';

async function deleteDeck(deckId: String) {
	await fetch(`${API_URL}/decks/${deckId}`, {
		method: 'DELETE',
	});
}

export default deleteDeck;
