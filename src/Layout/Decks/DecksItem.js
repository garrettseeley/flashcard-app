import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteDeck from "./handleDeleteDeck";

export default function DecksItem({ deck }) {
  const history = useHistory();

  //simply makes each deck into a list item
  return (
    <li key={deck.id} className="card">
      <h4 className="card-title m-2">
        {deck.name}{" "}
        <p className="float-right small">{deck.cards.length} cards</p>
      </h4>
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
