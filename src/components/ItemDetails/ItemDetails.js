import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemDetails.css";

const ItemDetails = ({title, id, image, price, stock, details, category}) => {

    const [quantity, setQuantity] = useState(0);
    
    const {addItem} = useContext(Context);

    const onAdd = (num) => {

        setQuantity(num)

        const productToAdd = {
            title,
            id,
            price,
            image, 
            stock, 
            details,
            category
        }
        addItem(productToAdd, num)
    }

    useEffect(() => {
        //quantity > 0 && console.log(quantity);
    }, [quantity])

    return (
        <div className="it">
            <h3>{title}</h3>
            <p>Id: {id}</p>
            <img className="imagen" src={image} alt={title}/>
            <div className="details">
            <p>{details}</p>
            </div>
            <p>Precio: ${price} Stock: {stock}</p>
            {quantity > 0 ? <Link to={"/cart"}>Ir al carrito</Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
        </div>
    )   
};

export default ItemDetails;