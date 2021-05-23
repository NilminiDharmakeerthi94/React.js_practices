import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import './index.css';



function Welcome(props) {
  return <h1> hello, {props.name} </h1>;
}
function App () {
  return (
<div> <Welcome name="ama" />
<Welcome name= "dev" />
<Welcome name= "silva" />
</div>
  )
}
ReactDOM.render(
  <App />,
document.getElementById('root')
);
export default App;
