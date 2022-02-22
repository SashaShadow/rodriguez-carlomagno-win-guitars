import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemDetails.css";

const ItemDetails = ({ item }) => {

    const [quantity, setQuantity] = useState(0);

    const onAdd = (num) => {
        num > 1 ? alert(`Agregaste ${num} items con la id ${item?.id} al carrito`) 
        : alert(`Agregaste ${num} item con la id ${item?.id} al carrito`)
        setQuantity(num)
    }

    useEffect(() => {
        quantity > 0 && console.log(quantity);
    }, [quantity])

    return (
        <div className="it">
            <h3>{item?.title}</h3>
            <p>Id: {item?.id}</p>
            <img className="imagen" src={item?.image} alt={item?.title}/>
            <div className="details">
            <p>{item?.details}</p>
            </div>
            <p>Precio: {item?.price} Stock: {item?.stock}</p>
            {quantity > 0 ? <Link to={"/cart"}>Ir al carrito</Link> : <ItemCount stock={item?.stock} initial={1} onAdd={onAdd}/>}
        </div>
    )   
};

export default ItemDetails;