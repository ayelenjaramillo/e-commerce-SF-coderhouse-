import "./ItemListContainer.css"; 

const ItemListContainer=({saludo})=>{
    return(
        <section className="item-container">
            <h2 className="item-container-titulo">
                {saludo}
            </h2>
        </section>
    )
}
export default ItemListContainer; 