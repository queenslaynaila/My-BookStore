import React from 'react'
import shelf from "../assets/homepage.png"
import { useNavigate } from "react-router-dom"
export default function Home() {
  const navigate =  useNavigate();;
  function handleClick() {
    navigate("/category");
  }
  return (
      <>
      
       <div className='homepage'>
         <div className='welcomediv'>
           <h1 className='welcome-text'>Find your<br></br> best Friend</h1>
            <p className='sub-welcome-text'>Not sure what to read?Explore our catalogue of public books with our editors and find your next fave book</p>
           <button onClick={(e)=>handleClick(e)} className='explore-btn'>EXPLORE ALL</button>
          </div>
        <div className='homeimage'>
          <img className='homeimage'  src={shelf} alt="shelf"></img>
        </div>
      </div>
      
      <div className='quote'  style={{backgroundColor:"#EEEBE4"}}>
         <h3 className='quotetext'>Quote Of The Day</h3>
         <p  className='quotetext'>The more you read the more things you will know.The more that youl learn the more places that youl go</p>
         <p className='quotetext'>Dr Seus</p>
      </div>
      <div className='contactform'  >

       <div className='newsletertext'>
          <h3>Subscribe To<br></br>Our Newsletter</h3>
        </div>
        <div className='email'>
          <p>Enter your email adress to receive news and updates from us</p>
          <div className='newsletterform'>
            <form>
              <input id='newsletterinput' placeholder='enter mail here'></input>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </form>
          </div>
        </div>
      </div>
      
      </>
  )
}
