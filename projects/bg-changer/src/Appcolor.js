import { useState } from "react";
function Appcolor()
{
    const[background, setBackground]= useState('random_color');
    function change()
    {
      console.log(Math.round(Math.random()*10000000).toString(16))
      const random_color="#" + Math.round(Math.random()*10000000).toString(16);
      console.log(random_color)
      setBackground(random_color);
      //let a= ['red', 'yellow', 'pink', 'green', 'orange', 'blue']
      //for(let i=0;i>=5;i++)
      //{
        //let random_color = a[i];
        //setBackground(random_color);
      //}
      

    }
 return(
  <div className="changer" style={{backgroundColor:background}}>
      <button onClick={change} >change</button> 

  </div>
 )
}
export default Appcolor;