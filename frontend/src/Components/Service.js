import React, { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const styles = `
  .service-page {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
  }

 .banner-container {
    position: relative;
    width: 100%;
    height: 400px;
}

.banner-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
}

.banner-text {
    position: absolute;
    top: 75%;
    left: 45%;
    transform: translate(-50%, -50%);
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    width: 80%;
    max-width: 600px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

/* ✅ Media Query for Tablets & Mobile Screens */
@media (max-width: 768px) {
    .banner-container {
        height: 300px;
    }
    
    .banner-image {
        height: 300px;
    }

    .banner-text {
        font-size: 24px;  /* Reduce text size for smaller screens */
        width: 90%;
        padding: 10px;
    }
        .page-title1 {
        margin-top: 25px !important; /* Adjust margin for smaller screens */}
}

/* ✅ Media Query for Small Mobile Screens */
@media (max-width: 480px) {
    .banner-container {
        height: 250px;
    }

    .banner-image {
        height: 250px;
    }

    .banner-text {
        font-size: 20px; /* Further reduce text size for better fit */
        width: 95%;
        padding: 8px;
    }
}

  .page-title1 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
    margin-top: 150px;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }

  .service-card {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .service-image {
    width: 60%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  .service-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }

  .service-description {
    font-size: 14px;
    color: #555;
    margin: 10px 0;
  }

  .service-dropdown {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 8px;
    margin-top: 10px;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .service-dropdown:hover, .service-dropdown:focus {
    border-color: #888;
    outline: none;
    background-color: #f0f0f0;
    color: #333;
  }

  .service-phone {
    color: rgb(153, 50, 13);
    font-weight: bold;
    margin-top: 20px;
  }

  .book-service-btn {
  background-color: #007bff; 
  color: white;
  padding: 8px 10px;
  font-size: 15px;
  
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

.book-service-btn:hover {
  background-color: #007bff; 
}

`;

const ServiceCard = ({ image, title, description, phone, options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
      <select
        className="service-dropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select a Service</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>

       {/* Book Service Button */}
       <button className="btn btn-primary  mt-3" onClick={() => navigate("/contact")}>Book Services</button>
      

    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="service-page">
      <style>{styles}</style>
      
      {/* ✅ Banner with Overlay Text */}
      <div className="banner-container">
        <img src="./service1.avif" alt="Service Banner" className="banner-image" />
        <div className="banner-text">Expert Home Appliance Repair & Installation Services</div>
      </div>

      <h1 className="page-title1 ">Our Services</h1>

      <div className="service-grid">
        <ServiceCard image="./w2.jpg" title="Washing Machines Services" description="We provide repair and maintenance services for all types of washing machines, ensuring efficient performance and extended lifespan." phone="7028787941" options={["Front Load Repair", "Top Load Repair", "Semi-Automatic Repair", "Installation Services"]} />
        <ServiceCard image="./ac.jpg" title="Air Conditioner Services" description="Our expert technicians provide installation, maintenance, and repair services for all types of air conditioners, ensuring optimal cooling and energy efficiency." phone="7028787941" options={["Residential AC Repair", "Commercial AC Repair", "Installation Services"]} />
        <ServiceCard image="./oven.jpg" title="Microwave Services" description="Professional repair solutions for different microwave models, including solo, grill, and convection types. We diagnose and fix heating, wiring, and display issues." phone="7028787941" options={["Solo Microwave Repair", "Grill Microwave Repair", "Convection Microwave Repair", "Installation Services"]} />
        <ServiceCard image="./fridge.jpg" title="Refrigerator Services" description="We offer repair and maintenance for refrigerators of all brands, handling cooling issues, gas refilling, compressor problems, and more." phone="7028787941" options={["Single Door Repair", "Double Door Repair", "Side by Side Repair", "Installation Services"]} />
        <ServiceCard image="./d1.jpg" title="Dishwasher Services" description="Our technicians specialize in fixing dishwasher drainage problems, detergent dispensers, and water leakage issues, ensuring a hassle-free kitchen experience." phone="7028787941" options={["Built-in Dishwasher Repair", "Portable Dishwasher Repair", "Installation Services"]} />
        <ServiceCard image="./geyser.avif" title="Geyser Services" description="Whether your geyser has heating issues or requires installation, our professionals offer quick and efficient services for various types of geysers." phone="7028787941" options={["Electric Geyser Repair", "Gas Geyser Repair", "Tankless Geyser Repair", "Installation Services"]} />
        <ServiceCard image="./ro.jpg" title="Aquaguard Services" description="Get complete Aquaguard servicing, including water filter replacement, installation, and maintenance for clean and safe drinking water." phone="7028787941" options={["Filter Replacement", "Installation", "Annual Maintenance", "Installation Services"]} />
        <ServiceCard image="./lcd.avif" title="Television Services" description="We provide specialized repairs for televisions, fixing display issues, power failures, and sound problems to bring your entertainment system back to life." phone="7028787941" options={["LED TV Repair", "LCD TV Repair", "Plasma TV Repair", "Installation Services"]} />
        <ServiceCard image="./Electric.jpg" title="Chimney Services" description="We offer deep cleaning, installation, and repair services for kitchen chimneys, ensuring efficient smoke and odor removal for a cleaner kitchen environment." phone="7028787941" options={["Filter Cleaning", "Motor Repair", "Installation Services"]} />
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;
