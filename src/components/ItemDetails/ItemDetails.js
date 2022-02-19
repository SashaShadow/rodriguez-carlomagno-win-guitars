import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemDetails.css";

const ItemList = ({ item }) => {

    return (
        <div className="it">
            <h3>{item?.title}</h3>
            <p>Id: {item?.id}</p>
            <img className="imagen" src={item?.image} alt={item?.title}/>
            <div className="details">
            <p>{item?.details}</p>
            </div>
            <p>Precio: {item?.price} Stock: {item?.stock}</p>
            <ItemCount stock={item?.stock} initial={1} onAdd={(num) => 
        num > 1 ? alert(`Agregaste ${num} items al carrito`) 
        : alert(`Agregaste ${num} item al carrito`)}/>
        </div>
    )   
};

export default ItemList;