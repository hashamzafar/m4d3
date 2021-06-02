
import SingleBook from './SingleBook'



const BookList = ({books})=> {
    return (
      books.map((book) => {
         return(
             <SingleBook img= {book.img} title = {book.title}/>
       
         )
            
    } 
       
    )
   
    )
}
export default BookList
