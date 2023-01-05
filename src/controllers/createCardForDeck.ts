import { Request, Response } from 'express';
import Deck from '../models/Deck';

async function createCardForDeck(req: Request, res: Response) {
	const deckId = req.params.deckId;
	const deck = await Deck.findById(deckId);
	if (!deck)
		return res.status(400).json({ error: 'no deck with this id exists' });
	const { cardText } = req.body;
	deck.cards.push(cardText);
	const createdDeck = await deck.save();
	console.log(`[ ✅ ] ${createdDeck._id} updated`);
	res.status(200).json(createdDeck);
}

export default createCardForDeck;
