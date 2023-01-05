import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import createCard from './api/createCard';
import deleteCard from './api/deleteCard';
import getDeck from './api/getDeck';
import { TDeck } from './api/getDecks';

import './Deck.css';

function App() {
	const { deckId } = useParams();
	const [text, setText] = useState('');
	const [deck,setDeck] = useState<TDeck|undefined >()
	const [cards, setCards] = useState<String[]>([]);
	useEffect(() => {
		async function fetchDeck() {
			const fetchedDeck = await getDeck(deckId!);
			setDeck(fetchedDeck);
			setCards(fetchedDeck.cards);
		}
		fetchDeck();
	}, [deckId]);
	async function handleCreateCard(e: React.FormEvent) {
		e.preventDefault();
		const { cards: newCards } = await createCard(deckId!, text);
		setCards(newCards);
		setText('');
	}
	async function handleDelete(index: number) {
		const response = await deleteCard(deckId!,index);
		const newDeck = await response.json();
		setCards(newDeck.cards);
		
	}
	return (
		<div className='deck'>
			<h2>{deck?.title}</h2>
			<ul className='cards'>
				{cards.map((card, index) => (
					<li key={index}>
						{card}
						<button onClick={() => handleDelete(index)}>X</button>
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateCard}>
				<label htmlFor='card-text'>Card Text</label>
				<input
					type='text'
					name='card-text'
					id='card-text'
					value={text}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setText(e.target.value)
					}
				/>
				<button>Create Card</button>
			</form>
		</div>
	);
}

export default App;
