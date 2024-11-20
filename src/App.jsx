// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Loader from "./components/Loader"; // Import the Loader component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Coming from "./pages/Coming";
import Return from "./pages/Return";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import MobileHeader from "./components/MobileHeader.jsx";
// import Ham from "./components/Ham"; // If the correct name is Hamburger
import "./assets/css/loader.css"; // Import the loader styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout based on your loading requirements
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const Layout = ({ children }) => {
    const location = useLocation();

    // If the user is on the "/coming-soon" route, render only the `Coming` component.
    if (location.pathname === "/coming-soon") {
      return <>{children}</>;
    }

    // Default layout with headers, navbar, footer
    return (
      <>
        <Header />
        <Header1 />
        <MobileHeader/>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  };

  return (
    <Router>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <Routes>
          {/* Coming Soon Route */}
          <Route path="/coming-soon" element={<Coming />} />
          {/* Other routes wrapped with Layout */}
          <Route
            path="*"
            element={
              <Layout>
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
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms-and-conditions" element={<Terms />} />
                  <Route path="/return-and-refund" element={<Return />} />
                  <Route path="/shipping" element={<Shipping />} />
                  {/* <Route path="/ham" element={<Ham />} /> */}

                </Routes>
              </Layout>
            }
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
