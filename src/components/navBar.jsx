import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faBars} from '@fortawesome/free-solid-svg-icons'; 
import sf from "./img/sf-princ.png"; 
import CartWidget from "./CartWidget"; 
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar=()=>{
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
          <div className={`div ${displayWebMenu ? '' : 'hide-menu'}`}>
            <nav className="navbar-container">
              <ul className="ul-header">
                <Link to= "/"><li className="li-navbar"><a href="#" className="link">Inicio</a></li></Link> 
                <Link to= "/AllProducts"><li className="li-navbar"><a href="#" className="link">Productos <span className="arrow"></span> </a></li></Link>
                <Link><li className="li-navbar"><a href="#" className="link">Blog</a></li></Link>
                <Link><li className="li-navbar"><a href="#" className="link">Contacto</a></li></Link>
              </ul>
            </nav>
            <div className="img-logo">
              <Link to="/login"><img src={sf} alt="logo" /></Link>
            </div>
            <div className="cart-widget">
              <CartWidget/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default NavBar;
