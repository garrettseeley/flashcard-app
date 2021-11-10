import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteDeck from "./handleDeleteDeck";

export default function DeckView({ deck }) {
  const history = useHistory();

  return (
    <div>
      <div>
        <h4>{deck.name}</h4>
      </div>
      <div>
        <p>{deck.description}</p>
      </div>
      <div>
        <div>
          <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2">
            <span className="oi oi-pencil mr-1"></span>
            Edit
          </Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
            <span className="oi oi-book mr-1"></span>
            Study
          </Link>
          <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary mr-2">
            <span className="oi oi-plus mr-1"></span>
            Add Cards
          </Link>
          <button
            className="btn btn-danger float-right m-2"
            onClick={(event) => {
              event.preventDefault();
              handleDeleteDeck(deck.id);
              history.push("/");
            }}
          >
            <span className="oi oi-trash"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
