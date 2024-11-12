import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../assets/img/category/banner.jpg"
import banner2 from "../assets/img/category/banner2.jpg"
import banner3 from "../assets/img/category/banner3.jpg"

function SwiperComponent() {
  return (
    <Carousel interval={4000} controls={true} pause={false}>
      <Carousel.Item >
        <img
          className="d-block w-100"  style={{height: "40vw"}}
src={banner3} // Use forward slashes
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{height: "40vw"}}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{height: "40vw"}}
          className="d-block w-100"
          src={banner} // Adjusted image path for variation
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SwiperComponent;
