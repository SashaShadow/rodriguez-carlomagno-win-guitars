import React from "react";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = ({ producto }) => {

    return (
        <div className="ItemList">
        {producto.map(item => ( 
            <Item  key={item.id} {...item}/>))}
            {/* es mas facil poner el spread que id={item.id} image={item.image} price={item.price} stock={item.stock} title={item.title} */}
        </div>
    )   
};

export default ItemList;