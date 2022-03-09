import React, {useState, useEffect} from "react";

const Context = React.createContext();

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart])

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const addItem = (productToAdd, quantity) => {

        const objetoNuevo = {
            ...productToAdd,
            quantity,
        }

        /*
        if (isInCart(productToAdd.id)) {
            //encontrar la cantidad que ya tengo agregada de tal item
            const findQuantity = cart.find(p => p.id === productToAdd.id).quantity;
            //encontrar la cantidad de productos que se pueden agregar segun el stock
            const leftStock = productToAdd.stock - findQuantity;
            //agregar cierta cantidad si la agregada mas la nueva no supera el stock del producto
            if (leftStock >= quantity) {  
                
            /*} else {
                alert(`Superaste la cantidad de productos para agregar, stock restante ${leftStock}`)
            } 
        } else {
            setCart([...cart, objetoNuevo]);
        } */
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
