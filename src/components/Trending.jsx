import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingStyles = [
  {
    title: "Timeless Retro",
    imageUrl: "https://via.placeholder.com/200x300?text=Decor+Image+1",
  },
  {
    title: "Indigo Moods",
    imageUrl: "https://via.placeholder.com/200x300?text=Decor+Image+2",
  },
  {
    title: "Funky Fusion",
    imageUrl: "https://via.placeholder.com/200x300?text=Decor+Image+3",
  },
  {
    title: "Polo Play",
    imageUrl: "https://via.placeholder.com/200x300?text=Decor+Image+4",
  },
];

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const TrendingStyles = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sliderSettings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    swipe: true, // Enable swipe gestures for mobile
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: isMobile ? "20px 10px" : "40px",
        margin: "20px auto",
        width: "100%",
        maxWidth: "1320px",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#f8f8f8",
        fontFamily: "Trirong, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            flex: "1",
            height: "1px",
            backgroundColor: "#ccc",
            marginRight: "10px",
          }}
        />
        <h2
          style={{
            margin: "0px",
            padding: "13px 0px 11px",
            font: "italic 400 24px Trirong, serif",
            fontWeight: 600,
            letterSpacing: "1.1px",
            color: "rgb(0, 0, 0)",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Trending Styles
        </h2>
        <div
          style={{
            flex: "1",
            height: "1px",
            backgroundColor: "#ccc",
            marginLeft: "10px",
          }}
        />
      </div>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {trendingStyles.map((style, index) => (
            <div key={index} style={{ textAlign: "center", padding: "10px" }}>
              <img
                src={style.imageUrl}
                alt={style.title}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  margin: "0 auto",
                }}
              />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginTop: "10px",
                  color: "#333",
                }}
              >
                {style.title}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {trendingStyles.map((style, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={style.imageUrl}
                alt={style.title}
                style={{
                  width: "200px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "10px",
                  color: "#333",
                }}
              >
                {style.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingStyles;
