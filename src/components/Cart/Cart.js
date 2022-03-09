import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
//import ContactForm from '../ContactForm/ContactForm.js';
import "./Cart.css";
import { useNotificationServices } from '../../services/Notification/Notification.js';
import { collection, getDoc, addDoc, doc, writeBatch, Timestamp } from "firebase/firestore";
import { firestoreDb } from "../../services/Firebase/firebase.js";


const Cart = () => {

    const {cart, getTotal, removeItem, clearItems} = useContext(Context);
    const setNotification = useNotificationServices()
    
    /*const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    }) */

    const confirmOrder = () => {
        const userInfo = {
            name: "Sasho Rodriguez",
            phone: "1130931945",
            email: "caballerosasha@hotmail.com",
            adress: "Catamarca 500 16 F",
        }
        
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: getTotal(),
        }

        const batch = writeBatch(firestoreDb);
        const outOfStock = [];

        newOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, "products", prod.id)).then(response => {
                if(response.data().stock >= prod.quantity) {
                    batch.update(doc(firestoreDb, "products", response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({id: response.id, ...response.data()})
                }
            }).then(() => {
                executeOrder();
            })
        })

        const executeOrder = () => {
        if(outOfStock.length === 0) {
            addDoc(collection(firestoreDb, "orders"), newOrder).then(({id}) => {
                batch.commit().then(() => {
                    setNotification(`La orden de compra se generó exitosamente, su numero de orden es ${id}`, "success")
                    clearItems();
                })
            }).catch(err => {
                setNotification(err, "error");
            })
        } else {
            outOfStock.forEach(prod => {
            setNotification(`La cantidad de ${prod.title} que agregaste excede su stock: ${prod.stock}`, "error")
            removeItem(prod.id);
            })
        }
    }
    }

    if (cart.length) {
        return <>
        <h1>Carrito</h1>
        <div className="productos">
            {cart.map(prod => 
            <div key={prod.id} className="producto">
            <img src={prod.image}/>
            <p>{prod.title} Cantidad: {prod.quantity} | Precio por unidad: ${prod.price} | Precio total: ${prod.price * prod.quantity}</p>
            <button onClick={() => removeItem(prod.id)}>Quitar del carrito</button>
            </div>
            )}
        </div>
        <h3 className="price">Precio total a pagar: ${getTotal()}</h3>
        <button onClick={() => clearItems()}>Quitar todos los items del carrito</button>
        <button onClick={() => confirmOrder()}>Confirmar compra</button>
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