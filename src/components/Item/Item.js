import React from "react";
import "./Item.css";

const Item = ({title, id, image, price, stock}) => {

    return (
        <div className="it">
            <h3>{title}</h3>
            <p>Id: {id}</p>
            <img className="imagen" src={image} alt={title}/>
            <div className="details">
            <button>Ver detalles del producto</button>
            </div>
            <p>Precio: {price} Stock: {stock}</p>
        </div>
    )       
}

export default Item;