function Movie( props)
{
const {url,title}=props
return(
    <div className="movie">
        <img  
        src= {url}
        />
        <h2>{title}</h2>
    </div>
)
}
export default Movie;