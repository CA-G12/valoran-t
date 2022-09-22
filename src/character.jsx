import CharacterShowItems from "./charactersItems";
import React, { useState, useEffect } from "react";
import Side from "./sideSection";

function Character(props) {
  const [charName, setCharName] = useState("");
  const [characters, setCharacters] = useState([]);
 


  const search = (arr) => {
    return arr.filter((ele) =>
      ele.displayName.toLowerCase().includes(charName)
    );
  };
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.data));
  }, []);


    return (
      <div id="wrapper">
          <section className="search">
            <div className="form">
              <form>
              <label htmlFor="characterName">Character Name</label>
              <input
                type="text"
                id="characterBar"
                onChange={(e) => {
                  setCharName(e.target.value);
                }}
              />
              <button id="searchbutton">Search</button>
            </form>
          </div>
          <div className="chara-display">
        <CharacterShowItems data={search(characters)} selectedid={props.selectedid}/>
        <Side details={props.selectedid} image={props.image} id="bg"></Side>
          </div>
        </section>
      </div>
      
    );
  }


export default Character;