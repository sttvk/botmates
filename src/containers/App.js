import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setBots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredBots = bots.filter((bot) => {
    return bot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !bots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">BotMates</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList bots={filteredBots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
