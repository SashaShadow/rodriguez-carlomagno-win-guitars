import React, { useState, useEffect } from "react";
import ItemDetails from "../ItemDetails/ItemDetails.js";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getProduct } from "../../services/Firebase/firebase.js";
import { useNotificationServices } from "../../services/Notification/Notification.js";


const ItemDetailContainer = ({ greeting }) => {
    
    const [item, setItems] = useState();
    const { productId } = useParams();
    const [loader, setLoader] = useState(true)

    const setNotification = useNotificationServices();

    useEffect(() => {
        setLoader(true);

        getProduct(productId).then(response => {
            setItems(response)
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
            setLoader(false)
        })
        
        return (() => {
            setItems()
        })

    }, [productId]);

    
        return (
            <>
            {
                loader ? 
                <h1>Cargando producto...</h1> :
            <><h1>{greeting}</h1>
            <div className="items">
                <ItemDetails {...item}/>
            </div></>
            }
            </>)
}

export default ItemDetailContainer;