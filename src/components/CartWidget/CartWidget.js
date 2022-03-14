import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext.js";
import { BsCart4 } from 'react-icons/bs';

const CartWidget = () => {

    const { getQuantity } = useContext(Context);

    return (
        <Link to={"/cart"}><BsCart4/> {getQuantity()}</Link>
    )
}

export default CartWidget;
