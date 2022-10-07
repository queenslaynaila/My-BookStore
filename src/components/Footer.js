import React from 'react'

export default function Footer() {
  return (
    <section className="footer-section">
      <footer>
         <div className='companylogo' style={{marginLeft:"20px"}}>
            <h3>BOOKWARM</h3>
         </div>
         <div className='footer-links'>
             <div className='About'>
               <p>About us</p>
               <ul>
                  <li className="link-item"><a href="/#">FAQ</a></li>
                  <li className="link-item"><a href="/#">About Us</a></li>
                  <li className="link-item"><a href="/#">Contact</a></li>
                  <li className="link-item"><a href="/#">Tems and privacy</a></li>
               </ul>
             </div>
             <div className='Discover'>
               <p>Discover</p>
               <ul>
                  <li className="link-item"><a href="/#">FAQ</a></li>
                  <li className="link-item"><a href="/#">About Us</a></li>
                  <li className="link-item"><a href="/#">Contact</a></li>
                  <li className="link-item"><a href="/#">Tems and privacy</a></li>
               </ul>
             </div>
             <div className='My-Account'>
               <p>My Account</p>
               <ul>
                  <li className="link-item"><a href="/#">FAQ</a></li>
                  <li className="link-item"><a href="/#">About Us</a></li>
                  <li className="link-item"><a href="/#">Contact</a></li>
                  <li className="link-item"><a href="/#">Tems and privacy</a></li>
               </ul>
             </div>
             <div className='help'>
               <p>Help</p>
               <ul>
                  <li className="link-item"><a href="/#">FAQ</a></li>
                  <li className="link-item"><a href="/#">About Us</a></li>
                  <li className="link-item"><a href="/#">Contact</a></li>
                  <li className="link-item"><a href="/#">Tems and privacy</a></li>
               </ul>
             </div>
         </div>
      </footer>
      <div>
      <div className='copyright'>
        <div className='rights'>
          <p>@2022 All rights reserved</p>
        </div>
        <div className='footericons'>
            <a href="/#"><i className="fa-brands fa-facebook"></i></a>
            <a href="/#"><i className="fa-brands fa-instagram"></i></a>
            <a href="/#"><i className="fa-brands fa-twitter"></i></a>
            <a href="/#"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
      </div>
    </section>
  )
}
 