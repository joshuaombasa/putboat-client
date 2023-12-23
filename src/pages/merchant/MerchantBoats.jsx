import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getMerchantBoats } from "../../utils/api";
import { authenticateUser } from "../../utils/auth";


export async function loader({ request }) {
    const url = new URL(request.url)
    const pathname = url.pathname

    authenticateUser(pathname)
    return defer({ merchantBoats: getMerchantBoats() })
}

export default function MerchantBoats() {

    const dataPromise = useLoaderData()


    function renderMerchantBoats(merchantBoats) {

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
            <>
                <h1>Your listed boats</h1>
                <div className="merchant-boats">
                    {
                        merchantBoatsElements
                    }
                </div>
            </>
        )
    }

    return (
        <div className="merchat-boats-page-container">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.merchantBoats}>
                    {renderMerchantBoats}
                </Await>
            </Suspense>
        </div>
    )
}