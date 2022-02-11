import React from "react";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = ({ producto }) => {

    return (
        <div className="ItemList">
        {producto.map(item => ( 
            <Item title={item.title} key={item.id} id={item.id} image={item.image} price={item.price} stock={item.stock}/>))}
        </div>
    )   
};

export default ItemList;