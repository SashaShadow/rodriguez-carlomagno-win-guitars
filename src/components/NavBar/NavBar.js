import React, { useContext, useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import Context from "../../context/CartContext.js";
import "./NavBar.css";
import logo from "../../../src/logo.png";
import { getDocs, collection} from "firebase/firestore";
import { firestoreDb } from "../../services/Firebase/firebase.js";

const NavBar = () => {

    const {cart} = useContext(Context);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDb, "categories")).then(response => {
            const categories = response.docs.map(cat => {
                return { id: cat.id, ...cat.data()}
            })
            setCategories(categories);
        })

        return (() => {
            setCategories();
        })
    }, []);

    return (
        <div className="navbar">
            <div className="logo">
            <Link to={"/"}><img src={logo}/></Link>
            </div>
            {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? `active ${cat.clase}` : `${cat.clase}`
            }>{cat.description}</NavLink>)}
            <NavLink to={`/us`} className={({isActive}) => isActive ? "active us" : "us" }><p>Nosotros</p></NavLink>
            <NavLink to={"/contact"} className={({isActive}) => isActive ? "active contact" : "contact" }><p >Contacto</p></NavLink>
            {cart.length? <CartWidget/> : null}
        </div>

    )
}

export default NavBar;