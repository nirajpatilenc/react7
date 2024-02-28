import Child from './Child'
function App()
{
  let name="Bhumi", name1= "Swapnil" , name2="Niraj";
  let age=1, age1=29 , age2=32;
  return(
    <div>
    <Child na={name} age={age}/>
    <Child na={name1} age={age1}/>
    <Child na={name2} age={age2}/>
    </div>
  )
}
export default App  