import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api";
import DecksList from "../Decks/DecksList";

export default function Home() {
  const [decks, setDecks] = useState([]);

  // uses listDecks to import the list of decks to set the array of decks

  useEffect(() =>{
    async function loadDecks() {
        const loadedDecks = await listDecks();
        setDecks(loadedDecks)
    }
    loadDecks();
    
  }, [])
  
  
    return (
    <div>
      <div>
        <Link to="/decks/new">
          <button className="btn btn-secondary mx-2 my-2">
            <span className="oi oi-plus mr-2"></span>Create Deck
          </button>
        </Link>
      </div>
      <div>
          <DecksList decks={decks}/>
      </div>
    </div>
  );
}
