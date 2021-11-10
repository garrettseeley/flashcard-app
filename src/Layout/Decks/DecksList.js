import React from "react";
import DecksItem from "./DecksItem";

export default function DecksList({ decks }) {
  // sets variable of listItems to be called in an un ordered list
  const listItems = decks.map((deck) => (
    <DecksItem deck={deck} key={deck.id} />
  ));
  return <ul className="list-unstyled">{listItems}</ul>;
}
