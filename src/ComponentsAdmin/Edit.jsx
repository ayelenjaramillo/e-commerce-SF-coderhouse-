import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"
import "./Create.css"; 
const Edit = ()=>{
    const [ description, setDescription ] = useState('')
    const [ stock, setStock ] = useState(0)

    const navigate = useNavigate()

    const {id} = useParams()

    const update = async (e)=>{
        e.preventDefault()
        const product = doc(db,"sunflowerjeans",id)
        const data= {
            description: description,
            stock:stock
        }
        await updateDoc (product,data)
        navigate("/administrator")
    }

    const getProductById= async (id)=>{
        const product = await getDoc(doc(db,"sunflowerjeans",id))
        if(product.exists()){
setDescription(product.data().description)
setStock(product.data().stock)
        }else{
            console.log("el producto no existe")
        }
    }
useEffect(()=>{
    getProductById(id)
},[])

return (
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1 className="crear-stock-parrafo">EDITAR PRODUCTOS </h1>
          <form onSubmit={update}>
            <div className='mb-3'>
              <label className='form-label columnas'>DESCRIPCION</label>
                <input value={description} onChange={ (e) => setDescription(e.target.value)} type="text"
                  className='form-control'/>
            </div>  
            <div className='mb-3'>
              <label className='form-label columnas'>STOCK</label>
                <input value={stock} onChange={ (e)=> setStock(e.target.value)} 
                    type="number" className='form-control'/>                 
            </div>  
            <button type='submit' className='btn-agregar-stock'>EDITAR</button>
          </form>   
      </div>
    </div>
  </div> 
)
}

export default Edit