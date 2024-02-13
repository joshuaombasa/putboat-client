import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import About from './pages/About'

describe ('About Component', () => {
    test('renders component with expected structure', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        )
    
        expect(screen.getByRole('link', {name: /Explore our boats/i})).toBeInTheDocument()
        expect(screen.getByRole('heading', {name: /Welcome to the Heart of PutBoat/i})).toBeInTheDocument()
        expect(screen.getByRole('heading', {name: /The PutBoat Experience/i})).toBeInTheDocument()
    
        const storyContainerHeading2 = screen.getByTestId('story-container').querySelector('h2')
        expect(storyContainerHeading2).toBeInTheDocument()
        const storyContainerParagraph = screen.getByTestId('story-container').querySelector('p')
        expect(storyContainerParagraph).toBeInTheDocument()

        const missionContainerHeading2 = screen.getByTestId('mission-container').querySelector('h2')
        expect(missionContainerHeading2).toBeInTheDocument()
        const missionContainerParagraph = screen.getByTestId('mission-container').querySelector('p')
        expect(missionContainerParagraph).toBeInTheDocument()

        const fleetContainerHeading3  = screen.getByTestId('fleet-container').querySelector('h3')
        expect(fleetContainerHeading3).toBeInTheDocument()
        const fleetContainerParagraph = screen.getByTestId('fleet-container').querySelector('p')
        expect(fleetContainerParagraph).toBeInTheDocument()

        const transparencyContainerHeading3  = screen.getByTestId('transparency-container').querySelector('h3')
        expect(transparencyContainerHeading3).toBeInTheDocument()
        const transparencyContainerParagraph = screen.getByTestId('transparency-container').querySelector('p')
        expect(transparencyContainerParagraph).toBeInTheDocument()

        const partnershipsContainerHeading3  = screen.getByTestId('partnerships-container').querySelector('h3')
        expect(partnershipsContainerHeading3).toBeInTheDocument()
        const partnershipsContainerParagraph = screen.getByTestId('partnerships-container').querySelector('p')
        expect(partnershipsContainerParagraph).toBeInTheDocument()

        const aboutPageCtaHeading3  = screen.getByTestId('about-page-cta').querySelector('h3')
        expect(aboutPageCtaHeading3).toBeInTheDocument()
        const aboutPageCtaParagraph = screen.getByTestId('about-page-cta').querySelector('p')
        expect(aboutPageCtaParagraph).toBeInTheDocument()
    })
})