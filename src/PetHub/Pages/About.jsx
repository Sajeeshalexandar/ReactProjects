import "./About.css";

function About() {
    return(
        <div className="about-container">

            <div className="about-hero">
                <h1>About Paw Paradise</h1>
                <p>
                    Bringing happiness to homes, one pet at a time.
                </p>
            </div>

            <div className="about-content">

                <div className="about-text">
                    <h2>Who We Are</h2>
                    <p>
                        Paw Paradise is a trusted pet shop dedicated to connecting
                        loving families with healthy and happy pets. We offer a
                        wide variety of dogs, cats, birds, fishes, and premium pet
                        accessories to ensure every pet receives the care they deserve.
                    </p>
                </div>

                <div className="about-text">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide pet lovers with healthy pets,
                        quality food, and essential accessories while promoting
                        responsible pet ownership and animal welfare.
                    </p>
                </div>

                <div className="about-features">

                    <div className="feature-card">
                        <h3>🐶 Healthy Pets</h3>
                        <p>
                            Carefully selected and well-cared-for pets ready for
                            loving homes.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>🦴 Quality Products</h3>
                        <p>
                            Premium foods, toys, accessories, and grooming items.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>❤️ Pet Care Support</h3>
                        <p>
                            Guidance and support to help you care for your pets.
                        </p>
                    </div>

                </div>

                <div className="about-story">
                    <h2>Why Choose Us?</h2>

                    <p>
                        We believe pets are family. Our team is passionate about
                        animals and works hard to provide a safe, friendly, and
                        reliable shopping experience for every customer.
                    </p>

                    <ul>
                        <li>✔ Healthy and Happy Pets</li>
                        <li>✔ Affordable Prices</li>
                        <li>✔ Friendly Customer Support</li>
                        <li>✔ Wide Variety of Pets & Accessories</li>
                        <li>✔ Trusted by Pet Lovers</li>
                    </ul>
                </div>

                <div className="about-cta">
                    <h2>Find Your Perfect Companion Today</h2>
                    <p>
                        Explore our collection of adorable pets and pet accessories.
                    </p>

                    <button>Shop Now</button>
                </div>

            </div>

        </div>
    );
}

export default About;