import React from 'react';
// import Landing from './Landing/Landing';
import Timer from './Timer/Timer';
// import TEDx from './TEDx/TEDx';
// import Theme from './Theme/Theme';
import Speakers from './Speakers/Speakers';
// import Fade from 'react-reveal/Fade';
// import Timeline from './Timeline/Timeline';
import bgvideo from './Videos/bgvideo.mp4'; 
import bgImage from '../images/background.jpg'

function Home() {
  return (
    <div>
      <div 
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '75vh', // Use minHeight to ensure it grows with content
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'relative',
          padding: '0 20px', // Added horizontal padding for smaller screens
          overflow: 'hidden', // Prevent overflow issues
        }}
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: '20%', // Moved the content up
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            color: 'white', 
            padding: '15px', // Reduced padding
            borderRadius: '10px',
            textAlign: 'center',
            maxWidth: '90%', // Limit the width for better appearance
          }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            <span style={{ color: 'red' }}>TED<sup>x</sup></span>VNRVJIET
          </h1>
          <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}><b>28th October, 2024</b></h2>
          <Timer /> 
          <div style={{ marginTop: '20px', fontSize: '1rem' }}>
            <p>VNR Vignana Jyothi Institute of Engineering and Technology</p>
          </div>
        </div>
      </div>

      {/* Ensure the speakers section appears below the background section */}
      <div style={{ marginTop: '0px', padding: '20px' }}> {/* Adjust padding for spacing */}
        <Speakers />
      </div>
    </div>
  );
}

export default Home;