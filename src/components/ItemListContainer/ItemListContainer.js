import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

    return (
        <>
        <h1>{greeting}</h1>
        <div className="container">
        <ItemCount stock={10} initial={1} onAdd={(num) => 
        num > 1 ? alert(`Agregaste ${num} items al carrito`) 
        : alert(`Agregaste ${num} item al carrito`)}/>
        </div>
        </>
    )
        {/*notas para mi: sin destructurar quedaría {props} en parentesis y habria que poner props.greeting */}
}

export default ItemListContainer;