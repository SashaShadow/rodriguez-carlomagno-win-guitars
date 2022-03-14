import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { getProducts } from "../../services/Firebase/firebase.js";
import { useNotificationServices } from '../../services/Notification/Notification.js';

const ItemListContainer = ({greeting}) => {

        const [producto, setProducto] = useState([]);
        const [loader, setLoader] = useState(true);
        const { category } = useParams();

        const setNotification = useNotificationServices();
    
        useEffect(() => {
            setLoader(true);
            
            getProducts(category).then(response => {
                setProducto(response)
            }).catch((error) => {
                setNotification('error', error)
            }).finally(() => {
                setLoader(false)
            })

            return(() => {
                setProducto();
            })
        }, [category]);

    return (
        <>
        <h1>{greeting}</h1>
        <div className="container">
        {loader ? <h1>Cargando productos...</h1> : <ItemList producto={producto}/>}
        </div>
        </>
    )
}

export default ItemListContainer;