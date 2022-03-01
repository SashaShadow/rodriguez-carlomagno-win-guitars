import React, {useContext} from "react";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import Context from "../../context/CartContext.js";
import {CartContext} from "../../context/CartContext.js";
import "./NavBar.css";
import logo from "../../../src/logo.png";

const NavBar = () => {

    const {cart, quant} = useContext(Context);

    return (
        <div className="navbar">
            <div className="logo">
            <Link to={"/"}><img src={logo}/></Link>
            </div>
            <NavLink to={`/category/guitar`} className={({isActive}) => isActive ? "active guitar" : "guitar" }><p>Guitarras</p></NavLink>
            <NavLink to={`/category/bass`} className={({isActive}) => isActive ? "active bass" : "bass" }><p>Bajos</p></NavLink>
            <NavLink to={`/us`} className={({isActive}) => isActive ? "active us" : "us" }><p>Nosotros</p></NavLink>
            <NavLink to={"/contact"} className={({isActive}) => isActive ? "active contact" : "contact" }><p >Contacto</p></NavLink>
            {cart.length? <CartWidget quant={quant}/> : null}
        </div>

    )
}

export default NavBar;