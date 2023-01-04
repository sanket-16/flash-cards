import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

import Deck from './models/Deck';

config();

const PORT: Number = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.route('/decks')
	.get(async (req: Request, res: Response) => {
		const decks = await Deck.find();
		res.status(200).json(decks);
	})
	.post(async (req: Request, res: Response) => {
        const { title } = req.body;
		const newDeck = new Deck({
            title,
		});
		const createdDeck = await newDeck.save();
        console.log(`[ ✅ ] ${createdDeck._id} created`);
		res.status(200).json(createdDeck);
	});

app.route('/decks/:deckId')
	.get(async (req: Request, res: Response) => {
		const deckId = req.params.deckId;
		const decks = await Deck.findById(deckId);
		res.status(200).json(decks);
	})
	.delete(async (req: Request, res: Response) => {
        const deckId = req.params.deckId;
        console.log(`[ ❌ ] ${deckId} deleted`)
		const deletedDeck = await Deck.findByIdAndDelete(deckId);
		res.status(200).json(deletedDeck);
	});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB!).then(() => {
	console.log('[ 🚀 ] DB is connected');
});

app.listen(PORT, () => {
	console.log(`[ 🚀 ] Server running on ${PORT}`);
});
