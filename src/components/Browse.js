import React  from "react";
import BookCard from './Card';
 
export default function Browse({books}) {
  
   

  return (
    
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginLeft:"50px"}}>
    {books.map(book=><BookCard book={book}></BookCard>)}
    </div>
  
   
  )
}