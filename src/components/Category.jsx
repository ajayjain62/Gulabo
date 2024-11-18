import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import * as THREE from 'three';
import bedsheet from "../assets/img/category/bedsheet.jpg";
import comforter from "../assets/img/category/comforter.jpg";
import cushion from "../assets/img/category/cushion.jpg";
import dohar from '../assets/img/category/dohar.jpg';
import mattressProtector from '../assets/img/category/mattressProtector.jpg';

const Carousel = () => {
  const sceneRef = useRef();

  useEffect(() => {
    // Set up the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Add particles to the scene
    const particleCount = 500;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
    });

    const particlesArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlesArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesArray, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Three.js Background */}
      <div
        ref={sceneRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>

      {/* Carousel */}
      <div style={{ padding: '40px 40px', position: 'relative', zIndex: 1 }}>
        <Splide
          options={{
            type: 'loop',
            drag: 'free',
            snap: true,
            perPage: 5,
            gap: '20px',
            arrows: false,
            pagination: true,
          }}
        >
          {[
            { src: comforter, label: "Comforter" },
            { src: cushion, label: "Cushions" },
            { src: bedsheet, label: "Bedsheet" },
            { src: mattressProtector, label: "Mattress Protector" },
            { src: dohar, label: "Dohar" },
          ].map((item, index) => (
            <SplideSlide key={index}>
              <div
                style={{
                  padding: '10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease', // Smooth transition
                  }}
                  className="hover-image"
                />
                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  {item.label}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .hover-image:hover {
            transform: scale(1.05); /* Grows slightly on hover */
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
