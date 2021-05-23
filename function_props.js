import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import './index.css';




function App(props) {
return <h1> hello, {props.name} </h1>;
}
const element = <App name= "ama" />;
ReactDOM.render(               
 element,
  document.getElementById('root')
  
);
