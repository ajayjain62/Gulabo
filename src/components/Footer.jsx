import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Call to Action Section */}
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="cta-icon" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>F868, VKIA Road no 14, Jaipur</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faPhone} className="cta-icon" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 9828052001</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="cta-icon" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>gulabidecor123@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="https://i.postimg.cc/0Q5XnckD/Gulabidecor-Brand-kit-2.jpg"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Gulabi Decor offers elegant, handcrafted decor pieces blending traditional charm with modern aesthetics, perfect for adding warmth, beauty, and sophistication to any space.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <div className="social-icons">
                    <a
                      href="https://www.facebook.com/gulabidecor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon facebook-bg"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href="https://twitter.com/gulabidecor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon twitter-bg"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://www.instagram.com/gulabidecor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon instagram-bg"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/products">Our Products</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/testimonials">Customer Testimonials</a>
                  </li>
                  <li>
                    <a href="/blog">Latest Blog</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss updates from Gulabi Decor! Subscribe to receive exclusive offers, new product launches, and design tips.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">
                      <FontAwesomeIcon icon={faTelegramPlane} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}, All Rights Reserved by <a href="/">Gulabi Decor</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/terms">Terms</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/shipping">Shipping Policy</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
