import React from 'react'
import shelf from "../assets/homepage.png"
 
export default function Home() {
   
  return (
      <>
       <div className='homepage'>
         <div className='welcomediv'>
           <h1 className='welcome-text'><b>Find your<br></br> best Friend</b></h1>
            <p className='sub-welcome-text'>Not sure what to read?Explore our catalogue of public books with our editors and find your next fave book</p>
           <button className='explore-btn'>EXPLORE ALL</button>
          </div>
        <div className='homesection2'>
          <img className='homeimage'  src={shelf} alt="shelf"></img>
        </div>
      </div>
      </>
  )
}
