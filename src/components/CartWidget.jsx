import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'; 
import "./CartWidget.css"; 

const CartWidget =({agregar})=>{
 return(
        <div className="cart-widget"> 
        <FontAwesomeIcon icon={faCartShopping} size="2x" className="icon"/>
        <div className="cantidad-productos">
         <p> Total:{agregar}</p> 
        </div>
        </div>
    )
}
export default CartWidget; 