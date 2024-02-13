import React from "react";
import { Link } from "react-router-dom";
// import aboutPagePic from '../assets/aboutPage.jpg'

export default function About() {
    return (
        <div className="about-page-container">
            <div data-testid="image-container" className="image-section"></div>
            <h1>Welcome to the Heart of PutBoat</h1>
            <p>At PutBoat, we are more than just a platform for boat rentals – we're a community of water enthusiasts, adventure seekers, and those who appreciate the beauty of life on the open seas. Our journey began with a passion for making aquatic experiences accessible to everyone, and we're thrilled to share that passion with you.</p>
            <div data-testid="story-container" className="about-section">
                <h2>Our Story: </h2>
                <p>Founded in 2021, PutBoat emerged from a shared love for the tranquility and excitement that only being on the water can bring. Our founders, avid sailors and water lovers, envisioned a platform that would connect people with the perfect boat for any occasion, making it easier for individuals and families to embark on unforgettable journeys.</p>
            </div>
            <div data-testid="mission-container" className="about-section">
                <h2>Our Mission: </h2>
                <p>PutBoat is driven by a mission to inspire and empower individuals to embrace the freedom of the open water. We believe that everyone should have the opportunity to experience the joy of boating, creating lasting memories surrounded by the natural beauty of rivers, lakes, and oceans.</p>
            </div>
            <h2>The PutBoat Experience</h2>
            <div data-testid="fleet-container" className="about-section">
                <h3>Unrivaled Fleet Diversity</h3>
                <p>From sleek sailboats to luxurious yachts and adrenaline-pumping speedboats, our diverse fleet caters to every type of sailor. Whether you're planning a family outing, a romantic cruise, or a fishing expedition with friends, we have the right vessel to elevate your experience.</p>
            </div>
            <div data-testid="transparency-container" className="about-section">
                <h3>Transparent and Fair</h3>
                <p>No hidden fees, no surprises. At PutBoat, we believe in transparent pricing. What you see is what you get, allowing you to plan your aquatic adventure with confidence.</p>
            </div>
            <div data-testid="partnerships-container" className="about-section">
                <h3>Local Partnerships, Global Adventures</h3>
                <p>Thanks to our partnerships with reputable boat owners worldwide, PutBoat gives you access to stunning waterways across the globe. Wherever your nautical dreams take you, we're there to make it happen.</p>
            </div>
            <div data-testid="about-page-cta" className="about-page-cta">
                <h3>Get in Touch</h3>
                <p>Have a question or need assistance? Our dedicated support team is here 24/7 to ensure your journey with PutBoat is smooth sailing. Connect with us via putboat@gmail.com, and let's embark on your next great adventure together!</p>
                <Link to='/boats'>Explore our boats</Link>
            </div>
        </div>
    )
}