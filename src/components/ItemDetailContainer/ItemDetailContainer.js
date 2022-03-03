import React, { useState, useEffect } from "react";
import { getItem } from "../../asyncmock.js";
import ItemDetails from "../ItemDetails/ItemDetails.js";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase.js";

const ItemDetailContainer = ({ greeting }) => {

    const [it, setItems] = useState();
    const { productId } = useParams();

    useEffect(() => {
        console.log("Detalles mostrados");

        const docRef = doc(firestoreDb, "products", productId);

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setItems(product);
        })
        
        return (() => {
            setItems()
        })

    }, [productId]);

return (
    <>
    <h1>{greeting}</h1>
    <div className="items">
        <ItemDetails {...it}/>
    </div>
    </>
)
}

export default ItemDetailContainer;