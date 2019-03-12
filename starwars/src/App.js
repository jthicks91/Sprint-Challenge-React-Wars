import React, { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      // char: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // getResults = (charIdx, URL) => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ prevState => {
  //       }
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  capital = str => str.charAt(0).toUpperCase() + str.slice(1); // capitalize first letter of specifc props on starwarschars object

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          characters={this.state.starwarsChars}
          capital={this.capital}
        />
      </div>
    );
  }
}

export default App;
