import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import { bots } from './bots';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
                <div>
                  <Card id={bots[0].id} name={bots[0].name} email={bots[0].email}/>
                  <Card id={bots[1].id} name={bots[1].name} email={bots[1].email}/>
                  <Card id={bots[2].id} name={bots[2].name} email={bots[2].email}/>
                </div>
                , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bi   t.ly/CRA-vitals
reportWebVitals();