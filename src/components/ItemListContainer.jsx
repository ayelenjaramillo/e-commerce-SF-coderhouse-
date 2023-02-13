import "./ItemListContainer.css"; 
import stock from "../stockjeans.json";
import CardJeanUnit from "../components/CardJeanUnit"; 

const ItemListContainer=({saludo})=>{
    return(
        <div className="general-container-item">
        <section className="item-container">
            <h2 className="item-container-titulo">
                {saludo}
            </h2>
        </section>
        <div className="cards-items">
            <h2 className="title-h2"> Productos mas vendidos </h2>
            <ul className="ul-cards-items">
                {/* {stock.map((jean)=>(
                    <CardJeanUnit key={jean.id} jean={jean}/>
                ))} */}
                {stock.slice(0,4).map((jean)=>(
                    <CardJeanUnit key={jean.id} jean={jean}/>
                ))}
                
            </ul>
        </div>
        </div>
    )
}
export default ItemListContainer; 