import { Request, Response } from 'express';
import Deck from '../models/Deck';


async function deleteCardDeck(req: Request, res: Response) {
    const {deckId,cardIndex} = req.params;
    console.log('hit')
    const deck = await Deck.findById(deckId);
    if(!deck) return res.status(400).json({error:'No Card Deck found'})
    deck.cards.splice(parseInt(cardIndex), 1)
    const updatedDeck = await deck.save()
    console.log(`[ ✅ ] ${deckId} updated`)
    res.status(200).json(updatedDeck);
}

export default deleteCardDeck;