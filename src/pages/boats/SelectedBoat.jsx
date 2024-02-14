import React, { Suspense, useEffect, useState } from "react";
import { useParams, Link, defer, useLoaderData, Await } from "react-router-dom";
import { getBoat } from "../../utils/api";

// export async function loader({ request, params }) {

//     return defer({ boat: getBoat(params.id) })
// }

export default function SelectedBoat() {

    const {id} = useParams()

    const [boat, setBoat] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3000/api/boats/${id}`)
                const data = await res.json()
                setBoat(data)
                
            } catch (error) {

            } finally {

            }
        }

        fetchData()
    },[])

    if (!boat) {
        return (<h1>Loading...</h1>)
    }

    // const dataPromise = useLoaderData()

    // function renderBoat(boat) {

    //     return (
    //         <>
    //             <Link
    //                 to={`..`}
    //                 relative='path'
    //             >&larr; Back to all boats.</Link>
    //             <img src={boat.imageUrl} alt="" />
    //             <span>{boat.type}</span>
    //             <h3>{boat.name}</h3>
    //             <h3>$ {boat.price}/day</h3>
    //             <p>{boat.description}</p>
    //             <Link className="rent-van-link">Rent this van</Link>
    //         </>
    //     )
    // }


    // return (
    //     <div className="selected-boat-page-container">
    //         <Suspense  fallback={<h1>Loading...</h1>}>
    //             <Await resolve={dataPromise.boat}>
    //                 {renderBoat}
    //             </Await>
    //         </Suspense>
    //     </div>
    // )

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