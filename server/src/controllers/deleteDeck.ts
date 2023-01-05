import { Request, Response } from 'express';
import Deck from '../models/Deck';


async function deleteDeck(req: Request, res: Response) {
    const deckId = req.params.deckId;
    console.log(`[ ❌ ] ${deckId} deleted`)
    const deletedDeck = await Deck.findByIdAndDelete(deckId);
    res.status(200).json(deletedDeck);
}

export default deleteDeck;