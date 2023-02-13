import jeanunit from "./img/img1.jpg"; 
import "./CardJeanUnit.css"; 
import { Link } from "react-router-dom";



function CardJeanUnit({jean}){
  return(
        <li className="li-jean-unit">
            <div className="titulonombre">{jean.titulo}</div>
            <div className="info-precio">{jean.precio}</div>
            <Link to="/ProductDetail" ><img className="img-jean-unit" src={jeanunit}/></Link>
            <div className="info-descripcion">{jean.descripcion} </div>
            <Link to="/Stockavailable">
            <button className="btn-disponible">Ver stock disponible</button></Link>
        </li>)
} 

export default CardJeanUnit; 

// trailblazer.me/id/ajaramillo05
