import React from 'react'
import Landing from './Landing/Landing'
import Timer from './Timer/Timer'
import TEDx from './TEDx/TEDx'
import Theme from './Theme/Theme'
import Speakers from './Speakers/Speakers'
import Fade from 'react-reveal/Fade';
import Timeline from './Timeline/Timeline'
function Home() {
  return (
    <div>
      <Landing />
      <Fade right>
        <TEDx />
      </Fade>
      <Fade left>
        <Theme />
      </Fade>
      <Timeline/>
      <Fade right>
        <Speakers />
      </Fade>
    </div>
  )
}

export default Home