import React   from 'react'
import BookCard from './Card';
import { Link } from 'react-router-dom';
 
export default function Categories({books}) {
     
  
  return (
    <> 
     
    <div style={{marginLeft:"20px",marginRight:"20px"}}>
      <h2 style={{borderBottom:"1px solid black",textAlign:"center",padding:"10px",fontFamily:"cursive"}}>BROWSE GENRES</h2>
    </div>
      <div className='category-section' >
        <div className='genre-selector'  >
            <nav>
              <h4>Categories</h4>
              <ul  >
                <li>
                  <Link to="romance">Romance</Link>
                </li>
                <li>
                  <Link to="historical">Historical</Link>
                </li>
                <li>
                  <Link to="politics">Politics</Link>
                </li>
                <li>
                  <Link to="fantasy'">Fantasy</Link>
                </li>
                <li>
                  <Link to="action">Action</Link>
                </li>
                <li>
                  <Link to="slice of life">Slice of life</Link>
                </li>
                <li>
                  <Link to="adventure">Adventure</Link>
                </li>
                <li>
                  <Link to="action">Action</Link>
                </li>
                <li>
                  <Link to="action">Adventure</Link>
                </li>
              </ul>
            </nav>
        </div>
        
       
        <div className="ui grid">
        {books? books.map(book=><BookCard book={book}></BookCard>):<h2>loading</h2>}
            </div>
         
        
         
        
      </div>
    </>
  )
}