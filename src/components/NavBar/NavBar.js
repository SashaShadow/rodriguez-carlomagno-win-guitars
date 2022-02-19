import React from "react";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../src/logo.png";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <Link to={"/"}><img src={logo}/></Link>
            </div>
            <NavLink to={`/category/guitar`} className={({isActive}) => isActive ? "active guitar" : "guitar" }><p>Guitarras</p></NavLink>
            <NavLink to={`/category/bass`} className={({isActive}) => isActive ? "active bass" : "bass" }><p>Bajos</p></NavLink>
            <NavLink to={`/us`} className={({isActive}) => isActive ? "active us" : "us" }><p>Nosotros</p></NavLink>
            <NavLink to={"/contact"} className={({isActive}) => isActive ? "active contact" : "contact" }><p >Contacto</p></NavLink>
            <CartWidget/>
        </div>

    )
}

export default NavBar;