import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getBoats } from "../../utils/api";

export async function loader() {

    return defer({ boats: getBoats() })
}

export default function Boats() {

    const boatsPromise = useLoaderData()



    function renderBoats(boats) {

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
            <>
                <h1>Explore our boat options.</h1>
                <div className="boatItems">
                    {boatNames}
                </div>
            </>
        )
    }

    return (
        <div className="boats-page-container">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={boatsPromise.boats}>
                    { renderBoats }
                </Await>
            </Suspense>
        </div>
    )
}