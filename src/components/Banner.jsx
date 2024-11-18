import React from "react";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-carousel">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div className="banner-slide">
          <div className="banner-content">
            <div className="banner-text">
              <h1>Unmissable Denim Deal</h1>
              <p>Up to 50% off</p>
              <a href="#" className="shop-now-button">Shop Now</a>
            </div>
            <div className="banner-image">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Denim Deal"
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="banner-slide">
          <div className="banner-content">
            <div className="banner-text">
              <h1>Exclusive Winter Collection</h1>
              <p>Flat 40% off</p>
              <a href="#" className="shop-now-button">Shop Now</a>
            </div>
            <div className="banner-image">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Winter Collection"
              />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="banner-slide">
          <div className="banner-content">
            <div className="banner-text">
              <h1>Summer Sale</h1>
              <p>Up to 60% off</p>
              <a href="#" className="shop-now-button">Shop Now</a>
            </div>
            <div className="banner-image">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Summer Sale"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
