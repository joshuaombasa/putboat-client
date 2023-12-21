import React, { useState } from "react";

export default function Login() {

    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })

    function handleChange(event) {
        const { name, value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
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