import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faBars} from '@fortawesome/free-solid-svg-icons'; 
import sf from "./img/sf-princ.png"; 
import CartWidget from "./CartWidget"; 
import "./NavBar.css"; 


const NavBar=()=>{
    return(
        <>
        <div className="header-ecommerce">
            <div className="header-container">
                <div className="btn-menu">
                    <FontAwesomeIcon icon={faBars} size="lg" className="hid"/>
                    <small className="hid">MENU</small>
                    <div className="div">
                       <nav className="navbar-container">
                        <ul className="ul-header">
                            <li className="li-navbar"><a href="#" className="link">Inicio</a></li>
                            <li className="li-navbar"><a href="#" className="link">Productos <span className="arrow"></span> </a></li>
                            <li className="li-navbar"><a href="#" className="link">Blog</a></li>
                            <li className="li-navbar"><a href="#" className="link">Contacto</a></li>
                        </ul>
                       </nav>
                       
                       <div className="img-logo">
                        <img src={sf} alt="logo" />
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