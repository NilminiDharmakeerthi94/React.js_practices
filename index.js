import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//const element = <h1> hello world </h1>
//console.log(element);
//ReactDOM.render(element, document.getElementById('root'));

const name = 'Ama Perera';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
