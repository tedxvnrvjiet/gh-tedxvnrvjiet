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
      <div 
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'relative',
        }}
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: '30%', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            <span style={{ color: 'red' }}>TED<sup>x</sup></span>VNRVJIET
          </h1>
          <h2 style={{ fontSize: '2rem', margin: '10px 0' }}><b> 28th October, 2024</b></h2>
          <Timer /> 
          <div style={{ marginTop: '20px', fontSize: '1rem' }}>
            <p>VNR Vignana Jyothi Institute of Engineering and Technology</p>
          </div>
        </div>
      </div>

      {/* Speakers Section Below the Background Image */}
      <div style={{ marginTop: '5px' }}>
        <Speakers />
      </div>
    </div>
  );
}

export default Home;