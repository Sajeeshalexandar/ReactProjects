
function Home() {
    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Build Amazing Projects</h1>
                    <p>
                        Learn, create, and grow your skills with modern web
                        development technologies.
                    </p>

                    <div className="hero-buttons">
                        <button>Get Started</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features">

                <div className="card">
                    <h2>Fast</h2>
                    <p>Optimized for speed and performance.</p>
                </div>

                <div className="card">
                    <h2>Responsive</h2>
                    <p>Works perfectly on all devices.</p>
                </div>

                <div className="card">
                    <h2>Modern</h2>
                    <p>Built using the latest technologies.</p>
                </div>

            </section>

            {/* About Section */}
            <section className="about">
                <h2>About Us</h2>

                <p>
                    We help developers build real-world projects and improve
                    their coding skills through practical learning.
                </p>
            </section>

        </div>
    );
}

export default Home;