import React from "react";
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MerchantBoats from "./pages/merchant/MerchantBoats";

function renderMerchantBoats() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<MerchantBoats/>}/>
    ))
    render(<RouterProvider router={router}/>)
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve([
                { id: 1, name: 'cafehiskey', imageUrl: 'boat1.jpg', price: 100, type: 'Sailing' },
                { id: 2, name: 'evebach', imageUrl: 'boat2.jpg', price: 150, type: 'Yacht' },
            ]),
    })
);

describe('MerchantBoats Component', () => {
    test('renders loading message initially', async() => {
        renderMerchantBoats()
        await  waitFor(async() => {
            const loadingHeading = await screen.findByRole('heading', {name: /Loading.../i})
            expect(loadingHeading).toBeInTheDocument()
        })
    })

    test('renders data after fetching', async() => {
        renderMerchantBoats()

        await waitFor (async() => {
            const boatContainerLinks = await screen.findAllByTestId('boatContainer')
            expect(boatContainerLinks.length).toEqual(2)
        })
    })
})