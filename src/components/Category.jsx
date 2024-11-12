import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import bedsheet from "../assets/img/category/bedsheet.jpg";
import comforter from "../assets/img/category/comforter.jpg";
import cushion from "../assets/img/category/cushion.jpg";
import dohar from '../assets/img/category/dohar.jpg';
import mattressProtector from '../assets/img/category/mattressProtector.jpg'


const Carousel = () => {
  return (
    <div style={{ padding: '40px 40px', marginTop:'-20px' }}>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          snap: true,
          perPage: 5,
          gap: '20px', // Adds space between slides
          arrows: false, // Hides arrows
          pagination: true, // Enables pagination
        }}
      >
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src={comforter}
              alt="Slide 1"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Comforter</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src={cushion}
              alt="Slide 3"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Cushions</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src={bedsheet}
              alt="Slide 2"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Bedsheet</div>
          </div>
        </SplideSlide>
        
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src={mattressProtector}
              alt="Slide 4"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Mattress Protector</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src={dohar}
              alt="Slide 5"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold'}}>Dohar</div>
          </div>
        </SplideSlide>
        {/* Add more slides as needed */}
      </Splide>
    </div>
  );
};

export default Carousel;
