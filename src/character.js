import CharacterShowItems from "./charactersItems";
import React, { useState, useEffect } from "react";

function Character() {
  const [charName, setCharName] = useState("");
  const [characters, setCharachters] = useState([]);

  const search = (arr) => {
    return arr.filter((ele) =>
      ele.displayName.toLowerCase().includes(charName)
    );
  };

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((resp) => resp.json())
      .then((data) => setCharachters(data.data));
    console.log(characters);
  }, []);

  if (!characters) {
    return <div>miss results...</div>;
  } else {
    return (
      <>
        <form>
          <label htmlFor="characterName">Character Name</label>
          <input
            type="text"
            id="characterName"
            onChange={(e) => {
              setCharName(e.target.value);
            }}
          />
          <button>Search</button>
        </form>
        <div>
          <CharacterShowItems data={search(characters)} />
        </div>
      </>
    );
  }
}

export default Character;
