import React from "react";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
function NavBar({books}) {
  const navigate =  useNavigate();

  function handleSearch(event){
    event.preventDefault()
    const selected = books.find((book)=>book.name === event.target.search.value)
   
   selected ? navigate(`/category/${selected.id}`) :alert("Soory search another title")
  }

  return  (
       <div className="fixednav">
          <div className="uppernav">
              <div><h6>BOOKWORM.</h6></div>
              <div className ="search-container">
                <form onSubmit={(event)=>handleSearch(event)}>
                    <input id="search-bar" size="50px" type="text" placeholder="Search.." name="search"></input>
                    <button id="search-btn" type="submit"><i className="fa fa-search"></i></button>
                  </form>
              </div>
              <div><button  className="toggle-mode-btn">DARKMODE</button></div>
          </div>
          <div className="menu-outer">
            <div className="table">
              <ul id="horizontal-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
                <li>
                  <Link to="/category">Categories</Link>
                </li>
                <li>
                  <Link to="/list">Reading List</Link>
                </li>
              </ul>
            </div>
          </div>
        </ div>
     
  )
}

export default NavBar;
 
