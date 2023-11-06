import React from "react";
import div from "../assets/div.svg"
import "../styles/Navbar.css"
import { BrowserRouter as Link, Routes } from "react-router-dom";

const Navbar = () => {



    return (
        <>
            <div className="topnav">
                <div className="imgHome">
                    <span className="ticket-row__left-column--primary-text"> <img src={div} className="item-nav img" alt=""/></span>
                </div>
                <div className="items">
                    <span className="ticket-row__right-column--primary-text"> <Link to="/home" className="link">Home</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <Link to="/home" className="link">About</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <Link to="/home" className="link">Contact</Link></span>
                        
                </div>
            </div>
        </>
    )
}
export default Navbar