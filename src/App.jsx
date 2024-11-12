// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct relative path
import Footer from './components/Footer';  // Correct relative path
import Home from './pages/Home';  // Use './' for relative path
import About from './pages/About';  // Use './' for relative path
import Header from './components/Header';
import Header1 from './components/Header1';
import Shop from './pages/shop';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact';
import Product from './pages/Product.jsx';
import Compare from './pages/Compare.jsx';
import { Button } from '@material-tailwind/react';

// src/App.js or src/main.js
import './assets/css/ionicons.min.css';
import './assets/css/simple-line-icons.css';
import './assets/css/plugins/jquery-ui.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/plugins/plugins.css';
import './assets/css/style.min.css';

const App = () => (
  <Router>
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



    </Routes>
    
    <Footer />
  </Router>
);

export default App;
