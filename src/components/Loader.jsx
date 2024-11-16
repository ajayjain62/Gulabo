// src/components/Loader.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../assets/css/loader.css'; // Make sure to link the CSS file

const Loader = () => {
  const textRef = useRef([]);

  useEffect(() => {
    // Split the text into characters and animate each one
    const letters = textRef.current;

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: -90, // Starting with a flip effect
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0, // Ending with a natural position
        duration: 4,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)", // Elastic bounce for more impact
      }
    );

    // Background color animation
    gsap.to(".loader-background", {
      backgroundPosition: "200% 0", // Move the gradient
      duration: 1,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="loader-background">
      <div className="loader-wrapper">
        <div className="loader-container">
          
          <div className="text-container">
            <span ref={(el) => (textRef.current[0] = el)} className="letter">
              G
            </span>
            <span ref={(el) => (textRef.current[1] = el)} className="letter">
              U
            </span>
            <span ref={(el) => (textRef.current[2] = el)} className="letter">
              L
            </span>
            <span ref={(el) => (textRef.current[3] = el)} className="letter">
              A
            </span>
            <span ref={(el) => (textRef.current[4] = el)} className="letter">
              B
            </span>
            <span ref={(el) => (textRef.current[5] = el)} className="letter">
              I
            </span>
            <span ref={(el) => (textRef.current[6] = el)} className="letter-space">
              &nbsp;
            </span>
            <span ref={(el) => (textRef.current[7] = el)} className="letter">
              D
            </span>
            <span ref={(el) => (textRef.current[8] = el)} className="letter">
              E
            </span>
            <span ref={(el) => (textRef.current[9] = el)} className="letter">
              C
            </span>
            <span ref={(el) => (textRef.current[10] = el)} className="letter">
              O
            </span>
            <span ref={(el) => (textRef.current[11] = el)} className="letter">
              R
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
