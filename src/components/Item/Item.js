import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({title, id, image, price, stock}) => {

    return (
        <div className="it">
            <h3>{title}</h3>
            <p>Id: {id}</p>
            <img className="imagen" src={image} alt={title}/>
            <div className="details">
            <Link to={`/detail/${id}`}><button>Ver detalles del producto</button></Link>
            </div>
            <p>Precio: {price} Stock: {stock}</p>
        </div>
    )       
}

export default Item;