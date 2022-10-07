 import React from 'react'
  import { Link } from 'react-router-dom'
  
 export default function Card({book}) {
  
   
   
   return (
    <div   className="book read"  style={{width: "150px",height:"250px"}}>
    <div className="cover"style={{height: "150px"}} >
      <img src={book.cover} alt="kkkkk"></img>
    </div>
    <div className="description">
      <p style={{fontSize:"14px"}}>{book.name}</p>
      <div style={{display:"flex",justifyContent:"space-between"}}>
       <div><small>{book.likes}likes</small></div>
       <div><small><Link to={`/category/${book.id}`}>More</Link></small></div>
      </div>
    </div>
  </div>
   )
 }
 