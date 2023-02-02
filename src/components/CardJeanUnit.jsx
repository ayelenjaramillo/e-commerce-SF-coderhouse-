import jeanunit from "./img/img1.jpg"; 
import "./CardJeanUnit.css"; 
function CardJeanUnit({jean}){
    return(
        <li className="li-jean-unit">
            <div className="titulonombre">{jean.titulo}</div>
            <div className="info-precio">{jean.precio}</div>
            <img className="img-jean-unit" src={jeanunit}/>
            <div className="info-descripcion">{jean.descripcion} </div>
            <button className="btn-disponible">Ver stock disponible</button>
        </li>
    )
}
export default CardJeanUnit; 