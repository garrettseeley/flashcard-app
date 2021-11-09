import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteDeck from "./handleDeleteDeck";

export default function DecksItem({ deck }) {
  const history = useHistory();

  return (
    <li key={deck.id} className="card">
      <div className="row">
        <h4 className="card-title col m-2">{deck.name}</h4>
        <p className="col-1 float-right mt-2">{deck.cards.length} cards</p>
      </div>
      <div>
        <p className="card-text m-2">{deck.description}</p>
      </div>
      <div className="row">
        <div className="col">
          <Link to={`/decks/${deck.id}`} className="btn btn-secondary m-2">
            <span className="oi oi-eye mr-1"></span>
            View
          </Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary m-2">
            <span className="oi oi-book mr-1"></span>
            Study
          </Link>
          <button
            className="btn btn-danger float-right m-2"
            onClick={(event) => {
              event.preventDefault();
              handleDeleteDeck(deck.id);
              history.go(0);
            }}
          >
            <span className="oi oi-trash"></span>
          </button>
        </div>
      </div>
    </li>
  );
}
