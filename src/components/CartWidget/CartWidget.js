import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
import { BsCart4 } from 'react-icons/bs';


const CartWidget = () => {

    const {getQuantity, cart} = useContext(Context);

    useEffect(() => {

    }, [cart])
    
    return (
        
        <Link to={"/cart"}><BsCart4/> {getQuantity()}</Link>
        
    )
}

export default CartWidget;
