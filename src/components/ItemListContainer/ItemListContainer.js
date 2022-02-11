import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { miProducto } from '../../asyncmock.js';

const ItemListContainer = ({greeting}) => {

        const [producto, setProducto] = useState([]);
    
        useEffect(() => {
            console.log("App montada");
            miProducto().then(producto => setProducto(producto));
        }, []);

    return (
        <>
        <h1>{greeting}</h1>
        <div className="container">
        <ItemList producto={producto}/>
        <ItemCount stock={10} initial={1} onAdd={(num) => 
        num > 1 ? alert(`Agregaste ${num} items al carrito`) 
        : alert(`Agregaste ${num} item al carrito`)}/>
        </div>
        </>
    )
}

export default ItemListContainer;