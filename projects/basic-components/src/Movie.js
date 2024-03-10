function Movie( props)
{
    function print ()
    {
        alert("button clicked "+ props.title)
    }

return(
    <div className="movie">
        <img  
        src= {props.url}
        />
        <h2>{props.title}</h2>
        <h2>{props.rating}</h2>
        <h2>{props.children}</h2>
        <button onClick={print }>see the movie </button>>
    </div>
)
}
export default Movie;


