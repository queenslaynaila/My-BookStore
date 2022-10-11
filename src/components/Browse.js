import React  from "react";
import BookCard from './Card';
 import { Link } from "react-router-dom";
export default function Browse({books}) {
  
   

  return (
   <div className="browse" style={{width:"90%",marginRight:"5%",marginLeft:"5%"}}>
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
    {books.map(book=><BookCard book={book}></BookCard>)}
    </div>
  
   </div>
  )
}