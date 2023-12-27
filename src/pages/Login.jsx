import React, { useState } from "react";
import { redirect, useNavigate, useSearchParams, Form , useActionData} from "react-router-dom";
import { handleLogin } from "../utils/api";

export async function loader() {
    return null
}

export async function action({request}) {
    let formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    
    const sp = new URLSearchParams(request.url)
    const redirectToPath = sp.get('redirectTo') ? sp.get('redirectTo') : '/merchant'
    console.log(redirectToPath)
    try {
        const data = await handleLogin({email, password})
        localStorage.setItem('isLoggedIn', true)
        return redirect(redirectToPath)
    } catch (error) {
        return error
    }
    
}

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    let errors = useActionData();


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



    return (
        <div className="login-page-container">
            <div className="login-page-text">
                <h1>Sign in to your account</h1>
                {errors && <h3 className="error-style">{errors.message}</h3>}
                <Form  method="post">
                    <input
                        type="text"
                        className="login-email"
                        placeholder="Email address"
                        name="email"
                        // onChange={handleChange}
                        // value={formData.email}
                    />
                    <input
                        type="text"
                        className="login-password"
                        placeholder="Password"
                        name="password"
                        // onChange={handleChange}
                        // value={formData.password}
                    />

                    <button>Sign in</button>

                </Form>
            </div>
        </div>
    )
}