import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import "./StarWars.css";

const CharacterList = props => (
  <ul>
    {props.characters.map(c => (
      <li className="character" key={c.url}>
        <StarWarsCharacters character={c} capital={props.capital} />
      </li>
    ))}
  </ul>
);

export default CharacterList;
