import createDeck from './createDecks';
import deleteDeck from './deleteDeck';
import getDecks from './getDecks';
import getDeck from './getDeck';
import createCard from './createCard';
import deleteCard from './deleteCard';

const API_URL = 'https://flashcards-demo-api.vercel.app';

export type TDeck = {
  title: string;
  cards: string[];
  _id: string;
};

export {
  API_URL,
  getDecks,
  deleteDeck,
  createDeck,
  createCard,
  deleteCard,
  getDeck,
};
