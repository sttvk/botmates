import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { bots } from './bots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: bots,
      searchfield: ''
    };
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