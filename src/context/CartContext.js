import React from "react";
import useLocalStorage from "../services/LocalStorState/LocalStorState.js";

const Context = React.createContext();

export const CartContext = ({children}) => {

    const [cart, setCart] = useLocalStorage([], "cart");

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const addItem = (productToAdd, quantity) => {
        const objetoNuevo = {
            ...productToAdd,
            quantity,
        }
        isInCart(productToAdd.id) ? updateItemInCart(objetoNuevo) : addItemToCart(objetoNuevo) 
    }

    const updateItemInCart = (productToAdd) => {
        const newCart = cart.map(prod => {
            if (prod.id === productToAdd.id) {
                const updatedProduct = {
                    ...prod,
                    quantity: prod.quantity + productToAdd.quantity
            }
            return updatedProduct;
            } else {
                return prod;
            }
        })
        setCart(newCart);
    }

    const addItemToCart = (productToAdd) => {
        setCart([...cart, productToAdd]);
    }

    const removeItem = (itemId) => {
        const removed = cart.filter(elem => elem.id !== itemId)
        setCart(removed);
    }

    const clearItems = () => {
        setCart([]);
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    return <Context.Provider value={{cart, getTotal, getQuantity, addItem, removeItem, clearItems}}>
        {children}
    </Context.Provider>
}

export default Context;
