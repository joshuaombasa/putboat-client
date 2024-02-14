import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Header from "./components/Header";

describe('Header Component', () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Header/>} />
    ))

    render(<RouterProvider router={router} />)

    const links = ['putboat','About','Merchant','Boats','Login','Log out']


    test('renders component as expected', () => {

        for (let link of links) {
            let linkElement = screen.getByRole('link', {name: new RegExp(link)})
            expect(linkElement).toBeInTheDocument()
        }
    })
})