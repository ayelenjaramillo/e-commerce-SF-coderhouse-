import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'; 
import { MiContext } from "../aplicacion/Provider"; 
import "./CartWidget.css"; 

const CartWidget =()=>{
  const [contador, setContador] = MiContext();
 return(
        <div className="cart-widget"> 
        <FontAwesomeIcon icon={faCartShopping} size="2x" className="icon"/>
        <div className="cantidad-productos">
         <p> {contador}</p> 
        </div>
        </div>
    )
}
export default CartWidget; 