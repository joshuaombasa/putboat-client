import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import MerchantLayout from './components/MerchantLayout'

describe('MerchantLayout Component', () => {
    test('renders component with expected structure', () => {
        const router = createBrowserRouter(createRoutesFromElements(
            <Route path="/" element={<MerchantLayout/>} />
        ))
    
        render(<RouterProvider router={router} />)
    })
})