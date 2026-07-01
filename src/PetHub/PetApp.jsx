import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Logo from "../assets/PetsLogo.png";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import "./petApp.css";

function PetApp() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="PetHub Logo" />
          <h2>PetHub</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Link className="nav-btn" to="/shop">Shop Now</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>}/>
       
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default PetApp;