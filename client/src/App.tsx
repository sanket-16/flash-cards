import React, { useState, useEffect } from 'react';
import './App.css';

type TDeck = {
  title: string;
  _id: string;
}

function App() {
	const [deckTitle, setDeckTitle] = useState('');
	const [decks, setDecks] = useState<TDeck[]>([]);
	useEffect(() => {
		async function fetchDecks() {
			const response = await fetch('http://localhost:3000/decks');
			const fetchedDecks = await response.json();
			setDecks(fetchedDecks);
		}
    fetchDecks();
	}, []);
	async function handleCreateDeck(e: React.FormEvent) {
		e.preventDefault();
		await fetch('http://localhost:3000/decks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: deckTitle,
			}),
		});
		setDeckTitle('');
	}
	return (
		<div className='App'>
      <ul className='decks'>
      {decks.map(deck=> <li key={deck._id}>{deck.title}</li>)}
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
