import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardForm from "../Cards/CardForm";

export default function AddCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

  //sets the deck as a single deck to use
  useEffect(() => {
    const abortController = new AbortController();
    async function singleDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
    }
    singleDeck();
  }, [deckId]);

  return (
    <div>
      <div className="row">
        <nav aria-label="breadcrumb" className="col">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home mr-1"></span>Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
      </div>
      <div>
          <h2>{deck.name}: Add Card</h2>
      </div>
      <CardForm deckId={deckId} isNew={true} />
    </div>
  );
}
