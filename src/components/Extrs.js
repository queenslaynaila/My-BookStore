import React from 'react'
import { useParams,Link } from 'react-router-dom'
export default function Extrs({books}) {
    const params= useParams()
    const bookselected = books.find((book) => book.id === Number(params.id));
   
    
  return (
     <>
      
     <div className='grids' style={{gap:"10px"}}>
      <div class="first-third">
            <div  style={{height:"200px" }}>
                <img style={{height:"100%",borderRadius:"10px"}} src={bookselected.cover} alt="bookimg"></img>
          </div>
          <div style={{marginTop:"10px"}}>
            <h2>TYPE</h2>
            <p>{bookselected.type}</p>
          </div>
          <div style={{marginTop:"10px"}}>
            <h2>GENRE</h2>
             {bookselected.genre.map(genre=>{
              return <li>{genre}</li>
             })}
          </div>
          <div style={{marginTop:"10px"}}>
            <h2>TAGS</h2>
            {bookselected.tags.map(genre=>{
              return <li>{genre}</li>
             })}
          </div>
          <div style={{marginTop:"10px"}}>
            <h2>LANGUAGE</h2>
            {bookselected.language}
          </div>
          <div style={{marginTop:"10px"}}>
            <h2>GENRE</h2>
            {bookselected.tags.map(genre=>{
              return <li>{genre}</li>
             })}
          </div>
          <div style={{marginTop:"10px"}}>
            <h2>YEAR</h2>
            <p>{bookselected.year}</p>
          </div>
        </div>
      <div class="second-third">
        <div>
          <h2>DESCRIPTION</h2>
        </div>
        <div style={{marginTop:"10px"}}>{bookselected.summary}</div>
          <div style={{marginTop:"10px"}}>
            <h2>ASSOCIATED NAMES</h2>
             {bookselected.associated.map((name)=>{
              return <p>{name}</p>
             })}
          </div>
        </div>
      <div class="third-third">
          <div>
            <h2>UPDATES</h2>
            <ul>
              <li><Link>Forum</Link></li>
              <li><Link>Random Novel</Link></li>
              <li><Link>Book Finder</Link></li>
              <li><Link>Book Listing</Link></li>
              <li><Link>Book Ranking</Link></li>
              <li><Link>BookLists</Link></li>
            </ul>
          </div>
          <div>
            <h2>USER TOOLS</h2>
            <ul>
              <li><Link>Reading List</Link></li>
              <li><Link>Release Filtering</Link></li>
              <li><Link>Series Filtering</Link></li>
            </ul>
          </div>
                
                  
                  
              
              </div> 
   </div>
     
     </>
  )
}
