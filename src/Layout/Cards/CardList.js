import React from "react";
import CardItem from "./CardItem";

export default function CardList({ cards = [] }) {
  // sets variable of listItems to be called in an un ordered list
  const listItems = cards.map((card) => <CardItem card={card} key={card.id} />);
  return (
    <div>
      <div className="mt-4">
        <h3>Cards</h3>
      </div>
      <ul className="list-unstyled">{listItems}</ul>
    </div>
  );
}
