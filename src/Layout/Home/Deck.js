import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardList from "../Cards/CardList";
import DeckView from "../Decks/DeckView";

export default function Deck() {
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
            <li className="breadcrumb-item active" aria-current="page">
              {deck.name}
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <DeckView deck={deck} />
        <CardList cards={deck.cards} />
      </div>
    </div>
  );
}
