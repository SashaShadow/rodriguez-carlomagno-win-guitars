import React, { useState, useEffect } from "react";
import { getItem } from "../../asyncmock.js";
import ItemDetails from "../ItemDetails/ItemDetails.js";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ greeting }) => {

    const [it, setItems] = useState([]);

    useEffect(() => {
        console.log("Detalles mostrados");
        getItem().then(item => setItems(item));
    }, []);

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