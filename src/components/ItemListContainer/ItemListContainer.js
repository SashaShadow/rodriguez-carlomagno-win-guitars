import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { getByCategory } from "../../asyncmock.js";

const ItemListContainer = ({greeting}) => {

        const [producto, setProducto] = useState([]);
        const [loader, setLoader] = useState(true);
        const { category } = useParams();
    
        useEffect(() => {
            console.log("App montada");
            getByCategory(category)
            .then(producto => {
                setProducto(producto)
                setLoader(false)})
            .catch(err => console.log(err));
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