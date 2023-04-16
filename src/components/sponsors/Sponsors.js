import React from 'react'
import soon from '../../assets/soon.png'
import './Sponsors.css'

function Sponsors() {
  return (
    <div>
        <div className='sponsors'>
            {/* <hr className='border-0 h-1 rounded w-1/6 ml-5 bg-red-700'/> */}
            {/* <h1 id="heading" className=' text-white font-semibold font-serif italic  my-44 text-center text-6xl'>Will be uploaded soon!</h1> */}
            <img src={soon} alt="" />
        </div>
    </div>
  )
}

export default Sponsors