import { useParams } from "react-router-dom";

function Deck() {
	const {deckId} = useParams();

	return <div>{deckId}</div>;
}

export default Deck;
