import React from "react";

import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Login from "./pages/Login";

function renderLoginComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Login />} />))

    render(<RouterProvider router={router} />)
}

describe('Login Component', () => {
    test('renders login component correctly', () => {
        renderLoginComponent()

        expect(screen.getByRole('heading', { name: /sign in to your account/i })).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Email address/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument()
    })

    test('calls handleLogin with email and password when sign in button is clicked', () => {
        const mockHandleLogin = jest.fn()

        renderLoginComponent()

        const emailInput = screen.getByPlaceholderText(/Email address/i)
        const passwordInput = screen.getByPlaceholderText(/Password/i)
        const signInButton = screen.getByRole('button', { name: /Sign in/i })

        fireEvent.change(emailInput, {target: {value : 'joshuaokasa@gmail.com'}})
        fireEvent.change(passwordInput, {target: {value : 'joshuaokasa'}})
       
        fireEvent.click(signInButton)
    })
})