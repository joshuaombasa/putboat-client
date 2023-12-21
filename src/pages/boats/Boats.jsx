import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Boats() {

    const [error, setError] = useState(false)
    const [boats, setBoats] = useState([])

    useEffect(() => {
        async function getBoats() {
            const res = await fetch('http://localhost:3000/api/boats')
            
            const data = await res.json()
            if(!res.ok) {
                setError(true)
            }
            setBoats(data)
        }

        getBoats()
    },[])

    if (boats.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    const boatNames = boats.map(boat => (
        <Link to={boat.id} key={boat.id} className="boatItem">
            <img src={boat.imageUrl} alt="" />
            <div className="boat-item-details">
                <h3>{boat.name}</h3>
                <h3>$ {boat.price}/day</h3>
            </div>
            <span>{boat.type}</span>
        </Link>
    ))

    return (
        <div className="boats-page-container">
            <h1>Explore our boat options.</h1>
            <div className="boatItems">
                {boatNames}
            </div>
        </div>
    )
}