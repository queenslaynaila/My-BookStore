import React from "react";
import {Link } from "react-router-dom";
 
function NavBar() {
  

  return  (
      <div className="header">
        <div className="uppernav">
          <div className="logo">
            <h2>BOOKWORM.</h2>
          </div>
          <div className ="search-container">
            <form>
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
 
