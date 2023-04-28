import "./AllStock.css"; 
import { useState } from "react";
import CartWidget from "./CartWidget";

const AllStock =({jean})=>{
  const [contador, setContador]=useState(0); 
  function agregar(){
    setContador(contador+1)
  }
  console.log(contador); 

  return(
    <>
    <div className="general-productos">
      <div className="product-title">
        <div className="top-h-prod">
        <li className="li-prod titulojean"> # {jean.titulo}</li>
        <li className="li-prod precio">{jean.precio}</li>
        </div>
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
          <span>
           <CartWidget agregar={contador}/> 
           
            <button className="btn-detallejean" onClick={()=>agregar()}>{contador} Añadir </button>
            </span>
            </span>
        
        <hr/>
        </div>
      </div>
   
    </div>
    </>
  )
}
export default AllStock; 