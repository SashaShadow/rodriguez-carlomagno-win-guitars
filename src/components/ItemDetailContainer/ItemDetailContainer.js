import React, { useState, useEffect } from "react";
import { getItem } from "../../asyncmock.js";
import ItemDetails from "../ItemDetails/ItemDetails.js";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ greeting }) => {

    const [it, setItems] = useState();
    const { productId } = useParams();

    useEffect(() => {
        console.log("Detalles mostrados");
        getItem(productId)
        .then(item => setItems(item))
        .catch(err  => {
            console.log(err)
        });
        
        return (() => {
            setItems()
        })

    }, [productId]);

return (
    <>
    <h1>{greeting}</h1>
    <div className="items">
        <ItemDetails item={it}/>
    </div>
    </>
)
}

export default ItemDetailContainer;