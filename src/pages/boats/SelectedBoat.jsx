import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SelectedBoat() {

    const [boat, setBoat] = useState(null)
    const [error, setError] = useState(false)

    const params = useParams()

    useEffect(()  => {
        async function getBoat() {
            const res = await fetch(`http://localhost:3000/api/boats/${params.id}`)
            const data  = await res.json()
            if (!res.ok) {
                setError(error)
            }
            setBoat(data[0])
        }
        getBoat()
    },[])


    if (!boat) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className="selected-boat-page-container">
            <Link
               to={`..`}
               relative='path'
            >&larr; Back to all boats.</Link>
            <img src={boat.imageUrl} alt="" />
            <span>{boat.type}</span>
            <h3>{boat.name}</h3>
            <h3>$ {boat.price}/day</h3>
            <p>{boat.description}</p>
            <Link className="rent-van-link">Rent this van</Link>
        </div>
    )
}