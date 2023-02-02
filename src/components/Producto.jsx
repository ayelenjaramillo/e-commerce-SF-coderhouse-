import "./Producto.css"; 
import Button from 'react-bootstrap/Button';
import girasol from "./img/girasol.png"



const Producto =({titulo})=>{

    return(
        <section className="producto-slide-1">
            <div className="producto-container">
                <article className="producto-texto-caja">
                    <h1 className="h1-producto">{titulo}<img src={girasol} className="girasol"/></h1>
                    <p className="p-producto">
                        <strong> SUNFLOWER JEANS  </strong>
                     Esta es la pagina del emprendimiento de dos amigas creado en epocas de Pandemia
                    </p>
                    <Button  size="lg" className="btn-comprar btn-warning text-white">COMPRAR</Button>{' '}
                    {/* <button className="btn-comprar"> Comprar</button> */}
                </article>
            </div>
        </section>
    )
}
export default Producto; 