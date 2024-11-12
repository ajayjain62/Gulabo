import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.min.css';
import "../assets/css/style.css";
import artisan1 from "../assets/img/category/artisan1.jpg"
import artisan2 from "../assets/img/category/artisan2.jpg"
import artisan3 from "../assets/img/category/artisan3.jpg"
import artisan4 from "../assets/img/category/artisan4.jpg"
import "../assets/css/textanimation.css"


const Artisans = () => {

  return (
    <div className="container p-4 home"
    style={{
      borderRadius: '10px',
      boxShadow: "0px 0px 20px hsl(0, 0%, 80%)",
      marginTop: "30px"
    }}
    >
     {/* New Arrivals Section */}
     <section className=" bg-white " style={{cursor: 'mouse'}}>
  <div className="container">
    <div className="section-title text-center">
      <h2 
        className="title pb-3 mb-3"
        style={{ 
          boxSizing: "border-box",
          margin: "0px",
          padding: "5px 0px 11px",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "normal",
          fontFamily: "Trirong, serif",
          letterSpacing: "1.1px",
          color: "rgb(0, 0, 0)",
          textAlign: "center",
        }}
      >
          Meet Your Artisans    </h2>
      <p 
        className="text"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "normal",
          fontFamily: "Trirong, serif",
          letterSpacing: "1.1px",
          color: "rgb(0, 0, 0)",
          textAlign: "center",
        }}
      >
       At Gulabi Decor, our artisans pour their heart into every stitch. With decades of experience, they carefully handcraft each piece, ensuring the highest quality and comfort. Their skill and dedication shine through in every piece, making your home feel warm, welcoming, and beautifully crafted.
      </p>
     
    </div>
  </div>
</section>

      <div className="row  d-flex justify-content-center align-item-center">
        <div className="col-sm-3">
        <img
            src={artisan1}
            style={{
              borderRadius: '10px',
              objectFit: "cover", // Ensures the image maintains aspect ratio within the container
              filter: "grayscale(100%)", // Start with black and white
              transition: "transform 0.3s ease, filter 0.3s ease", // Smooth transition for scaling and color change
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)"; // Remove grayscale on hover
              e.target.style.transform = "scale(1.1)"; // Grow the image on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)"; // Add grayscale when not hovered
              e.target.style.transform = "scale(1)"; // Reset the image size when not hovered
            }}
          />
        </div>
        <div className="col-sm-3">
        <img
            src={artisan2}
            style={{
              borderRadius: '10px',
              objectFit: "cover", // Ensures the image maintains aspect ratio within the container
              filter: "grayscale(100%)", // Start with black and white
              transition: "transform 0.3s ease, filter 0.3s ease", // Smooth transition for scaling and color change
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)"; // Remove grayscale on hover
              e.target.style.transform = "scale(1.1)"; // Grow the image on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)"; // Add grayscale when not hovered
              e.target.style.transform = "scale(1)"; // Reset the image size when not hovered
            }}
          />
        </div>
        <div className="col-sm-3">
        <img
            src={artisan3}
            style={{
              borderRadius: '10px',
              objectFit: "cover", // Ensures the image maintains aspect ratio within the container
              filter: "grayscale(100%)", // Start with black and white
              transition: "transform 0.3s ease, filter 0.3s ease", // Smooth transition for scaling and color change
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)"; // Remove grayscale on hover
              e.target.style.transform = "scale(1.1)"; // Grow the image on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)"; // Add grayscale when not hovered
              e.target.style.transform = "scale(1)"; // Reset the image size when not hovered
            }}
          />
        </div>
        <div className="col-sm-3">
        <img
            src={artisan4}
            style={{
              borderRadius: '10px',
              objectFit: "cover", // Ensures the image maintains aspect ratio within the container
              filter: "grayscale(100%)", // Start with black and white
              transition: "transform 0.3s ease, filter 0.3s ease", // Smooth transition for scaling and color change
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)"; // Remove grayscale on hover
              e.target.style.transform = "scale(1.1)"; // Grow the image on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)"; // Add grayscale when not hovered
              e.target.style.transform = "scale(1)"; // Reset the image size when not hovered
            }}
          />
        </div>
      </div>
    </div>
  );
};


export default Artisans;