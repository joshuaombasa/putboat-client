import React from "react";

import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";

test('renders component with expected structure', () => {
    render(
        <BrowserRouter>
          <NotFound/>
        </BrowserRouter>
    )

    expect(screen.getByRole('heading', {name: /Sorry, the page you were looking for was not found/i})).toBeInTheDocument()

    expect(screen.getByRole('link', {name: /Return to home/i})).toBeInTheDocument()
})