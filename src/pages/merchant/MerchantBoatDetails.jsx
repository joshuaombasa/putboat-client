import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams, Link, defer, useLoaderData, Await } from "react-router-dom";
import { getBoat } from "../../utils/api";

export async function loader({ request, params }) {
   return defer({ merchantBoat: getBoat(params.id) })
}

export default function MerchantBoatDetails() {

    const dataPromise = useLoaderData()

    function renderMerchantBoat(selectedMerchantBoat) {
        return (
            <>
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
                    <Outlet context={{ selectedMerchantBoat }} />
                </div>
            </>
        )
    }

    return (
        <div className="merchant-boat-details-page-container">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.merchantBoat}>
                    { renderMerchantBoat }
                </Await>
            </Suspense>
        </div>
    )
}