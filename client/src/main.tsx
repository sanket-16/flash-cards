import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Deck from './Deck';
import Header from './Header';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
  {
		path: '/decks/:deckId',
		element: <Deck />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Header/>
		<RouterProvider router={router} />
	</React.StrictMode>
);
