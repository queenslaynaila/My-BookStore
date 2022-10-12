import React from "react";
import {Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
function NavBar({books}) {
  
  const navigate =  useNavigate();

  function handleSearch(event){
    event.preventDefault()
    const selected = books.find((book)=>book.name === event.target.search.value)
   
   selected ? navigate(`/category/${selected.id}`) :alert("Soory search another title")
  }
  return  (
      <div className="header">
        <div className="uppernav">
          <div className="logo">
            <h2 style={{fontWeight:"700px"}}>BOOKWORM.</h2>
          </div>
          <div className ="search-container">
            <form onSubmit={(event)=>handleSearch(event)}>
              <input id="search-bar" size="50px" type="text" placeholder="Search.." name="search" className="input"></input>
              <button className="searchbtn" type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div></div>
        </div>
        <nav className="topnavbar">
            <Link to="/">Home</Link>
            <Link to="/category">Categories</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/list">ReadingList</Link>
        </nav>
     </div>
  )
}

export default NavBar;
 
