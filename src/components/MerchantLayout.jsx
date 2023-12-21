import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function MerchantLayout() {
    return (
        <div className="merchant-layout-container">
            <div className="merchant-nav">
                <NavLink to='.' >Dashboard</NavLink>
                <NavLink to='income' >Income</NavLink>
                <NavLink to='boats' >Boats</NavLink>
                <NavLink to='reviews' >Reviews</NavLink>
            </div>
            <div className="merchant-outlet-container">
                <Outlet/>
            </div>
        </div>
    )
}