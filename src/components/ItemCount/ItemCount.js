import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    return (
            <div className="product">
                <div className="contador">
                    <div>
                        <button onClick={counter > 0 ? () => setCounter(counter - 1) : null}>-</button>
                        <span>{stock === 0 ? stock : counter }</span>
                        <button onClick={counter < stock ? () => setCounter(counter + 1) : null}>+</button>
                    </div>
                    <button type="button" className="agregar" onClick={ stock && counter ? () => onAdd(counter) : null}>
                    Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount;