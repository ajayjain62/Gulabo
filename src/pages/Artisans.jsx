import React from "react";
import Slider from "react-slick";
import palmTree from "../assets/img/category/bedsheet.jpg";
import leaflet from "../assets/img/category/bedsheet.jpg";
import reversible from "../assets/img/category/bedsheet.jpg";
import honey from "../assets/img/category/bedsheet.jpg";
import hoops from  "../assets/img/category/bedsheet.jpg";
import floret from "../assets/img/category/bedsheet.jpg";
// import honey from "../assets/img/category/honey.jpeg";
// import hoops from "../assets/img/category/hoops.jpeg";
// import floret from "../assets/img/category/hoops.jpeg";

const shopItems = [
  { image: reversible, title: "bedsheet" },
  { image: hoops, title: "Hoops" },
  { image: honey, title: "Honey comb" },
  { image: floret, title: "White Floret" },
  { image: leaflet, title: "Leaflet" },
  { image: palmTree, title: "Palm Tree" },
  
];

const ShopTheLookCarousel = () => {
  const settings = {
    infinite: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: "2",
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Smaller phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <style>{`
        .shop-the-look-carousel-wrapper {
          padding: 20px 10px;
        }

        .carousel-item {
          text-align: center;
          margin: 0 auto;
        }

        .carousel-content {
          padding: 10px;
        }

        .carousel-image {
          max-width: 100%;
          height: auto;
          margin: 0 auto;
          border-radius: 8px;
        }

        .shop-now {
          margin-top: 10px;
          background-color: #333;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 14px;
          border-radius: 5px;
          cursor: pointer;
        }

        .shop-now:hover {
          background-color: #555;
        }

        @media (max-width: 768px) {
          .carousel-image {
            width: 80%;
          }

          .shop-now {
            font-size: 12px;
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .carousel-image {
            width: 90%;
          }

          .shop-now {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
      `}</style>
      <section className="shop-the-look-carousel-wrapper">
        <div className="shop-the-look-carousel">
          <div className="container">
            <div className="section-title text-center" style={{ marginTop: "3%" }}>
              <h2
                className="title"
                style={{
                  margin: "0px",
                  padding: "13px 0px 11px",
                  font: "italic 400 24px Trirong, serif",
                  fontWeight: 600,
                  letterSpacing: "1.1px",
                  color: "#333",
                }}
              >
                Shop By Design
              </h2>
              <p className="text" style={{ color: "grey", fontSize: "18px", fontWeight: "100" }}>
                Shop the Trendiest Designs for Your Perfect Decor
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {shopItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="carousel-content">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="carousel-image"
                  />
                  <button className="shop-now">
                    {item.title}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ShopTheLookCarousel;
