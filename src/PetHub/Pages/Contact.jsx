import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        alert(`
CONTACT FORM DETAILS

Name : ${name}
Mail : ${mail}
Phone : ${phone}
Feedback : ${feedback}
        `);

        setName("");
        setMail("");
        setPhone("");
        setFeedback("");
    };

    return (

        <div className="contact-page">

            {/* Hero Section */}
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>
                    We'd love to hear from you and help you find
                    your perfect pet companion.
                </p>
            </section>

            {/* Contact Container */}
            <section className="contact-container">

                {/* Contact Info */}
                <div className="contact-info">

                    <h2>Get In Touch</h2>

                    <div className="info-card">
                        <h3>📍 Address</h3>
                        <p>Kochi, Kerala, India</p>
                    </div>

                    <div className="info-card">
                        <h3>📞 Phone</h3>
                        <p>+91 9876543210</p>
                    </div>

                    <div className="info-card">
                        <h3>📧 Email</h3>
                        <p>petshop@gmail.com</p>
                    </div>

                    <div className="info-card">
                        <h3>🕒 Working Hours</h3>
                        <p>Mon - Sat : 9:00 AM - 8:00 PM</p>
                    </div>

                </div>

                {/* Form */}
                <form className="contact-form" onSubmit={handleForm}>

                    <h2>Send a Message</h2>

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Write your feedback..."
                        rows="6"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </section>

            {/* Footer */}
            <footer className="contact-footer">
                <h3>🐾 Pet Paradise</h3>

                <p>
                    Helping families find their perfect furry,
                    feathered, and aquatic companions.
                </p>

                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <p className="copyright">
                    © 2026 Pet Paradise. All Rights Reserved.
                </p>
            </footer>

        </div>
    );
}

export default Contact;