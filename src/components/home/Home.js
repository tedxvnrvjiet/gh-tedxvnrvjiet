import React from 'react';
// import Landing from './Landing/Landing';
import Timer from './Timer/Timer';
// import TEDx from './TEDx/TEDx';
// import Theme from './Theme/Theme';
import Speakers from './Speakers/Speakers';
// import Fade from 'react-reveal/Fade';
// import Timeline from './Timeline/Timeline';
import bgvideo from './Videos/bgvideo.mp4'; 
import bgImage from '../../assets/ButterfliesDark.png'

function Home() {
  return (
    <div>
  <style>
    {`
      @media (max-width: 350px) {
        .home-title {
          font-size: 1.8rem !important; /* Adjusted font size for smaller screens */
        }
        .home-subtitle {
          font-size: 1.2rem !important; /* Adjusted font size for smaller screens */
        }
      }
    `}
  </style>

  <div 
    style={{ 
      backgroundImage: `url(${bgImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '75vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'relative',
      padding: '0 20px',
      overflow: 'hidden',
    }}
  >
    <div 
      style={{ 
        position: 'absolute', 
        top: '20%', 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        color: 'white', 
        padding: '15px', 
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '90%',
      }}
    >
      <h2 className="home-title" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        <span style={{ color: 'red' }}>TED<sup>x</sup></span>VNRVJIET
      </h2>
      <h2 className="home-subtitle" style={{ fontSize: '1.5rem', margin: '10px 0' }}><b>28th October, 2024</b></h2>
      <Timer /> 
      <div style={{ marginTop: '20px', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
        <i 
          className="fas fa-map-marker-alt" 
          style={{ color: 'red', marginRight: '8px', fontSize: '1.2rem' }} 
          aria-hidden="true"
        ></i>
        <p>VNR Vignana Jyothi Institute of Engineering and Technology</p>
      </div>
    </div>
  </div>

  <div style={{ marginTop: '0px', padding: '0px' }}> 
    <Speakers />
  </div>
</div>

  );
}

export default Home;