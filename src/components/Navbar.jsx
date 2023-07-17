import React, {useRef} from 'react'
import Button from './Button'
import './Navbar.css'

import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'



export const Navbar = () => {
     const overlayDivininRefi=useRef()
     console.log(overlayDivininRefi.current)


const menyunuAc = e => {
    if(e.target.classList.contains('menyunuacma-iconu')) {
        overlayDivininRefi.current.classList.add('aktiv')
    }   
} 
const menyunubagla = e => {
    if(e.target.classList.contains('x-isaresi')) {
        overlayDivininRefi.current.classList.remove('aktiv')
    }   
} 



  return (
    <>  
  <div className="overlay" ref={overlayDivininRefi}>
 <button onClick={menyunubagla} className='x-isaresi'><AiOutlineClose/></button>
    
    <div className="nav-links">
    <Link className="nav-link linkler" aria-current="page" to="/">Home</Link>
    <Link className="nav-link linkler" to="/cars">Cars</Link>
    <Link className="nav-link linkler" to="/booking">Booking</Link>
    <Link className="nav-link linkler" to="/myaccount">My Account</Link>
    <Link className="nav-link linkler" to="/contact">Contac Us</Link>
    <Link className="nav-link linkler" to="/news">News</Link>
    <Link className="nav-link linkler" to="/about">About Us</Link>


    </div>
</div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<div className='esas-logo'> <img  src='https://res.cloudinary.com/dcum9qzc3/image/upload/v1688039077/logo_lti9zv.png'></img></div>
<button onClick={menyunuAc} className="navbar-toggler menyunuacma-iconu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FaBars className='bars-icon' />
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link linkler" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link linkler" to="/cars">Cars</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link linkler" to="/booking">Booking</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link linkler" to="/myaccount">My Account</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link linkler" to="/contact">Contac Us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link linkler" to="/news">News</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link linkler" to="/about">About Us</Link>
    </li>
  </ul>
  <div className='navbar-butonu'>  <Button butonunIcindekiDeyer="Sign In" className='navbardaki-button'/>     </div>
</div>
</div>
</nav>
     </>
  

  )
}
export default Navbar 