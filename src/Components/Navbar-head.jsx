import React, { useRef } from 'react'
import './Navbar-head.css'

const NavbarHead = () => {

   let navref=useRef(0);

  let ToggleBar=()=>{
       navref.current.classList.toggle("active")
  }






  return (
    <>
    <div className="NavHead">
      <div className="brand-title">
        D Fitness
      </div>
  
      <div className="__togglebutton" onClick={ToggleBar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div ref={navref} className="navbar-links">
            <ul>
                <li>Home</li>
                <li>Exercises</li>
                <li>Services</li>
                <li>Contact</li>
                 
            </ul>
      </div>
    </div>
            {/* <ul>
            <li className='facebook'><a href="#"><span className='fab fa-facebook'></span></a></li>                 
                 <li className='instagram'><a href="#"><span className='fab fa-instagram'></span></a></li>
            </ul> */}
       
    </>
    

  )
}

export default NavbarHead