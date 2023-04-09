import React from 'react'
import Landing from './Landing/Landing'
import Timer from './Timer/Timer'
import TEDx from './TEDx/TEDx'
import Speakers from './Speakers/Speakers'

function Home() {
  return (
    <div>
      <Landing />
      <Timer />
      <TEDx />
      <Speakers />
    </div>
  )
}

export default Home