import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import "./StarWars.css";

const CharacterList = props(
  <ul>
    {props.CharacterList.map(char => (
      <li>
        <StarWarsCharacters />
      </li>
    ))}
  </ul>
);

export default CharacterList;
