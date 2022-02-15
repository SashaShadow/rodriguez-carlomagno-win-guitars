import React from "react";
import "./ItemDetails.css";

const ItemList = ({ item }) => {

    return (
        <div className="it">
            <h3>{item.title}</h3>
            <p>Id: {item.id}</p>
            <img className="imagen" src={item.image} alt={item.title}/>
            <div className="details">
            <p>{item.details}</p>
            </div>
            <p>Precio: {item.price} Stock: {item.stock}</p>
        </div>
    )   
};

export default ItemList;