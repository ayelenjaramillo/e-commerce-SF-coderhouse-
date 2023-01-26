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
                    <FontAwesomeIcon icon={faBars} size="lg" />
                    <small>MENU</small>
                    <div className="div">
                       <nav>
                        <ul className="ul-header">
                            <li className="li-navbar"><a href="#">Inicio</a></li>
                            <li className="li-navbar"><a href="#">Productos <span className="arrow"></span> </a></li>
                            <li className="li-navbar"><a href="#">Blog</a></li>
                            <li className="li-navbar"><a href="#">Contacto</a></li>
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