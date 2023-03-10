import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

import getDeck from './controllers/getDeck';
import getDecks from './controllers/getDecks';
import createDeck from './controllers/createDeck';
import deleteDeck from './controllers/deleteDeck';
import createCardForDeck from './controllers/createCardForDeck';
import deleteCardDeck from './controllers/deleteCardDeck';

config();

const PORT: Number = Number(process.env.PORT) || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.route('/decks')
	.get(getDecks)
	.post(createDeck);

app.route('/decks/:deckId')
	.get(getDeck)
	.post(createCardForDeck)
	.delete(deleteDeck);

app.route('/decks/:deckId/:cardIndex')
	.delete(deleteCardDeck);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB!).then(() => {
	console.log('[ 🚀 ] DB is connected');
});

app.listen(PORT, () => {
	console.log(`[ 🚀 ] Server running on ${PORT}`);
});
