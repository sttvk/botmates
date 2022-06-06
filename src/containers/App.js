import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
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
    const { bots, searchfield } = this.state;
    const filteredBots = bots.filter(bot => {
      return bot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !bots.length ? <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">BotMates</h1>
          <SearchBox searchChange={ this.onSearchChange }/>
          <Scroll>
            <CardList bots = { filteredBots } />
          </Scroll>
        </div>
      );
  }
}

export default App;