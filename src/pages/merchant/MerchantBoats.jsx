import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getMerchantBoats } from "../../utils/api";
import { authenticateUser } from "../../utils/auth";


// export async function loader({ request }) {
//     const url = new URL(request.url)
//     const pathname = url.pathname
//     authenticateUser(pathname)
//     return defer({ merchantBoats: getMerchantBoats() })
// }

export default function MerchantBoats() {

    // const dataPromise = useLoaderData()

    const [merchantBoats, setMerchantBoats] = useState([])

   useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/api/merchantBoats')
                const data = await res.json()
                setMerchantBoats(data)
                
            } catch (error) {

            } finally {

            }
        }

        fetchData()
    },[])

    if (merchantBoats.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    const merchantBoatsElements = merchantBoats.map(boat => (
        <Link data-testid="boatContainer" key={boat.id} to={boat.id} className="merchant-boat-item">
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


    // function renderMerchantBoats(merchantBoats) {

    //     const merchantBoatsElements = merchantBoats.map(boat => (
    //         <Link key={boat.id} to={boat.id} className="merchant-boat-item">
    //             <img src={boat.imageUrl} alt="" />
    //             <div className="more-info">
    //                 <h3>{boat.name}</h3>
    //                 <span>$ {boat.price}/day</span>
    //             </div>
    //         </Link>
    //     ))

    //     return (
    //         <>
    //             <h1>Your listed boats</h1>
    //             <div className="merchant-boats">
    //                 {
    //                     merchantBoatsElements
    //                 }
    //             </div>
    //         </>
    //     )
    // }

    // return (
    //     <div className="merchat-boats-page-container">
    //         <Suspense fallback={<h1>Loading...</h1>}>
    //             <Await resolve={dataPromise.merchantBoats}>
    //                 {renderMerchantBoats}
    //             </Await>
    //         </Suspense>
    //     </div>
    // )
}