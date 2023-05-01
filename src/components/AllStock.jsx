import { MiContext } from "../aplicacion/Provider";
import "./AllStock.css";
import { useState } from "react";

const AllStock = ({ jean }) => {
  const [contador, setContador] = MiContext();
  function agregar() {
    setContador(contador + 1);
  }
  console.log(contador);

  return (
    <>
      <div className="general-productos">
        <div className="product-title">
          <div className="top-h-prod">
            <li className="li-prod titulojean"> # {jean.titulo}</li>
            <li className="li-prod precio">{jean.precio}</li>
          </div>
          {jean.images.map((image, index) => {
            return (
              <img
                className="img-productos"
                src={image.path}
                key={`${image.path}-${index}`}
              />
            );
          })}
          <div className="detalle-jean">
            <span className="desktop-detalle">
              <p className="titulo-detallejean">{jean.tipo}</p>
              <p className="parrafo-detalledesktop">{jean.descripcion}</p>
              <span>
                <button className="btn-detallejean " onClick={() => agregar()}>
                  <p className="boton">Añadir </p>
                </button>
              </span>
            </span>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
export default AllStock;
