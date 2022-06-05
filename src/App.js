import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { bots } from './bots';

const App = () => {
  return (
    <div className="tc">
      <h1>BotMates</h1>
      <SearchBox />
      <CardList bots = { bots } />
    </div>
  );
}

export default App;