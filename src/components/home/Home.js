import React from 'react';
// import Landing from './Landing/Landing';
// import Timer from './Timer/Timer';
// import TEDx from './TEDx/TEDx';
// import Theme from './Theme/Theme';
// import Speakers from './Speakers/Speakers';
// import Fade from 'react-reveal/Fade';
// import Timeline from './Timeline/Timeline';
import comingSoonImage from './Coming-Soon/COMINGSOON.png'; // Replace with the actual path

function Home() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}> {}
        <img src={comingSoonImage} alt="Coming Soon" style={{ maxWidth: '100%' }} />
      </div>
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
    </div>
    
  );
}

export default Home;
