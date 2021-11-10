import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardForm from "../Cards/CardForm";
import { readDeck, readCard } from "../../utils/api";

export default function EditCard() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);

  //sets the deck as a single deck to use
  useEffect(() => {
    const abortController = new AbortController();
    async function singleDeck() {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
    }
    singleDeck();
  }, [deckId]);

  //sets the card to be edited as a single card
  useEffect(() => {
    const abortController = new AbortController();
    async function singleCard() {
      const response = await readCard(cardId, abortController.signal);
      setCard(response);
    }
    singleCard();
  }, [cardId]);

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
              Edit Card {card.id}
            </li>
          </ol>
        </nav>
      </div>
      <div>
          <h2>Edit Card</h2>
      </div>
      <CardForm 
        isNew={false}
        cardId={card.id}
        deckId={deck.id}
        editFront={card.front}
        editBack={card.back}
      />
    </div>
  );
}
