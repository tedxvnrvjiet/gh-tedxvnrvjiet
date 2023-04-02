import React from 'react'
import Previousthemes from './Previousthemes'

function Pasteditions() {
  return (
    <div  style={{backgroundColor:'black'}}>
        <div className='pt-8'>
            <hr className='border-0 h-1 rounded w-1/6 ml-5 bg-red-700'/>
            <h1 id="heading" className=' text-white font-semibold font-serif italic pt-6 pr-7 pl-28  mobile:text-2xl  md:text-5xl'>Past Editions</h1>
        </div>
      <Previousthemes/>
    </div>
  )
}

export default Pasteditions