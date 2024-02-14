import React from "react";
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MerchantBoatDetails from "./pages/merchant/MerchantBoatDetails";

function renderMerchantBoatDetailsComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<MerchantBoatDetails />} />
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

describe('MerchantBoatDetails Component', () => {
    test('renders loading message initially', async() => {
        renderMerchantBoatDetailsComponent()
        await waitFor(async () => {
            const loadingHeading = await screen.findByRole('heading', {name: /Loading.../i})
            expect(loadingHeading).toBeInTheDocument()
        })
    })

    test('renders data after fetching', async () => {
        renderMerchantBoatDetailsComponent()

        await waitFor(async () => {
            const backLink = await screen.findByRole('link', {name: /Back to all boats/i})
            expect(backLink).toBeInTheDocument()

            const detailsTop = await screen.findByTestId('detailsTop')
            const detailsTopImg = detailsTop.querySelector('img')
            expect(detailsTopImg).toBeInTheDocument()
            const detailsTopHeadings = detailsTop.querySelectorAll('h3')
            expect(detailsTopHeadings.length).toEqual(2)

            const detailsNav = await screen.findByTestId('detailsNav')
            const detailsNavItems = detailsNav.querySelectorAll('a')
            expect(detailsNavItems.length).toEqual(3)
           
        })
    })
}) 