import React, { Component } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <Container textAlign="center">
        <SearchBox
          placeholder="Search monsters..."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Cards monsters={filterdMonsters} textAlign="center"></Cards>
      </Container>
    );
  }
}

export default App;
