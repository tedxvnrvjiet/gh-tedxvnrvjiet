import React from 'react'
import Landing from './Landing/Landing'
import Timer from './Timer/Timer'
import TEDx from './TEDx/TEDx'
import Theme from './Theme/Theme'
import Speakers from './Speakers/Speakers'
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <div className='bg-black'>
      <Landing />
      <Fade left>
        <Timer />
      </Fade>
      <Fade right>
        <TEDx />
      </Fade>
      <Fade left>
        <Theme />
      </Fade>
      <Fade right>
        <Speakers />
      </Fade>
    </div>
  )
}

export default Home