import {useState} from "react"

function App()
{
  const[background, setBackground]=useState("colors[i]")
  function change()
  {
    
    let colors=["red", "orange", "yellow", "pink", "purple"];
    for(let i=0;i<5;)
    {
      setBackground(colors[i]);
      i=i+1;
      if(i==5)
      {
        i=0;
      }
    }
  }
  return(
    <div className="changer" style={{backgroundColor:background}}>
      <button onClick={change}>Change</button>
    </div>
  )
}
export default App;