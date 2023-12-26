import React, { useState } from "react";
import { redirect, useNavigate, useSearchParams, Form } from "react-router-dom";
import { handleLogin } from "../utils/api";

export async function loader() {
    return null
}

export async function action({request}) {
    let formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    console.log({email, password})
    return null
}

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const sp = new URLSearchParams(searchParams)

    const redirectToPath = sp.get('redirectTo') ? sp.get('redirectTo') : '/merchant'


    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const data = await handleLogin(formData)
            localStorage.setItem('isLoggedIn', true)
            navigate(`${redirectToPath}`)
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className="login-page-container">
            <div className="login-page-text">
                <h1>Sign in to your account</h1>
                {error && <h3 className="error-style">{error.message}</h3>}
                <Form  method="post">
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

                </Form>
            </div>
        </div>
    )
}