// src/pages/Home.jsx
import React from 'react';
import BlogSection from '../components/BlogSection';
import SwiperComponent from '../components/SwiperComponent';
import Hero from '../components/Hero';
import Category from '../components/Category';
import AboveFooter from '../components/AboveFooter';
import BelowReel from '../components/BelowReel';
import JustIn from '../components/JustIn';
import StyleFinder from '../components/StyleFinder';
import Trending from '../components/Trending';
import Deals from '../components/Deals';
import ProductCarousel from '../components/ProductCarousel';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.min.css';
import "../assets/css/style.css";
import Artisans from "./Artisans"




const Home = () => (
  <div className="home" style={{cursor: 'mouse'}}>
    <SwiperComponent />
    <Category />
    <JustIn />
    <BelowReel />
    <Trending />
    <StyleFinder />

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
          New Arrivals      </h2>
      <p 
        className="text"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "5px 0px 11px",
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
        Discover Our Range of Premium Home Furnishing Solutions
      </p>
    </div>
    <ProductCarousel />
  </div>
</section>

    {/* Popular Products Section */}
    <section className="product-tab bg-white pt-30 pb-10">
  <div className="container" >
    <div className="section-title text-center">
      <h2 
        className="title pb-3 mb-3"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "13px 0px 11px",
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
        Popular Products
      </h2>
      <p 
        className="text"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "13px 0px 11px",
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
        Enhance your everyday with products crafted for exceptional living
      </p>
    </div>
    <ProductCarousel />
  </div>
</section>


    <Artisans />
  
    <BlogSection />
    <AboveFooter />
  </div>
);

export default Home;
