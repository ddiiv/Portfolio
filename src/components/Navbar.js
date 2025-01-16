import React, { useState } from "react";
import div from "../assets/div.svg"
import { Link } from "react-router-dom";

import "../styles/Navbar.css"

const Navbar = () => {



    return (
        <>
            <div className="navbar-simple_style">
                <div className="navbar-items">
                    <span className="ticket-row__right-column--primary-text"> <Link to="/" className="link-navbar">Home</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <Link to="/" className="link-navbar">Sobre mi</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <Link to="/" className="link-navbar">Proyectos</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <Link to="/" className="link-navbar">Contacto</Link></span>
                </div>
            </div>
          
        </>
    )
}
export default Navbar