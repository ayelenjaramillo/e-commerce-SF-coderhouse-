import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {collection, addDoc} from 'firebase/firestore'; 
import { db } from "../firebaseConfig/firebase";
import "./Create.css"; 

const Create =()=>{
    const [description, setDescription] = useState(""); 
    const [stock, setStock] = useState(0); 

    const navigate = useNavigate(); 
    const productsCollection = collection(db, "sunflowerjeans");
    
    const store = async (e)=>{
        e.preventDefault(); 
        await addDoc(productsCollection, {
            description: description, 
            stock: stock, 
        }); 
        navigate("/administrator"); 
    }
return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="crear-stock-parrafo">CREAR STOCK SF Jeans  </h1>
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label columnas">DESCRIPCION</label>
                  <input type="text" className="form-control"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>
              </div>
            <div className="mb-3">
              <label className="form-label columnas">STOCK</label>
              <input type="number" className="form-control"
              value={stock}
              onChange={(e)=>setStock(e.target.value)}/>
            </div>
              <button type="submit" className="btn-agregar-stock">CREAR</button>
            </form>
           </div>
      </div>
    </div>
  );
    
}
export default Create; 