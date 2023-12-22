import React, { Suspense, useEffect, useState } from "react";
import { useParams, Link, defer, useLoaderData, Await } from "react-router-dom";
import { getBoat } from "../../utils/api";

export async function loader({ request, params }) {

    return defer({ boat: getBoat(params.id) })
}

export default function SelectedBoat() {

    const dataPromise = useLoaderData()

    function renderBoat(boat) {
        
        return (
            <>
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
            </>
        )
    }


    return (
        <div className="selected-boat-page-container">
            <Suspense  fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.boat}>
                    {renderBoat}
                </Await>
            </Suspense>
        </div>
    )
}