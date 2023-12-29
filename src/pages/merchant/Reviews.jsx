import React from "react";
import { authenticateUser } from "../../utils/auth";


export async function loader({request}) {
    const url = new URL(request.url)
    const pathname = url.pathname
    authenticateUser(pathname)
    return  null
}

export default function Reviews() {
    return (
        <div className="reviews-page-container">
            <h1>This is reviews page</h1>
        </div>
    )
}