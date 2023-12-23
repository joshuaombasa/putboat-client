import React, { useState } from "react";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import { handleLogin } from "../utils/api";

export default function Login() {

    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })

    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const sp = new URLSearchParams(searchParams)

    const redirectToPath = sp.get('redirectTo') ? sp.get('redirectTo'): '/merchant'

    console.log(redirectToPath)

    async function handleSubmit(event) {
        event.preventDefault()
        const data = await handleLogin(formData)
        localStorage.setItem('isLoggedIn', true)
        navigate(`${redirectToPath}`)
    }

    return (
        <div className="login-page-container">
            <div className="login-page-text">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         className="login-email"
                         placeholder="Email address"
                         name="email"
                         onChange={handleChange}
                         value={formData.email}
                    />
                    <input 
                         type="text" 
                         className="login-password"
                         placeholder="Password"
                         name="password"
                         onChange={handleChange}
                         value={formData.password}
                    />

                    <button>Sign in</button>
                    
                </form>
            </div>
        </div>
    )
}