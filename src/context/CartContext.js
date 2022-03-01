import React, {useState, useEffect} from "react";

const Context = React.createContext();


export const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);
    const [quant, setQuant] = useState(0)
    const [price, setPrice] = useState(0);

    useEffect(() => {
        console.log(cart);
        console.log(price);
    }, [cart, quant, price])

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
                setQuant(quant + quantity);
                setPrice(price + productToAdd.price * quantity);
            } else {
                alert(`Superaste la cantidad de productos que podias añadir. Stock restante: ${leftStock}`)
            }
        } else {
            setCart([...cart, objetoNuevo]);
            setQuant(quant + quantity);
            setPrice(price + productToAdd.price * quantity);
        }
    }

    const removeItem = (itemId) => {
        const removed = cart.filter(elem => elem.id !== itemId)
        const quantToRemove = cart.find(elem => elem.id === itemId).quantity;
        const priceRemove = cart.find(elem => elem.id === itemId).price;
        setCart(removed);
        setQuant(quant - quantToRemove);
        setPrice(price - priceRemove * quantToRemove);
    }

    const clearItems = () => {
        console.log("Productos quitados del carrito")
        setCart([]);
        setQuant(0);
        setPrice(0);
    }

    return <Context.Provider value={{cart, quant, price, addItem, removeItem, clearItems}}>
        {children}
    </Context.Provider>
}

export default Context;
