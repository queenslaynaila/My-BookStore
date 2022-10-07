import React  from "react";
import BookCard from './Card';
 
export default function Browse({books}) {
  
   

  return (
   <>
   
     <div>
        <div   className=" row critically-acclaimed" style={{ marginLeft:"20px",marginRight:"20px"}}>
          <h3 style={{fontFamily:"cursive",padding:"10px"}}>EDITORS CHOICE</h3>
          <p>These works have been recognized by one of the most prestigious literary awards (2000 to present).</p>
          <div className="ui grid" style={{gap:"10px"}}>
          {books? books.map(book=><BookCard key={book.id} id={book.id} book={book}></BookCard>):<h2>loading</h2>}
          </div>
          
        </div>
        <div style={ {marginLeft:"20px",marginRight:"20px"}}  >
           
          <div className='booksoffer'  >
             
             <h3>Books With Offer</h3>
            <div className="ui grid"style={{gap:"10px"}}>
            {books? books.map(book=><BookCard key={book.id} id={book.id} book={book}></BookCard>):<h2>loading</h2>}
            </div>
          </div>
        </div>
     </div>
   </>
  )
}