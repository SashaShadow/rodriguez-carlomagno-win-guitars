import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
import "./Cart.css";

const Cart = () => {

    const {cart, price, removeItem, clearItems} = useContext(Context);


    if (cart.length) {
        return <>
        <h1>Carrito</h1>
        <div className="productos">
            {cart.map(prod => 
            <div key={prod.id} className="producto">
            <img src={prod.image}/>
            <p>{prod.title} Cantidad: {prod.quantity} Precio: ${prod.price * prod.quantity}</p>
            <button onClick={() => removeItem(prod.id)}>Quitar del carrito</button>
            </div>
            )}
        </div>
        <h3 className="price">Precio total a pagar: ${price}</h3>
        <button onClick={clearItems}>Quitar todos los items del carrito</button>
        </>
    }

    return (
        <>
            <h1>No agregaste ningún producto al carrito</h1>
            <Link to={"/"}>Volver al catálogo</Link>
        </>
    )
}

export default Cart;