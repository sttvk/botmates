import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ bots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredBots = this.state.bots.filter(bots => {
      return bots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">BotMates</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <CardList bots = { filteredBots } />
      </div>
    );
  }
}

export default App;