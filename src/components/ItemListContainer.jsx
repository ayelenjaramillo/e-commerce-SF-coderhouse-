import "./ItemListContainer.css"; 
import Card from 'react-bootstrap/Card';
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
            <ul className="ul-cards-items">
                {stock.map((jean)=>(
                    <CardJeanUnit key={jean.id} jean={jean}/>
                ))}
            </ul>
            {/* <Card className="cards">
                <h2> Jean JENNA </h2>
                <p> ahsdjahdjkahdjakh</p>
            </Card>
            <Card className="cards">
                <h2> Jean ISABELLE </h2>
                <p> ahsdjahdjkahdjakh</p>
            </Card>
            <Card className="cards">
                <h2> Jean ALINE</h2>
                <p> ahsdjahdjkahdjakh</p>
            </Card>
            <Card className="cards">
                <h2> Jean MARCELA</h2>
                <p> ahsdjahdjkahdjakh</p>
            </Card> */}
        </div>
        </div>
    )
}
export default ItemListContainer; 