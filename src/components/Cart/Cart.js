import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
import ContactForm from '../ContactForm/ContactForm.js';
import Togglable from "../Togglable/Togglable.js";
import "./Cart.css";
import { useNotificationServices } from '../../services/Notification/Notification.js';
import { collection, getDocs, where, addDoc, doc, writeBatch, Timestamp, documentId, query } from "firebase/firestore";
import { firestoreDb } from "../../services/Firebase/firebase.js";


const Cart = () => {

    const {cart, getTotal, removeItem, clearItems} = useContext(Context);
    const [processingOrder, setProcessingOrder] = useState(false)
    const [order, setOrder] = useState();
    const setNotification = useNotificationServices()
    const contactFormRef = useRef()
    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: '',
    }) 

    useEffect(() => {
        console.log(cart);
        return () => {
            console.log("xd")
        }
    }, [])

    const confirmOrder = () => {

        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
        setProcessingOrder(true)

            const newOrder = {
                buyer: contact,
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: getTotal(),
            }
        
        const batch = writeBatch(firestoreDb);
        const outOfStock = [];

        const ids = newOrder.items.map(i => i.id)

        getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach((docSnapshot) => {
                if(docSnapshot.data().stock >= newOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                    batch.update(doc(firestoreDb, "products", docSnapshot.id), {
                        stock: docSnapshot.data().stock - newOrder.items.find(prod => prod.id === docSnapshot.id).quantity
                    })
                } else {
                    outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                }
            })
        }).then(() => {
                executeOrder();
            }).catch((err) => {
                setNotification(err, "error")
            }).finally(() => {
                setProcessingOrder(false);
            }); 

        const executeOrder = () => {
        if(outOfStock.length === 0) {
            addDoc(collection(firestoreDb, "orders"), newOrder).then(({id}) => {
                    batch.commit()
                    setOrder(id);
                    clearItems();
                    setNotification(`La orden de compra se generó exitosamente`, "success") 
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
    } else {
        setNotification("Debe completar los datos de contacto para generar la orden de compra", "error");
    }
}

    if(processingOrder) {
        return <h1>Orden de compra en proceso...</h1>
    }

    if (cart.length) {
        return <>
        <h1>Carrito</h1>
        <div className="productos">
            {cart.map(prod => 
            <div key={prod.id} className="producto">
            <img className="imgg" src={prod.image}/>
            <p>{prod.title} Cantidad: {prod.quantity} | Precio por unidad: ${prod.price} | Precio total: ${prod.price * prod.quantity}</p>
            <button onClick={() => removeItem(prod.id)}>Quitar del carrito</button>
            </div>
            )}
        </div>
        <h3 className="price">Precio total a pagar: ${getTotal()}</h3>
        <button onClick={() => clearItems()}>Quitar todos los items del carrito</button>
        <button onClick={() => confirmOrder()}>Confirmar compra</button>
        {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
                    </div>    
            }
            <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar datos de compra'
                        } 
                        ref={contactFormRef}>
                <ContactForm contactFormRef={contactFormRef} setContact={setContact} />
            </Togglable>   
        </>
    }

    return (
        <>
        {order ? 
            <>
            <h1>Numero de orden: {order}</h1>
             <h2>¡Gracias por su compra!</h2>
             </> : 
            <h1>No agregaste ningún producto al carrito</h1>}
            <Link to={"/"}>Volver al catálogo</Link>
        </>
    )
}

export default Cart;