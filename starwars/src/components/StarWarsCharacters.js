import React from "react";
import "./StarWars.css";

const Character = props => {
  const char = props.character;
  return (
    <>
      <h2>{char.name}</h2>
      <ul>
        <li>Height: {char.height} cm</li>
        <li>Mass: {char.mas} cm</li>
        <li>Skin Color: {props.capital(char.skin_color)} </li>
        <li>Birth Year: {props.capital(char.birth_year)} </li>
        <li>Eye Color: {props.capital(char.eye_color)} </li>
        <li>Gender: {props.capital(char.gender)} </li>
        <li>Home World: {char.homeWorldName} </li>
      </ul>
    </>
  );
};

export default Character;
