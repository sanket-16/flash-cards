import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import createDeck from './api/createDecks';
import deleteDeck from './api/deleteDeck';
import getDecks, {TDeck} from './api/getDecks';
import './App.css';



function App() {
	const [deckTitle, setDeckTitle] = useState('');
	const [decks, setDecks] = useState<TDeck[]>([]);
	useEffect(() => {
		async function fetchDecks() {
      const fetchedDecks = await getDecks();
		  setDecks(fetchedDecks);
    }
    fetchDecks();
	}, []);
	async function handleCreateDeck(e: React.FormEvent) {
		e.preventDefault();
		const deck = await createDeck(deckTitle);
		setDecks([...decks, deck]);
		setDeckTitle('');
	}
	async function handleDelete(deckId: string) {
		deleteDeck(deckId)
		setDecks(decks.filter((deck) => deck._id !== deckId));
	}
	return (
		<div className='App'>
			<h2>Your Decks</h2>
			<ul className='decks'>
				{decks.map((deck) => (
					<li key={deck._id}>
						<Link className='text' to={`/decks/${deck._id}`}>{deck.title.length>10 ? deck.title.substring(0,10)+'...': deck.title}</Link>
						<button onClick={() => handleDelete(deck._id)}>
							X
						</button>
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateDeck}>
				<label htmlFor='deck-title'>Deck Title</label>
				<input
					type='text'
					name='deck-title'
					id='deck-title'
					value={deckTitle}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDeckTitle(e.target.value)
					}
				/>
				<button>Create Deck</button>
			</form>
		</div>
	);
}

export default App;
