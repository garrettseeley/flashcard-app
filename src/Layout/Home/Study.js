import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Card from "../Cards/Card";

export default function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

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
              Study
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h2>Study: {deck.name}</h2>
      </div>
      <div>
          <Card cards={deck.cards} />
      </div>
    </div>
  );
}
