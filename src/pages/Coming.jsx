import React, { useEffect, useRef } from 'react';

const BeerCanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 280;

    // Function to adjust the canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle constructor function
    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 300;
      this.speed = 1 + Math.random();
      this.radius = Math.random() * 3;
      this.opacity = Math.random() * 0.3;
    }

    // Initialize particles
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fill();

        // Update particle position
        p.y -= p.speed;

        // Reset particle if it moves off-screen
        if (p.y <= -10) {
          particles[i] = new Particle();
        }
      }
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    // Initialize canvas, particles, and start animation
    resizeCanvas();
    createParticles();
    animate();

    // Add event listener to handle window resizing
    window.addEventListener('resize', resizeCanvas);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section style={styles.section}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.content}>
        <h1 style={styles.title}>Coming Soon</h1>
        <div style={styles.separatorContainer}>
          <div style={styles.separator}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="320.864"
                height="320.864"
                viewBox="0 0 320.864 320.864"
              >
                <path
                  fill="#fff"
                  d="M184.04 81.83c-1.89-5.1-3.46-28.63-3.926-55.05-.003-.1.107-.37.514-.37 2.092-.125 3.248-1.79 3.248-3.91V4c0-2.2-1.8-4-4-4H140.99c-2.2 0-4 1.8-4 4v18.5c0 2.123 1.06 3.77 3.152 3.89.673 0 .613.478.61.673-.463 26.677-2.035 49.67-3.925 54.77-11.12 29.993-35.884 27.39-35.884 63.393V273.96c0 49.536 24.92 47.044 59.49 46.82 34.57.224 59.49 2.716 59.49-46.82V145.226c0-36.002-24.764-33.4-35.883-63.394zm12.89 127.953c-5.845 8.89-31.005 30.02-36.458 30.02-5.338 0-30.727-21.21-36.532-30.02-2.907-4.41-4.97-9.277-4.627-15.678.605-11.325 9.866-20.678 21.208-20.678 11.66 0 18.45 12.44 19.915 12.44 1.675 0 8.755-12.44 19.914-12.44 11.34 0 20.6 9.353 21.206 20.678.342 6.4-1.713 11.247-4.627 15.678z"
                />
              </svg>
            </span>
          </div>
        </div>
        <h3 style={styles.subtitle}>I like beer. Oh, and Gulabi Decor too.</h3>
      </div>
    </section>
  );
};

// Styles
const styles = {
  section: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'radial-gradient(circle, #FBB600, #DA5900)',
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    textAlign: 'center',
    color: '#fff',
    zIndex: 101,
  },
  title: {
    fontSize: '4rem',
    margin: 0,
    letterSpacing: '2px',
  },
  separatorContainer: {
    margin: '12px 0',
  },
  separator: {
    margin: '0 auto',
    width: '11em',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '2px',
    margin: 0,
  },
};

export default BeerCanvasComponent;
