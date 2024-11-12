import React from 'react';

const trendingStyles = [
  {
    title: 'Timeless Retro',
    imageUrl: 'https://via.placeholder.com/200x300?text=Decor+Image+1', // Dummy decor image
  },
  {
    title: 'Indigo Moods',
    imageUrl: 'https://via.placeholder.com/200x300?text=Decor+Image+2', // Dummy decor image
  },
  {
    title: 'Funky Fusion',
    imageUrl: 'https://via.placeholder.com/200x300?text=Decor+Image+3', // Dummy decor image
  },
  {
    title: 'Polo Play',
    imageUrl: 'https://via.placeholder.com/200x300?text=Decor+Image+4', // Dummy decor image
  },
];

const TrendingStyles = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      margin: '20px 40px',
      width: '100%',
      maxWidth: '1320px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',  // Section background shadow
      backgroundColor: '#f8f8f8',
      fontFamily: "Trirong, serif",
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          flex: '1',
          height: '1px',
          backgroundColor: '#ccc',
          marginRight: '10px'
        }} />
        <h2 style={{
         boxSizing: "border-box",
                    margin: "0px",
                    border: "0px",
                    verticalAlign: "initial",
                    padding: "13px 0px 11px",
                    font: "italic 400 24px Trirong, serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontStretch: "normal",
                    fontSize: "24px",
                    lineHeight: "normal",
                    fontFamily: "Trirong, serif",
                    letterSpacing: "1.1px",
                    color: "rgb(0, 0, 0)",
                    textAlign: "center",
                    flexGrow: 1,

        }}>Trending Styles</h2>
        <div style={{
          flex: '1',
          height: '1px',
          backgroundColor: '#ccc',
          marginLeft: '10px'
        }} />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
      }}>
        {trendingStyles.map((style, index) => (
          <div key={index} style={{
            width: '200px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              width: '100%',
              height: '100%',
              backgroundColor: '#8fc4c3',  // Shadow color for image
              zIndex: '-1',
              borderRadius: '8px'
            }}></div>
            <img 
              src={style.imageUrl} 
              alt={style.title} 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'  // Image box shadow
              }}
            />
            <p style={{
              fontSize: '18px',
              fontWeight: '500',
              marginTop: '10px',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}>
              <span style={{ fontSize: '20px', color: '#000' }}>▶</span> {style.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingStyles;
