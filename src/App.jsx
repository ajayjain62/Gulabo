// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader'; // Import the Loader component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Header1 from './components/Header1';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Compare from './pages/Compare';
import Wishlist from './pages/Wishlist';
import './assets/css/loader.css'; // Import the loader styles

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout based on your loading requirements
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <>
          <Header />
          <Header1 />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-page" element={<Product />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
