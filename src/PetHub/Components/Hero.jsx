import PetImage from "../../assets/PetsHero.png";
import "./Hero.css";

function Hero() {
  return(
    <section
      className="hero"
      style={{
        backgroundImage: `url(${PetImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          🐾 Trusted by 10,000+ Pet Parents
        </span>

        <h1>
          Everything Your
          <span> Furry Friend </span>
          Needs in One Place
        </h1>

        <p>
          Shop premium pet food, toys, grooming essentials, accessories,
          and healthcare products designed to keep your pets healthy,
          happy, and full of energy.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">
            Shop Now
          </button>

          <button className="learn-btn">
            Explore More
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>500+</h3>
            <p>Pet Products</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;