import React from 'react'
import Previousthemes from './Previousthemes'
import ParticlesBackground from '../ParticlesBackground'
import background from '../images/background.jpg'
function Pasteditions() {
  return (
    <div style={{backgroundImage:`url(${background})`,backgroundRepeat:"repeat",backgroundSize:"cover"}}>
      {/* <ParticlesBackground/> */}
        {/* <div className='pt-8'>
            <hr className='border-0 h-1 rounded w-1/6 ml-5 bg-red-700'/>
            <h1 id="heading" className=' text-white font-semibold font-serif italic md:pt-6 md:pr-7 md:pl-28  mobile:text-3xl  md:text-5xl mobile:text-center md:text-justify'>Past Editions</h1>
        </div> */}
      <Previousthemes/>
    </div>
  )
}

export default Pasteditions