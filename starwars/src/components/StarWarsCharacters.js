import React from "react";
import "./StarWars.css";

// props.capital refers to capital handler function that will captialize first leter of the skin, birth, eye color and gender props for a more pleasing aesthetic for the design//

const StarWarsCharacters = props => {
  const char = props.character;
  return (
    <React.Fragment>
      <h2>{char.name}</h2>
      <ul>
        <li>Height: {char.height} cm</li>
        <li>Mass: {char.mas} cm</li>
        <li>Skin Color: {props.capital(char.skin_color)} </li>
        <li>Birth Year: {props.capital(char.birth_year)} </li>
        <li>Eye Color: {props.capital(char.eye_color)} </li>
        <li>Gender: {props.capital(char.gender)} </li>
      </ul>
    </React.Fragment>
  );
};

export default StarWarsCharacters;
