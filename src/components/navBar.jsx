import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faBars} from '@fortawesome/free-solid-svg-icons'; 
import CartWidget from "./CartWidget"; 
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar=({contador})=>{
  const isMobile = window.innerWidth <= 768
  const [displayWebMenu, setDisplayWebMenu] = useState(!isMobile)
  
  function toggleActiveMenu () {
    setDisplayWebMenu(!displayWebMenu)
  }

  return(
    <>
    <div className="header-ecommerce">
      <div className="header-container">
        <div className="btn-menu">
          <FontAwesomeIcon icon={faBars} size="lg" className="hid" onClick={ toggleActiveMenu } />
          <span className='cart-mobile'>
            <CartWidget/>
            </span>
        </div>
          <div className={`div ${displayWebMenu ? '' : 'hide-menu'}`}>
            <nav className="navbar-container">
              <ul className="ul-header">
                <Link className='link' to= "/">
                  <li className="li-navbar">INICIO</li>
                </Link>
                <hr className='linea-div' />
                <Link to= "/AllProducts" className='link'>
                  <li className="li-navbar">PRODUCTOS</li>
                </Link>
                  <hr className='linea-div'/>
                {/* <Link className="link">
                 <li className="li-navbar"> ACERCA DE NOSOTRAS </li>
                </Link> */}
                <hr className='linea-div'/>
                <Link className='link' to= "/login">
                  <li className="li-navbar admin">ADMIN</li>
                </Link>
                <hr className='linea-div' />
              </ul>
            </nav>
            <div className="img-logo">
              <Link to="/login" className='link'>
                <p className='p-logo'>SF |</p>
              </Link>
              <div className="cart-widget">
                <CartWidget agregar={contador}/>
              </div> 
            </div>
          </div>
       
      </div>
    </div>
    </>
  )
}
export default NavBar; 

