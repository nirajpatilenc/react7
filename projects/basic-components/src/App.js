//function App() {
  //return (
  // <h1>Hello World</h1>
 // )
//}
//export default App;
import Movies from './Movies'
import { Component } from "react";
class App extends Component
{
  render()
  {
    return(
      <div className="app">
        <h1>Hi everyone. I am Hindavi S Patil.</h1>
       <Movies/>
       <Movies/>
       <Movies/>
       <Movies/>
      </div>
    
    )
  }
}
export default App