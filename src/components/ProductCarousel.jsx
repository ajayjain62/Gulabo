import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import cushion from "../assets/img/category/cushion.jpg"

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const backend = 'http://localhost:3001';

  useEffect(() => {
    axios.get(backend + "/get_all_product")
      .then(res => {
        console.log(res.data.value[0].name + " Inside axios");
        setProducts(res.data.value);
      })
      .catch();
  }, []);

  // Function to limit description to 5 words with an ellipsis
  const limitWords = (text, wordLimit = 5) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView="auto"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} style={{ width: "245px" }}>
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root notif-brand-desc-price"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px",
                borderRadius: "4px",
                backgroundColor: "rgb(245, 245, 245)",
                padding: "12px 12px 16px"
              }}
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <div className="MuiCardContent-root card-content-area">
                  <div
                    className="MuiCardMedia-root card-media-area"
                    style={{
                      backgroundImage: {cushion},
                      backgroundSize: "cover",
                      paddingBottom: "150%",
                      borderRadius: "6px"
                    }}
                  >
                  </div>
                  <div className="DealcontentHeading">
                    <h4 style={{ display: "inline-flex", alignItems: "center" }}>
                      <span
                        className="DealcontentHeadingOffer"
                        style={{
                          border: "1px solid rgb(210, 129, 224)",
                          borderRadius: "8px",
                          padding: "5px 8px",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "rgb(0, 0, 0)"
                        }}
                      >
                        {product.name}
                      </span>
                     
                    </h4>
                  </div>
                 
                  <p style={{ fontSize: "14px", margin: "0 0 11px", color: "#000000" }}>
                    {limitWords(product.description)}
                  </p>
                  <div className="product-price" style={{ fontWeight: 600, fontSize: "13px" }}>
                 <h6> {product.product_price}</h6>
                    <s style={{ marginLeft: "5px", color: "rgb(178, 178, 178)" }}>{product.originalPrice}</s>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
