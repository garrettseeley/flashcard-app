import React from "react";
import { Link, useHistory } from "react-router-dom";
import handleDeleteCard from "./handleDeleteCard";

export default function CardItem({ card }) {
  const history = useHistory();

  //simply makes each card into a list item
  return (
    <li key={card.id} className="card">
      <div className="row">
        <p className="col m-2 ml-3">{card.front}</p>
        <p className="col">{card.back}</p>
      </div>
      <div>
        <button
          className="btn btn-danger float-right m-1 mr-1"
          onClick={(event) => {
            event.preventDefault();
            handleDeleteCard(card.id);
            history.go(0);
          }}
        >
          <span className="oi oi-trash"></span>
        </button>
        <Link
          to={`/decks/${card.deckId}/cards/${card.id}/edit`}
          className="btn btn-secondary m-1 float-right"
        >
          <span className="oi oi-pencil mr-1"></span>Edit
        </Link>
      </div>
    </li>
  );
}
