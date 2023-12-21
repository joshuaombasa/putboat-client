import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MerchantBoats() {

    const [merchantBoats, setMerchantBoats] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMerchantBoats() {
            const res = await fetch('http://localhost:3000/api/merchantBoats')
            const data = await res.json()
            if (!res.ok) {
                setError(true)
            }
            setMerchantBoats(data)
        }

        getMerchantBoats()
    },[])

    if (merchantBoats.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    const merchantBoatsElements = merchantBoats.map(boat => (
        <Link key={boat.id} to={boat.id} className="merchant-boat-item">
            <img src={boat.imageUrl} alt="" />
            <div className="more-info">
                <h3>{boat.name}</h3>
                <span>$ {boat.price}/day</span>
            </div>
        </Link>
    ))

    return (
        <div className="merchat-boats-page-container">
            <h1>Your listed boats</h1>
            <div className="merchant-boats">
                {
                    merchantBoatsElements
                }
            </div>
        </div>
    )
}