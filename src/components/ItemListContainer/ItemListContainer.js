import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase.js";

const ItemListContainer = ({greeting}) => {

        const [producto, setProducto] = useState([]);
        const [loader, setLoader] = useState(true);
        const { category } = useParams();
    
        useEffect(() => {
            console.log("App montada");
            setLoader(true);
            
            const collectionRef = category ? query(collection(firestoreDb, "products"), where("category", "==", category)) : collection(firestoreDb, "products");

            //const query(collection(firestoreDb, 'products'), where('category', '==', categoryId))

            // response es querySnapshot segun la documentacion
            getDocs(collectionRef).then(response => {
                const products = response.docs.map(prod => {
                    console.log(prod)
                    return { id: prod.id, ...prod.data()}
                })
                console.log(products);
                setProducto(products);
            }).finally(() => {
                setLoader(false);
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