import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'


describe('Home Component', () => {

    test('renders component with expected structure', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByRole('heading', { name: /welcome to putboat/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /Why Choose PutBoat\?/i })).toBeInTheDocument()

        expect(screen.getByTestId('intro-paragraph')).toBeInTheDocument()
        expect(screen.getByTestId('journey-paragraph')).toBeInTheDocument()
        expect(screen.getByTestId('adventure-paragraph')).toBeInTheDocument()

        expect(screen.getByRole('link', { name: /Find your boat/i })).toBeInTheDocument()

        const whyItems = screen.getByTestId('why-items').querySelectorAll('li')
        expect(whyItems).toHaveLength(6)

    })
})

