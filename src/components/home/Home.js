import React from 'react';
// import Landing from './Landing/Landing';
// import Timer from './Timer/Timer';
// import TEDx from './TEDx/TEDx';
// import Theme from './Theme/Theme';
// import Speakers from './Speakers/Speakers';
// import Fade from 'react-reveal/Fade';
// import Timeline from './Timeline/Timeline';
import bgvideo from './Videos/bgvideo.mp4'; 

function Home() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      <video 
        src={bgvideo} 
        autoPlay 
        muted 
        loop 
        style={{ 
          position: 'absolute', 
          top: '0', 
          left: '0', 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',  // Make sure the video covers the container without distortion
        }}
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* Other components */}
      {/* <Landing /> */}
      {/* <Timeline /> */}
      {/* <Fade right> */}
        {/* <TEDx /> */}
      {/* </Fade> */}
      {/* <Fade left> */}
        {/* <Theme /> */}
      {/* </Fade> */}
      {/* <Fade right> */}
        {/* <Speakers /> */}
      {/* </Fade> */}

      <style jsx>{`
        @media (max-width: 768px) {
          video {
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
