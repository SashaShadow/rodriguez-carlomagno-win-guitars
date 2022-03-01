import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
import { BsCart4 } from 'react-icons/bs';


const CartWidget = () => {

    const {quant} = useContext(Context);

    useEffect(() => {
        //console.log(cart);
        console.log(quant);
    }, [quant])
    
    return (
        
        <Link to={"/cart"}><BsCart4/> {quant}</Link>
        
    )
}

export default CartWidget;
