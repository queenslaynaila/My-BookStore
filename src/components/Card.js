import React from 'react'
 
 
export default function Card({book}) {
  return (
      
    <div class="card">
    <img src={book.cover} alt="Avatar" style={{width:"100%"}}></img>
    <div class="container">
      <h4><b>{book.name}</b></h4> 
      <button id='card-btn'>Read More</button>
    </div>
  </div>
 
  )
}