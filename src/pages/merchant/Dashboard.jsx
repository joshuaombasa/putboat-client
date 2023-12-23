import React from "react";
import { authenticateUser } from "../../utils/auth";

export async function loader({request}) {
    const url = new URL(request.url)
    const pathname = url.pathname
    
    authenticateUser(pathname)
    return  null
}

export default function Dashboard() {
    return (
        <div className="dashboard-page-container">
            <h1>This is merchant Dashboard page</h1>
        </div>
    )
}