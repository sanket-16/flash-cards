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
        console.log(req.body)
		const { title } = req.body;
		const newDeck = new Deck({
			title,
		});
		const createdDeck = await newDeck.save();
		res.status(200).json(createdDeck);
	});

mongoose.set('strictQuery', false);
mongoose
	.connect(process.env.MONGO_DB!)
	.then(() => {
		console.log('[ 🚀 ] DB is connected');
	});

app.listen(PORT, () => {
	console.log(`[ 🚀 ] Server running on ${PORT}`);
});
