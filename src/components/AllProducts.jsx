import React from "react";
import stock from "../stockjeans.json";
import AllStock from "./AllStock";

const AllProducts=()=>{
    return(
        <div>
           <ul> {stock.map((jean)=>(
            <AllStock jean={jean}/>))}
            </ul> 
        </div>
    )
    }


export default AllProducts; 