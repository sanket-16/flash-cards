import { Request, Response } from 'express';
import Deck from '../models/Deck';

async function getDeck(req: Request, res: Response) {
	const deckId = req.params.deckId;
	const decks = await Deck.findById(deckId);
	res.status(200).json(decks);
}
export default getDeck;
