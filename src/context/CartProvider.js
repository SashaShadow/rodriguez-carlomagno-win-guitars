import React, { useState } from "react";
import CartContext from "./CartContext.js";


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const found = cart.find(elem => elem.id === item);
        !found && setCart({id: item, quantity: quantity})
    }

    const removeItem = (itemId) => {
        const removed = cart.filter(elem => elem.id === itemId)
        setCart(removed);
    }

    const clear = () => {
        setCart([]);
    }



    return <CartContext.Provider value={{name: "", price: "", quantity: 0, id: ""}}>
        {children}
    </CartContext.Provider>
}


export default CartProvider;