import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row text-start text-md-start">
          {/* ✅ About Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">About Us</h5>
            <p className="small text-light">
              We provide expert repair & installation services for home appliances like ACs, Washing Machines, Refrigerators, Water Purifiers, and more.
            </p>
          </div>

          {/* ✅ Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">About</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Services</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* ✅ Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="small text-light">
              <FaMapMarkerAlt className="me-2" /> Nagpur, India
            </p>
            <p className="small text-light">
              <FaPhone className="me-2" /> +91 7028787941
            </p>
            <p className="small text-light">
              <FaEnvelope className="me-2" /> nehakanade0652@gmail.com
            </p>

            {/* ✅ Social Media Icons */}
            <div className="mt-3 d-flex flex-wrap">
              <a href="#" target="_blank" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" target="_blank" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" target="_blank" className="text-white me-3" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" target="_blank" className="text-white" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light my-4" />
        <p className="text-start small text-light">&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
