import React from "react";
import { Link } from "react-router-dom";
import DeckForm from "../Decks/DeckForm";

export default function CreateDeck() {
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
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h2>Create Deck</h2>
      </div>
      <DeckForm isNew={true}/>
    </div>
  );
}
