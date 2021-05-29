import React, {useState} from 'react';
import ReactDOM from 'react-dom';




function FristHookExample(){          //Hooks example for reduce the value.
const [count,setCount]= useState(5);

return(
  <div>
<p> you click {count} times </p>
<button onClick= {()=> setCount(count-1)} >
Click me </button>
  </div>
)


ReactDOM.render( 
  <FristHookExample /> ,
    document.getElementById("root")
  );

}
export default FristHookExample;