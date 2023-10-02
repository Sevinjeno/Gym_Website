import React, { useRef } from 'react'
import './Navbar-head.css'
import {Link} from "react-scroll"


const NavbarHead = () => {

   let navref=useRef(0);

  // let ToggleBar=()=>{
  //      navref.current.classList.toggle("active")
  // }

  return (
    <>
    <div className="NavHead" >
  
      {/* <div className="__togglebutton" onClick={ToggleBar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> */}

      <div ref={navref} className="navbar-links">
       
      <span>D Fitness</span>
            <ul>
               
                <li><Link to="home"  smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link to="Exercises" smooth={true} offset={50} duration={500} >Exercises</Link></li>
                <li className='disabled'>Services</li>
                <li><Link to="Contact" smooth={true} offset={50} duration={500}>Contact</Link></li>
                 
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