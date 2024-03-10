import { useState } from "react";
import './index.css';

function App()
{
  const [c,setCount]=useState(0) 

  
  function add()
  {
   setCount(c+1); // it will change c value to c+1 value and re-render the component. 
    if(c>24)
    {
      setCount(25);
      window.alert("it is maximum limit");
    }
  }
    function sub()
    {
     setCount(c-1); // it will change c value to c-1 value and re-render the component. 
       if(c==0)
       {
         setCount(0);
         window.alert("it is minimum limit");
       }
    }
    return(
    <div className="count">
      <h1><p>Count: {c}</p></h1>
      <button onClick= {add} className="add"> + </button>
      <button onClick= {sub} className="add"> - </button> <br></br>
      <button onClick= {()=> setCount(0)} className="add"> Reset </button>
    </div>
  )
}
export default App;