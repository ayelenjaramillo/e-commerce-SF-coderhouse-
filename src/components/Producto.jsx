import "./Producto.css"; 
import Button from 'react-bootstrap/Button';
import girasol from "./img/girasol.png"; 
import variosjeans from "./img/jeansvarios.jpg"; 



const Producto =()=>{

    return(
        <section className="producto-slide-1">
            <div className="producto-container">
                <article className="producto-texto-caja">
                    <h1 className="h1-producto">SUNFLOWER JEANS <img src={girasol} className="girasol"/></h1>
                    <p className="p-producto">
                        <strong className="strong-titulo"> SUNFLOWER JEANS  </strong>
                     Es el emprendimiento de dos amigas creado en epocas de Pandemia. . 
                    </p>
                    {/* <Button  size="lg" className="btn-comprar text-white">Ver info para venta mayorista</Button>{' '} */}
                    {/* <button className="btn-comprar"> Comprar</button> */}
                </article>
            </div>
        </section>
    )
}
export default Producto; 