import React from "react";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = ({ producto }) => {

    return (
        <div className="ItemList">
        {producto.map(item => ( 
            <Item  key={item.id} {...item}/>))}         
        </div>
    )   
};

export default ItemList;