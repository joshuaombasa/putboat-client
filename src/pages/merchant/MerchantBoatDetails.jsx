import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, Link } from "react-router-dom";

export default function MerchantBoatDetails() {

    const [selectedMerchantBoat, setSelectedMerchantBoat] = useState(null)
    const [error, setError] = useState(false)

    const params = useParams()

    useEffect(() => {
        async function getSelectedMerchantBoat() {
            const res = await fetch(`http://localhost:3000/api/boats/${params.id}`)
            const data = await res.json()
            if (!res.ok) {
                setError(true)
            }
            setSelectedMerchantBoat(data[0])
        }

        getSelectedMerchantBoat()
    }, [])

    

    if (!selectedMerchantBoat) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="merchant-boat-details-page-container">
            <Link
               to={`..`}
               relative='path'
            >&larr; Back to all boats.</Link>
            <div className="merchant-boat-details-top">
                <img src={selectedMerchantBoat.imageUrl} alt="" />
                <div className="top-info">
                    <span>{selectedMerchantBoat.type}</span>
                    <h3>{selectedMerchantBoat.name}</h3>
                    <h3>$ {selectedMerchantBoat.price}/day</h3>
                </div>
            </div>
            <div className="merchant-boat-details-bottom">
                <nav className="merchant-boat-details-nav">
                    <NavLink to='.'>Details</NavLink>
                    <NavLink to='pricing'>Pricing</NavLink>
                    <NavLink to='photos'>Photos</NavLink>
                </nav>
                <Outlet context={{selectedMerchantBoat}}/>
            </div>
        </div>
    )
}