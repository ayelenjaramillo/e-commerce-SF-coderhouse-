import "./Administrator.css"; 
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import {collection, getDocs, deleteDoc, doc} from '@firebase/firestore'; 
import { db } from "../firebaseConfig/firebase";

import Swal from 'sweetalert2'; 
import withReactContent from 'sweetalert2-react-content'; 
const MySwal = withReactContent(Swal); 

const Administrator =()=>{

    const [products, setProducts] = useState([]); 

    const productsCollection = collection(db, "sunflowerjeans"); //con Collection me traigo toda la info de mi base de dato, neceisto pasarle dos cosas: la conexion a la base de datos y a firestore

    const getProducts = async()=>{

        const data = await getDocs(productsCollection) 
         console.log(products)// en data me traigo los documentos con getDocs y le paso productCollection que ya fue a la colection entro a la conexion ya armada(ejecutada y guardada en db y me trae los jeans)
        setProducts(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }

    const deleteProduct = async(id)=>{
        const productDoc = doc(db, "sunflowerjeans", id) // que productoDoc quiero eliminar?? primero debo buscar el elemento que quiero eliminar. asi que lo busco conectandome primero a la base de datos con db y desp entrando a la collecion con el nombre de coleccion: sunflowerjeans y desp con el id
        await deleteDoc(productDoc)
        getProducts()
    }

    const confirmDelete = (id)=>{
        Swal.fire({
            title: 'Estas seguro de eliminar?', 
            text:'Esto no se revierte', 
            icon: 'warning', 
            showCancelButton: true, 
            confirmButtonColor: '#3085d6', 
            cancelButtonColor: '#d33', 
            confirmButtonText: 'Si, borrarlo', 
            
        }).then((result)=>{
            if(result.isConfirmed){
                deleteProduct(id)
                Swal.fire(
                    'Eliminado', 
                    'Tu producto ha sido eliminado', 
                    'success'
                )
            }
        })
    }
 useEffect(()=>{
        getProducts()
    }, [])
return(<>
    <div className="container-gral">
      <div className="row">
        <div className="col">
          <div className="d-grid">
            <button className="btn-crear-stock"><Link to='/create'>Crear Stock</Link></button> 
          </div>
            <table className="table table-striped table-bordered tabla">
              <thead>
                <tr className="title-adm">
                  <th> Description </th>
                  <th> Stock </th>
                  <th> Actions </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) =>(
                  <tr key={product.id}>
                    <td className="linea">{product.description} </td>
                    <td className="linea">{product.stock}</td>
                    <td className="linea dos">
                      <Link to= {`/edit/${product.id}`} className="btn btn-warning btn-sm "> Editar </Link>
                      <button onClick={()=>{confirmDelete(product.id)}}className="btn btn-danger btn-sm"> Borrar </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>)
}

export default Administrator; 