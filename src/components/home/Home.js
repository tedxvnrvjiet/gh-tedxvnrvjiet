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
      <Timeline/>
      <Fade left>
        <Theme />
      </Fade>
      <Fade right>
        <Speakers />
      </Fade>
      <Fade right>
        <TEDx />
      </Fade>
    </div>
  )
}

export default Home