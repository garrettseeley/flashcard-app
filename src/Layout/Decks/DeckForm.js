import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

export default function DeckForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const newDeck = { name: name, description: description };

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSubmit = async function (event) {
    event.preventDefault();
    let response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label w-100">
            Name
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Deck Name"
              onChange={handleNameChange}
              value={name}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description" className="form-label w-100">
            Description
            <textarea
              className="form-control"
              type="text"
              id="description"
              name="description"
              placeholder="Brief description of the deck"
              onChange={handleDescriptionChange}
              value={description}
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-secondary mr-2"
            onClick={(event) => {
              event.preventDefault();
              history.push("/");
            }}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
