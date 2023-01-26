import "./Producto.css"; 

const Producto =({titulo})=>{
    return(
        <section className="producto-slide-1">
            <div className="producto-container">
                <article className="producto-texto-caja">
                    <h1 className="h1">{titulo}</h1>
                    <p>
                        <strong> SUNFLOWER JEANS   </strong>
                        Esta es la pagina del emprendimiento de dos amigas creado en epocas de Pandemia
                    </p>
                    <button className="btn-comprar"> Comprar</button>
                </article>
            </div>
        </section>
    )
}
export default Producto; 