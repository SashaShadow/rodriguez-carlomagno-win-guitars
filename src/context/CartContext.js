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

        if (isInCart(productToAdd.id)) {
            //encontrar la cantidad que ya tengo agregada de tal item
            const findQuantity = cart.find(p => p.id === productToAdd.id).quantity;
            //encontrar la cantidad de productos que se pueden agregar segun el stock
            const leftStock = productToAdd.stock - findQuantity;
            //agregar cierta cantidad si la agregada mas la nueva no supera el stock del producto
            if (leftStock >= quantity) {
                const newCart = cart.map(prod => {
                    if (prod.id === productToAdd.id) {
                        prod.quantity += quantity;
                    }
                    return prod;})
                setCart(newCart);
            } else {
                alert(`Superaste la cantidad de productos que podias añadir papurri. Stock restante: ${leftStock}`)
            }
        } else {
            setCart([...cart, objetoNuevo])
        }
    }

    const removeItem = (itemId) => {
        const removed = cart.filter(elem => elem.id !== itemId)
        setCart(removed);
    }

    const clearItems = () => {
        console.log("Productos quitados del carrito")
        setCart([]);
    }

    return <Context.Provider value={{cart, addItem, removeItem, clearItems}}>
        {children}
    </Context.Provider>
}

export default Context;
