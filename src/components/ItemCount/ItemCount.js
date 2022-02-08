import React, { useState } from "react";
import "./ItemCount.css";
import bass from "./washburnt24.jpg";

const ItemCount = ({stock, initial, onAdd}) => {

    const [items, setItems] = useState(initial);

    return (
            <div className="product">
                <p>Bajo Washburn Taurus T24</p>
                <p>Stock: {stock}</p>
                <img src={bass} className="compImg"></img>
                <div className="contador">
                    <div>
                        <button onClick={items != 0 ? () => setItems(items - 1) : null}>-</button>
                        <input type="text" value={stock === 0 ? stock : items }/>
                        <button onClick={items < stock ? () => setItems(items + 1) : null}>+</button>
                    </div>
                    <button type="button" className="agregar" onClick={ stock > 0 && items !== 0 ? () => onAdd(items) : null} >Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount;