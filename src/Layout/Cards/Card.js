import React, { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

export default function Card({ cards = [] }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardState, setCardState] = useState(true);
  const history = useHistory();
  const { deckId } = useParams();

  if (cards?.length <= 2) {
    return (
      <div>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          <span className="oi oi-plus mr-2"></span>Add Cards
        </Link>
      </div>
    );
  }

  //Determines which side of the card is showing
  const cardInfo = cardState
    ? cards[currentCard].front
    : cards[currentCard].back;

  //handles the on flip event
  function handleFlip(event) {
    event.preventDefault();
    setCardState(!cardState);
  }

  //handle the next event
  function handleNext(event) {
    event.preventDefault();
    setCardState(true);
    if (currentCard + 1 < cards.length) {
      setCurrentCard(currentCard + 1);
    } else {
      window.confirm(
        "Restart cards? \n \n Click 'cancel' to return to the home page."
      )
        ? history.go(0)
        : history.push("/");
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h4>
            Card {currentCard + 1} of {cards.length}
          </h4>
        </div>
        <div className="card-text">
          <p>{cardInfo}</p>
        </div>
        <div>
          <button
            onClick={(event) => handleFlip(event)}
            className="btn btn-secondary mr-2"
          >
            Flip
          </button>
          {!cardState && (
            <button
              onClick={(event) => handleNext(event)}
              className="btn btn-primary"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
