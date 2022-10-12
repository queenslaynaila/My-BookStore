import React from 'react'
 import { Link } from 'react-router-dom'
 
export default function Card({book}) {
  return (
      
    <div className="card">
    <Link>
        <img src={book.cover} alt=""/>
    </Link>
    <div className="content">
        <h3>
            <Link>{book.name}</Link>
        </h3>
        <span>{book.likes}likes</span>
        <Link style={{textDecoration:"none"}} to={`/category/${book.id}`}><button>VIEW MORE</button></Link>
        
    </div>
</div>
 
  )
}