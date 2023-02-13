import jeanunit from "./img/img1.jpg"; 
import "./AllStock.css"; 
import { Link } from "react-router-dom";

const AllStock =({jean})=>{
    return(
       <>
       <div className="general-productos">
            <div className="product-title">
                <li className="li-prod"> {jean.titulo}</li>
                <li className="li-prod"> {jean.precio}</li>
                <li className="li-prod"> {jean.id}</li>
                <Link to="/ProductDetail">
                <img className="img-productos" src={jeanunit}/></Link>
            </div>
       </div>    
        </>
    )
}
export default AllStock; 