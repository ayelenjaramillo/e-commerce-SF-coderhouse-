import "./CardJeanUnit.css"; 
import { Link } from "react-router-dom";

function CardJeanUnit({jean}){ 
return(
        <li className="li-jean-unit">
            <div className="titulonombre">{jean.titulo}</div>
            <div className="info-precio">{jean.precio}</div>
              <img className="img-jean-unit" src={jean.images[0].path}/>
            <div className="info-descripcion">{jean.descripcion} </div>
            <Link to="/AllProducts">
            <button className="btn-disponible">VER MAS</button></Link>
        </li>)
} 

export default CardJeanUnit; 

// trailblazer.me/id/ajaramillo05
