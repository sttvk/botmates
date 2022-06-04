import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import { bots } from './bots';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(<CardList bots = { bots } />, document.getElementById('root'));

reportWebVitals();