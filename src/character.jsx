import CharacterShowItems from "./charactersItems";
import React, { useState, useEffect } from "react";

class Character extends React.Component {
    state = {
      characters: null,
      charName: ""
    }

   search = (arr) => {
    return arr.filter((ele) =>
      ele.displayName.toLowerCase().includes(this.state.charName)
    );
  };
 

     componentDidMount() {
       fetch("https://valorant-api.com/v1/agents")
      .then((resp) => resp.json())
      .then(data => data.data)
      .then((characters) => this.setState( { characters } ));
  }


  render(){
    const {characters} = this.state;
    return (
      characters? 
      <div id="wrapper">

        <section className="search">
          <div className="form">
          <form>
          <label htmlFor="characterName">Character Name</label>
          <input
            type="text"
            id="characterBar"
            onChange={(e) => this.setState({charName: e.target.value})
            }
          />
          <button id="searchbutton">Search</button>
        </form>

          </div>
        <div className="chara-display">
          <CharacterShowItems data={this.search(characters)} />
        </div>
        </section>
        <section id="bg">
        </section>
      </div>:
      <h2>Loading</h2>
      
    );
  }
    
  }


export default Character;