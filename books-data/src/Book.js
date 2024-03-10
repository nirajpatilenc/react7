function Book(props)
{
    function fun1()
    {
        window.alert("you clicked "+props.title);
    }
    return(
       <div className="Book">
        < img src= {props.url}/>
        <h2>{props.title}</h2>
        <h2>{props.rating}</h2>
         <button onClick= {fun1}>See the movie</button>
       </div>
        
    )
}
export default Book;