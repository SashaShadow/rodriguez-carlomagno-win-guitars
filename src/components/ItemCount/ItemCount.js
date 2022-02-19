import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {

    const [items, setItems] = useState(initial);

    return (
            <div className="product">
                <div className="contador">
                    <div>
                        <button onClick={items > 0 ? () => setItems(items - 1) : null}>-</button>
                        <span>{stock === 0 ? stock : items }</span>
                        <button onClick={items < stock ? () => setItems(items + 1) : null}>+</button>
                    </div>
                    <button type="button" className="agregar" onClick={ stock > 0 && items !== 0 ? () => onAdd(items) : null} >Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount;