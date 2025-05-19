import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaSearch, FaShieldAlt, FaSmile, FaTools, FaWrench } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";
const services = [
{ image: "/w3.jpg", title: "Washing Machine Service" },
{ image: "/fridge.jpg", title: "Fridge Service" },
{ image: "/ac.jpg", title: "AC Repair & Maintenance" },
{ image: "/d1.jpg", title: "Dishwasher Service" },
{ image: "/oven.jpg", title: "Microwave Oven Service" },
{ image: "/geyser.avif", title: "Geyser Service" },
{ image: "/lcd.avif", title: "LCD/LED Service" },
{ image: "/ro.jpg", title: "Acqaguard Service" },
];
const features = [
{ icon: <FaTools size={50} className="text-primary" />, text: "Highly Expert Technician" },
{ icon: <FaShieldAlt size={50} className="text-primary" />, text: "90 Days of Warranty on Service" },
{ icon: <FaCheckCircle size={50} className="text-primary" />, text: "100% Genuine Spare Parts" },
{ icon: <FaClock size={50} className="text-primary" />, text: "Doorstep Service in Just 60 min" },
];
const featureVariants = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const FeaturesSection = () => {
return (
<div className="container mt-5">
<div className="row text-center">
{features.map((feature, index) => (
<div key={index} className="col-md-6 mb-3">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={featureVariants}
className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 border rounded shadow-lg text-center text-md-start"
style={{ background: "white", transition: "all 0.3s ease-in-out" }}
whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
>
<div className="mb-2 mb-md-0 me-md-3">{feature.icon}</div>
<h5 className="mb-0">{feature.text}</h5>
</motion.div>
</div>
))}
</div>
</div>
);
};
const steps = [
{
icon: <FaSearch size={40} className="text-primary mb-2" />,
title: "1. Search Service",
desc: "Find your required appliance service quickly from our list.",
},
{
icon: <FaWrench size={40} className="text-primary mb-2" />,
title: "2. Book a Technician",
desc: "Choose the best technician and book instantly with flexible slots.",
},
{
icon: <FaSmile size={40} className="text-primary mb-2" />,
title: "3. Relax and Smile",
desc: "Sit back while we take care of the repair at your doorstep!",
},
];
const HowItWorks = () => (
<div className="container my-5">
<h2 className="text-center fw-bold mb-4">How It Works</h2>
<div className="row justify-content-center">
{steps.map((step, index) => (
<motion.div
key={index}
className="col-md-4 text-center g-4"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.2, duration: 0.6 }}
>
<div className="p-4 shadow rounded h-100 bg-white">
{step.icon}
<h5 className="fw-bold mt-2">{step.title}</h5>
<p>{step.desc}</p>
</div>
</motion.div>
))}
</div>
</div>
);
const reviews = [
  {
    name: "Aarav Mehta",
    image: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?ga=GA1.1.1151594731.1723203399&semt=ais_hybrid&w=740",
    review: "Excellent service! The technician arrived on time and fixed my washing machine within an hour.",
    location: "Nagpur",
  },
  {
    name: "Kabir Shah",
    image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?ga=GA1.1.1151594731.1723203399&semt=ais_hybrid&w=740",
    review: "Professional and quick service for my refrigerator. Highly recommended!",
    location: "Nagpur",
  },
  {
    name: "Devansh Rao",
    image: "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?ga=GA1.1.1151594731.1723203399&semt=ais_hybrid&w=740",
    review: "Booked an AC repair and the technician was polite and skilled. Very happy with the service.",
    location: "Nagpur",
  },
  {
    name: "Ishaan Verma",
    image: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?ga=GA1.1.1151594731.1723203399&semt=ais_hybrid&w=740",
    review: "Very reliable and quick microwave repair. Friendly technician too!",
    location: "Nagpur",
  },
  {
    name: "Rudra Kapoor",
    image: "https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?ga=GA1.1.1151594731.1723203399&semt=ais_hybrid&w=740",
    review: "Booked a geyser service. Technician was experienced and explained everything clearly.",
    location: "Nagpur",
  },
];

const ReviewSection = () => {
return (
<div className="container my-5">
<h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
<Swiper
modules={[Autoplay, Pagination]}
spaceBetween={30}
pagination={{ clickable: true }}
autoplay={{ delay: 3000 }}
loop={true}
breakpoints={{
0: { slidesPerView: 1 },
576: { slidesPerView: 1 },
768: { slidesPerView: 2 },
992: { slidesPerView: 3 },
}}
>
{reviews.map((review, index) => (
<SwiperSlide key={index}>
<motion.div
className="d-flex flex-column align-items-center text-center p-4 mx-3 bg-white rounded h-100 border"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
viewport={{ once: true }}
whileHover={{
scale: 1.05,
boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
}}
style={{
minHeight: "320px",
transition: "all 0.3s ease-in-out",
boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
}}
>
<div>
<img
src={review.image}
alt={review.name}
className="rounded-circle mb-3 border border-2"
style={{
width: "80px",
height: "80px",
objectFit: "cover",
}}
/>
<h5 className="fw-bold">{review.name}</h5>
<p className="text-muted mb-2">{review.location}</p>
<p className="fst-italic text-secondary">“{review.review}”</p>
</div>
</motion.div>
</SwiperSlide>
))}
</Swiper>
</div>
);
};

// export default ReviewSection;
const Home = () => {
const navigate = useNavigate();
return (
<>
<section className="container-fluid p-0 position-relative">
<Swiper
modules={[Navigation, Pagination, Autoplay]}
spaceBetween={50}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
autoplay={{ delay: 3000, disableOnInteraction: false }}
loop={true}
>
{[ "/4.jpg", "/2.jpg", "/3.jpg", "/image1.jpg"].map((src, index) => (
<SwiperSlide key={index} className="position-relative">
<motion.img
src={src}
alt={`Slide ${index + 1}`}
className="w-100 img-fluid"
style={{ height: "650px", objectFit: "cover" }}
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1.2, ease: "easeOut" }}
/>
<motion.div
className="position-absolute top-50 start-50 translate-middle text-center text-white fw-bolder"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.5, ease: "easeOut" }}
style={{ padding: "20px 40px", borderRadius: "10px", maxWidth: "80%" }}
>
<h2 className="fw-bold" style={{ fontSize: "2rem", overflow: "hidden" }}>
{["Welcome", "to", "Shree", "Sai", "Refrigeration"].map((word, i) => (
<motion.span
key={i}
initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
style={{ display: "inline-block", marginRight: "8px" }}
>
{word}
</motion.span>
))}
</h2>
<motion.p
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
className="mb-0"
style={{ fontSize: "1.2rem" }}
>
Best Home Appliance Service Center in Nagpur
</motion.p>
</motion.div>
</SwiperSlide>
))}
</Swiper>
</section>
<div className="container mt-5 p-4 bg-white rounded-lg shadow-md border-1">
<h2 className="text-center fw-bold mb-3">Service Center in Nagpur</h2>
<p className="text-center">
We offer repair services for Refrigerators, Washing Machines, ACs, Microwave Ovens, LED/LCD TVs, Dishwashers, Geysers, and Water Purifiers. Our team has over <strong>10 years of experience</strong> delivering quality service.
</p>
</div>
<FeaturesSection />
<div className="container mt-5">
<h2 className="text-center fw-bold mb-4">Most Booked Services</h2>
<div
className="d-flex overflow-auto"
style={{
whiteSpace: "nowrap",
overflowX: "auto",
paddingBottom: "10px",
scrollbarWidth: "none",
msOverflowStyle: "none",
}}
>
{services.map((service, index) => (
<motion.div
key={index}
className="card h-100 shadow border-1 mx-3 p-3 text-center"
style={{ minWidth: "260px", maxWidth: "280px", borderRadius: "16px", background: "#f9f9f9" }}
whileHover={{ scale: 1.05 }}
>
<img
src={service.image}
className="card-img-top rounded"
alt={service.title}
style={{ height: "180px", objectFit: "cover", borderRadius: "12px" }}
/>
<div className="card-body p-3">
<h6
className="fw-bold mb-3"
style={{ fontSize: "1rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
>
{service.title}
</h6>
<button className="btn btn-primary w-100" onClick={() => navigate("/contact")}>Book Now</button>
</div>
</motion.div>
))}
</div>
</div>
<HowItWorks />
<ReviewSection />
<Footer />
<style>{`
::-webkit-scrollbar {
display: none;
}
.d-flex::-webkit-scrollbar {
display: none;
}

`}</style>
</>
);
};
export default Home;