import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams, Link, defer, useLoaderData, Await } from "react-router-dom";
import { getBoat } from "../../utils/api";
import { authenticateUser } from "../../utils/auth";


// export async function loader({ request, params }) {
//     const url = new URL(request.url)
//     const pathname = url.pathname

//     authenticateUser(pathname)
//     return defer({ merchantBoat: getBoat(params.id) })
// }

export default function MerchantBoatDetails() {

    const [selectedMerchantBoat, setSelectedMerchantBoat] = useState(null)

    const {id} = useParams()

    

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3000/api/boats/${id}`)
                const data = await res.json()
               setSelectedMerchantBoat(data)
                
            } catch (error) {

            } finally {

            }
        }

        fetchData()
    },[])

    if (!selectedMerchantBoat) {
        return (<h1>Loading...</h1>)
    }

    return (
        <div className="merchant-boat-details-page-container">
            <Link
                to={`..`}
                relative='path'
            >&larr; Back to all boats.</Link>
            <div data-testid="detailsTop" className="merchant-boat-details-top">
                <img src={selectedMerchantBoat.imageUrl} alt="" />
                <div className="top-info">
                    <span>{selectedMerchantBoat.type}</span>
                    <h3>{selectedMerchantBoat.name}</h3>
                    <h3>$ {selectedMerchantBoat.price}/day</h3>
                </div>
            </div>
            <div data-testid="detailsNav" className="merchant-boat-details-bottom">
                <nav className="merchant-boat-details-nav">
                    <NavLink to='.'>Details</NavLink>
                    <NavLink to='pricing'>Pricing</NavLink>
                    <NavLink to='photos'>Photos</NavLink>
                </nav>
                {/* <Outlet context={{ selectedMerchantBoat }} /> */}
            </div>
        </div>
    )

    // const dataPromise = useLoaderData()

    // function renderMerchantBoat(selectedMerchantBoat) {
    //     return (
    //         <>
    //             <Link
    //                 to={`..`}
    //                 relative='path'
    //             >&larr; Back to all boats.</Link>
    //             <div className="merchant-boat-details-top">
    //                 <img src={selectedMerchantBoat.imageUrl} alt="" />
    //                 <div className="top-info">
    //                     <span>{selectedMerchantBoat.type}</span>
    //                     <h3>{selectedMerchantBoat.name}</h3>
    //                     <h3>$ {selectedMerchantBoat.price}/day</h3>
    //                 </div>
    //             </div>
    //             <div className="merchant-boat-details-bottom">
    //                 <nav className="merchant-boat-details-nav">
    //                     <NavLink to='.'>Details</NavLink>
    //                     <NavLink to='pricing'>Pricing</NavLink>
    //                     <NavLink to='photos'>Photos</NavLink>
    //                 </nav>
    //                 <Outlet context={{ selectedMerchantBoat }} />
    //             </div>
    //         </>
    //     )
    // }

    // return (
    //     <div className="merchant-boat-details-page-container">
    //         <Suspense fallback={<h1>Loading...</h1>}>
    //             <Await resolve={dataPromise.merchantBoat}>
    //                 {renderMerchantBoat}
    //             </Await>
    //         </Suspense>
    //     </div>
    // )
}