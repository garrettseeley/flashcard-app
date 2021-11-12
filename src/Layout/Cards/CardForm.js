import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

export default function CardForm({
  cardId,
  deckId,
  editFront = "",
  editBack = "",
  isNew,
}) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const history = useHistory();
  const newCard = { front: front, back: back };
  const upCard = { front: front, back: back, id: cardId, deckId: deckId };

  const handleFrontChange = (event) => setFront(event.target.value);
  const handleBackChange = (event) => setBack(event.target.value);

  //in case of edit, sets name and description to the current values
  //but with them defaulting to empty above, they would be empty if creating card
  useEffect(() => {
    setFront(editFront);
    setBack(editBack);
  }, [editFront, editBack]);

  const handleCreateSubmit = async function (event) {
    event.preventDefault();
    let response = await createCard(deckId, newCard);
    setFront("");
    setBack("");
    console.log(response);
  };

  const handleUpdateSubmit = async function (event) {
    event.preventDefault();
    let response = await updateCard(upCard);
    history.push(`/decks/${deckId}`);
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={isNew ? handleCreateSubmit : handleUpdateSubmit}>
        <div>
          <label htmlFor="front" className="form-label w-100">
            Front
          </label>
          <textarea
            type="text"
            className="form-control"
            id="front"
            name="front"
            placeholder="Front side of card"
            onChange={handleFrontChange}
            value={front}
          />
        </div>
        <div>
          <label htmlFor="back" className="formlabel w-100">
            Back
          </label>
          <textarea
            type="text"
            className="form-control"
            id="back"
            name="back"
            placeholder="Back side of card"
            onChange={handleBackChange}
            value={back}
          />
        </div>
        <div>
          <button
            className="btn btn-secondary mr-2"
            onClick={(event) => {
              event.preventDefault();
              history.push(`/decks/${deckId}`);
            }}
          >
            {isNew ? "Done" : "Cancel"}
          </button>
          {isNew && (
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          )}
          {!isNew && (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
