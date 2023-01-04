import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';

const PORT: Number = 3000;
const app = express();

app.use(express.json());

app.route('/decks')
	.get(async (req: Request, res: Response) => {
		const cards = await Deck.find();
		res.status(200).json(cards);
	})
	.post(async (req: Request, res: Response) => {
		const { title } = req.body;
		const newDeck = new Deck({
			title,
		});
		const createdDeck = await newDeck.save();
		res.status(200).json(createdDeck);
	});

mongoose.set('strictQuery', false);
mongoose
	.connect(
		'mongodb+srv://sanket:sanket@cluster0.utcxg0b.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('[ 🚀 ] DB is connected');
	});

app.listen(PORT, () => {
	console.log(`[ 🚀 ] Server running on ${PORT}`);
});
