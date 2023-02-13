import "./Producto.css"; 
import Button from 'react-bootstrap/Button';
import girasol from "./img/girasol.png"



const Producto =()=>{

    return(
        <section className="producto-slide-1">
            <div className="producto-container">
                <article className="producto-texto-caja">
                    <h1 className="h1-producto">SUNFLOWER JEANS <img src={girasol} className="girasol"/></h1>
                    <p className="p-producto">
                        <strong> SUNFLOWER JEANS  </strong>
                     Esta es la pagina del emprendimiento de dos amigas creado en epocas de Pandemia. Apasionadas de la modam, quisimos ayudar a que tengas la mejor calidad de jeans y lo ultimo en tendencia ajustado al bolsillo de la gente de clase media. 
                    </p>
                    <Button  size="lg" className="btn-comprar btn-success text-white">Ver info para venta mayorista</Button>{' '}
                    {/* <button className="btn-comprar"> Comprar</button> */}
                </article>
            </div>
        </section>
    )
}
export default Producto; 