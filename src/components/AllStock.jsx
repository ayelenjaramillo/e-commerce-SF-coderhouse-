import jeanunit from "./img/img1.jpg"; 
import "./AllStock.css"; 
import { Link } from "react-router-dom";

const AllStock =({jean})=>{
  return(
    <>
    <div className="general-productos">
      <div className="product-title">
        <li className="li-prod titulojean"> # {jean.titulo}</li>
        <li className="li-prod">{jean.precio}</li>
        {/* <li className="li-prod"> {jean.id}</li> */}
        {/* <Link to="/ProductDetail"> */}
        {jean.images.map((image, index) => {
          return <img className="img-productos" src={image.path} key={`${image.path}-${index}`}/>
        })}
      
        {/* </Link> */} 
        <div className="detalle-jean">
          <span className="desktop-detalle">
          <p className="titulo-detallejean">{jean.tipo}</p>
          <p className="parrafo-detalledesktop">{jean.descripcion}</p>
          <span><button className="btn-detallejean"> Comprar </button></span></span>
        
        <hr/>
        </div>
      </div>
   
    </div>
    </>
  )
}
export default AllStock; 