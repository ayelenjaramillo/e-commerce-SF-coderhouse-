import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'; 
import "./CartWidget.css"; 

const CartWidget =()=>{
    return(
        <div className="cart-widget"> 
        <FontAwesomeIcon icon={faCartShopping} size="2x" className="icon"/>
        <div className="cantidad-productos">
            0
        </div>
        </div>
    )
}
export default CartWidget; 