import Hero from "../Components/Hero";
import { FeaturedPet } from "../Components/FeaturedData";
import FeaturedPets from "../Components/FeaturedPets";
import "../Components/Component.css";

function Home() {
  return(
    <>
      <Hero />

      {/* Featured Pets */}
      <div className="featured-section">
        <h2 className="section-title">Friends We Have!</h2>

        <div className="featured-grid">
          {FeaturedPet.map((pet) => (
            <FeaturedPets
              key={pet.id}
              image={pet.image}
              description={pet.description}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Pethub?</h2>

        <div className="why-container">
          <div className="why-card">
            <h3>🐾 Healthy Pets</h3>
            <p>
              All our pets are healthy, vaccinated, and well cared for.
            </p>
          </div>

          <div className="why-card">
            <h3>🏥 Expert Care</h3>
            <p>
              Our experienced team ensures the best care for every pet.
            </p>
          </div>

          <div className="why-card">
            <h3>🚚 Fast Delivery</h3>
            <p>
              Get pet supplies delivered quickly and safely to your home.
            </p>
          </div>

          <div className="why-card">
            <h3>💚 Customer Support</h3>
            <p>
              We're always ready to help with your pet-related questions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>
              "Amazing service! My puppy arrived healthy and happy."
            </p>
            <h4>- Arun</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Best pet shop in town. Great products and friendly staff."
            </p>
            <h4>- Meera</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Fast delivery and excellent pet care advice."
            </p>
            <h4>- Rahul</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Pethub</h3>
            <p>Your trusted companion for pets and pet supplies.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Contact</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>📧 pethub@gmail.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Pethub. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;