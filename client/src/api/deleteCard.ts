import { API_URL } from './config';

async function deleteCard(deckId: String, index: Number) {
	const updatedDeck = await fetch(`${API_URL}/decks/${deckId}/${index}`, {
		method: 'DELETE',
	});
	return updatedDeck;
}

export default deleteCard;
