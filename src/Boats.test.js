import React from "react";

import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";

import Boats, {loader as boatsLoader} from "./pages/boats/Boats";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

function renderBoatsComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Boats loader={boatsLoader}/>} />
    ))

    render(<RouterProvider router={router} />)
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

describe('Boats Component', () => {

test('renders loading message initially', async() => {
    renderBoatsComponent()
    await  waitFor(async() => {
        const loadingHeading = await screen.findByRole('heading', {name: /Loading.../i})
        expect(loadingHeading).toBeInTheDocument()
    })
})
 test('renders data after fetching', async () => {
    renderBoatsComponent()
   
    await waitFor(async () => {
        const mainHeading = await screen.findByRole('heading', {name: /Explore our boat options/i})
        expect(mainHeading).toBeInTheDocument()
        const heading1 = await screen.findByRole('heading', {name: /cafehiskey/i})
        expect(heading1).toBeInTheDocument()
        const heading2 = await screen.findByRole('heading', {name: /evebach/i})
        expect(heading2).toBeInTheDocument()
    })
 })
    
})

const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, 100)
    })
}