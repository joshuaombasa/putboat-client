import React from "react";
import { Link, NavLink } from "react-router-dom";



export default function Header() {
    return (
        <div className="header-container">
            <header>
                <Link to='/' className="logo">putboat</Link>
                <div className="header-links">
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/Merchant'>Merchant</NavLink>
                    <NavLink to='/boats'>Boats</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/logout'>Log out</NavLink>
                </div>
            </header>
        </div>
    )
}