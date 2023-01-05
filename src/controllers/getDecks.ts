import { Request, Response } from 'express';
import Deck from '../models/Deck';


async function getDecks(req: Request, res: Response){
    const decks = await Deck.find();
    res.status(200).json(decks);
}

export default getDecks;