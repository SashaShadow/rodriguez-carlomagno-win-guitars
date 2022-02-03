import React from "react";
import CartWidget from "../CartWidget/CartWidget.js";
import "./NavBar.css";
import logo from "../../../src/logo.png";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#"><img src={logo}/></a>
            </div>
            <a href="#" className="item guitar"><p>Guitarras</p></a>
            <a href="#" className="item bass"><p>Bajos</p></a>
            <a href="#" className="item us"><p>Nosotros</p></a>
            <a href="#" className="item contact"><p>Contacto</p></a>
            <CartWidget/>
        </div>

    )
}

export default NavBar;