import booksData from './data'
import Book from './Book'
function Book1() 
{
    return(
        <div className= "Book1">
        {
           booksData.map((m)=> (<Book url={m.image} title={m.title}  rating={m.rating} >
          </Book>  
        ))
        }
        </div>
    )
}
export default Book1;