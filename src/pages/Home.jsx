import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-page-container">
            <h1>Welcome to PutBoat – Your Gateway to Aquatic Adventures!</h1>
            <p>At PutBoat, we believe that every journey on the water should be a memorable experience. Whether you're a seasoned sailor or a first-time adventurer, our platform is your one-stop destination for hassle-free boat rentals. We bring the joy of boating to your fingertips, making it easier than ever to set sail and explore the open seas.</p>
            <h2>Why Choose PutBoat?</h2>
            <div className="why-putboat">
                <ol>
                    <li>
                        <div className="why-item">
                            <p><strong>Diverse Fleet: </strong>Discover a wide range of boats suitable for every occasion. From sleek speedboats for adrenaline seekers to spacious yachts for luxurious getaways, we have the perfect vessel to match your needs.</p>
                        </div>
                    </li>
                    <li>
                        <div className="why-item">
                            <p><strong>User-Friendly Platform: </strong>Our intuitive website makes the boat rental process a breeze. With a few clicks, you can browse available boats, compare prices, and secure your booking—all from the comfort of your home.</p>
                        </div>
                    </li>
                    <li>
                        <div className="why-item">
                            <p><strong>Safety First: </strong>We prioritize your safety and peace of mind. Our boats undergo regular inspections to ensure they meet the highest safety standards. We also provide essential safety information to ensure you have a secure and enjoyable experience on the water.</p>
                        </div>
                    </li>
                    <li>
                        <div className="why-item">
                            <p><strong>Local Partnerships: </strong>PutBoat works with reputable boat owners and operators in various locations, offering you the opportunity to explore stunning waterways around the world. Whether it's a serene lake, a winding river, or the vast ocean, we've got you covered.</p>
                        </div>
                    </li>
                    <li>
                        <div className="why-item">
                            <p><strong>Transparent Pricing: </strong>No hidden fees or surprises. We believe in transparent pricing, so you know exactly what you're paying for. Our goal is to make boat rentals accessible to everyone, regardless of budget.</p>
                        </div>
                    </li>
                    <li>
                        <div className="why-item">
                            <p><strong>24/7 Support: </strong>Have a question or need assistance? Our dedicated customer support team is available around the clock to ensure your journey with PutBoat is smooth sailing from start to finish.</p>
                        </div>
                    </li>
                </ol>
            </div>
            <p>Embark on Your Next Adventure with PutBoat!</p>
            <p>Whether you're planning a family outing, a romantic sunset cruise, or a fishing expedition with friends, PutBoat is here to make your nautical dreams a reality. Start your journey by exploring our diverse fleet and booking your preferred boat today. </p>
            <p>Unleash the sailor in you and create memories that will last a lifetime with PutBoat.</p>
            <Link className='find-boat-link' to='/boats'>Find your boat</Link>
        </div>
    )
}