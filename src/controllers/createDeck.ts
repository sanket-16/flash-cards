import { Request, Response } from 'express';
import Deck from '../models/Deck';

async function createDeck(req: Request, res: Response) {
    const { title } = req.body;
    const newDeck = new Deck({
        title,
    });
    const createdDeck = await newDeck.save();
    console.log(`[ ✅ ] ${createdDeck._id} created`);
    res.status(200).json(createdDeck);
}

export default createDeck;