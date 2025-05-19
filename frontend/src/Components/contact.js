import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const AboutContact = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    address: "",
    serviceType: "",
    isWarrantyExpired: null
  });

  // Loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    success: false,
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === "radio" && name === "warranty") {
      setFormData({
        ...formData,
        isWarrantyExpired: value === "Yes"
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.phoneNumber || !formData.address || !formData.serviceType || formData.isWarrantyExpired === null) {
      setSubmitResult({
        success: false,
        message: "Please fill all required fields"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('http://localhost:5000/api/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Reset form on success
        setFormData({
          firstName: "",
          phoneNumber: "",
          address: "",
          serviceType: "",
          isWarrantyExpired: null
        });
        
        setSubmitResult({
          success: true,
          message: "Thank you! Your service request has been submitted successfully."
        });
      } else {
        setSubmitResult({
          success: false,
          message: result.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <style>
        {`
          /* Banner */
          .banner {
            width: 100%;
            height: 90vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('./banner p.jpg');
          }

          .banner-text {
            color: white;
            font-size: 3rem;
            font-weight: 800;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
          }

          /* Contact Section */
          .contact-container {
            display: flex;
            justify-content: center;
            padding: 2rem;

          }

          .contact-box {
            display: flex;
            width: 80%;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }

          .contact-details {
            flex: 1;
            padding: 2rem;
          }

          .contact-details h2 {
            font-size: 1.8rem;
            font-weight: bold;
          }

          .divider {
            width: 50px;
            border: 2px solid #007bff;
          }

          .contact-info {
            margin-top: 1.5rem;
          }

          /* Contact Form */
          .contact-form {
            flex: 1;
            background-color: #e9f0fa;
            padding: 2rem;
            border-radius: 0 10px 10px 0;
          }

          .contact-form h2 {
            font-size: 1.8rem;
            font-weight: bold;
          }

          .contact-form label {
            font-weight: bold;
            display: block;
            margin-bottom: 0.5rem;
          }

          .contact-form input,
          .contact-form select {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          .contact-form button {
            width: 100%;
            padding: 0.75rem;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s;
          }

          .contact-form button:hover {
            transform: scale(1.05);
          }

          /* Warranty Confirmation */
          .warranty-confirmation {
            margin-bottom: 1rem;
          }

          .warranty-confirmation label {
            font-weight: bold;
            display: block;
            margin-bottom: 0.5rem;
          }

          .warranty-options {
            display: flex;
            gap: 2rem; /* Spacing between Yes and No */
            align-items: center;
            flex-wrap: nowrap; /* Ensures Yes and No stay in one row */
          }

          .warranty-options label {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .warranty-options input {
            margin: 0;
          }

          /* Form Feedback */
          .form-feedback {
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 5px;
            text-align: center;
          }

          .success-message {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
          }

          .error-message {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
          }

          /* Mobile Responsiveness */
          @media (max-width: 850px) {
            .banner {
              height: 50vh;
              background-size: contain;
              margin-bottom: -5rem;
              margin-top: -1rem;
              
            }

            .banner-text {
              font-size: 2rem;
              padding: 0px;
            }

            .contact-box {
              flex-direction: column;
              width: 95%;
            }

            .contact-details,
            .contact-form {
              width: 100%;
              padding: 1.5rem;
              border-radius: 10px;
            }

            .warranty-options {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>

      {/* Banner Section */}
      <div className="banner">
        <h1 className="banner-text">Contact Us</h1>
      </div>

      {/* Contact Section */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-container"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="contact-box"
          >
            {/* Left Section - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="contact-details"
            >
              <h2>Get in Touch</h2>
              <hr className="divider" />
              <p>Reach out to us for reliable appliance repair services—call, email, or visit us today!</p>

              <div className="contact-info">
                <p><strong>📍 Address</strong></p>
                <p>Rameshwari Ring Road Dwarkapuri, Nagpur Maharashtra 440027</p>
              </div>

              <div className="contact-info">
                <p><strong>📧 Email</strong></p>
                <p>iamujwalvaishnav011@gmail.com</p>
              </div>

              <div className="contact-info">
                <p><strong>📞 Call Us</strong></p>
                <p>+91 7028787941</p>
              </div>
            </motion.div>

            {/* Right Section - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="contact-form"
            >
              <h2>BOOK SERVICE</h2>
              <hr className="divider" />

              {/* Form feedback message */}
              {submitResult.message && (
                <div className={`form-feedback ${submitResult.success ? 'success-message' : 'error-message'}`}>
                  {submitResult.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <label>First Name *</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />

                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required 
                  pattern="[0-9]{10}" 
                />

                <label style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginBottom: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    resize: "none",
                  }}
                ></textarea>

                <label>Select Type *</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Washing Machine">Washing Machine Repair/Installation</option>
                  <option value="Fridge">Fridge Repair/Installation</option>
                  <option value="AC">AC Repair/Installation</option>
                  <option value="Geyser">Geyser Repair/Installation</option>
                  <option value="LCD/LED">LCD/LED Repair/Installation</option>
                  <option value="Microwave">Microwave Oven Repair/Installation</option>
                  <option value="Dishwasher">Dishwasher Repair/Installation</option>
                </select>

                {/* Warranty Expired Confirmation */}
                <div className="warranty-confirmation">
                  <label>Is your appliance's warranty expired? *</label>
                  <div className="warranty-options">
                    <label>
                      <input 
                        type="radio" 
                        name="warranty" 
                        value="Yes" 
                        checked={formData.isWarrantyExpired === true}
                        onChange={handleChange}
                        required 
                      /> Yes
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="warranty" 
                        value="No" 
                        checked={formData.isWarrantyExpired === false}
                        onChange={handleChange}
                        required 
                      /> No
                    </label>
                  </div>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING..." : "SERVICE REQUEST"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AboutContact;