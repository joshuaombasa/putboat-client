import React from "react";

import '@testing-library/jest-dom'

import { render,screen, waitFor } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SelectedBoat from "./pages/boats/SelectedBoat";

function renderSelectedBoatComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<SelectedBoat />} />
    ))

    render(<RouterProvider router={router} />)
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve({ id: 1, name: 'cafehiskey', imageUrl: 'boat1.jpg', price: 100, type: 'Sailing', description: 'an awesome boat' }),
    })
);

describe('SelectedBoat Componet', () => {
    test('renders loading message initially', async() => {
        renderSelectedBoatComponent()
        await waitFor(async () => {
            const loadingHeading = await screen.findByRole('heading', {name: /Loading.../i})
            expect(loadingHeading).toBeInTheDocument()
        })
    })

    test('renders data after fetching', async () => {
        renderSelectedBoatComponent()

        await waitFor(async() => {
            const backLink = await screen.findByRole('link', {name: /Back to all boats/i})
            expect(backLink).toBeInTheDocument()
            const boatImg = await screen.findByRole('img')
            expect(boatImg).toBeInTheDocument()
            const boatName = await screen.findByRole('heading', {name: /cafehiskey/i})
            expect(boatName).toBeInTheDocument()
            const boatPrice = await screen.findByRole('heading', {name: /100/i})
            expect(boatPrice).toBeInTheDocument()
            const rentVanLink = await screen.findByRole('link', {name: /Rent this van/i})
            expect(rentVanLink).toBeInTheDocument()
        })
    })
})