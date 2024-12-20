import React,{useState} from 'react'
import Content from './Content'
import Pastspeakers from './Pastspeakers'
function Previousthemes() {
    
    const [year,setYear]=useState(2023)

  return (
    <div style={{position:"relative"}}>
        <div className='mobile:pt-8 mt-20 lg:pt-16 pr-6 grid md:grid-row-2 lg:grid-cols-4  lg:grid-row-0 md:divide-x-0 lg:divide-x-2 divide-gray-500 '>
            <div>
            {/* <hr className='border-0 h-1 ml-14 mb-4 rounded w-1/6  bg-white'/> */}
                <div className='lg:fixed lg:top-36 gap-4 mobile:pl-10 lg:pl-8 xl:pl-20 lg:pr-8 grid md:grid-row-3 lg:grid-row-0 '>
                    <h1 className='mobile:text-xl md:text-2xl md:mb-0 lg:mb-1 text-red-600 font-semibold'>Previous Themes</h1>
                    <ul className='text-gray-300'>
                        <li className='md:pt-0 lg:pt-3'><button onClick={()=>setYear(2023)}>Butterfly Effect | 2023</button></li>
                        <li className='md:pt-0 lg:pt-3'><button onClick={()=>setYear(2018)}>Prism | 2018</button></li>
                        <li className='md:pt-0 lg:pt-3'><button onClick={()=>setYear(2017)}>Paradigm Shift | 2017</button></li>
                        <li className='md:pt-0 lg:pt-3'><button onClick={()=>setYear(2016)}>Unshelling | 2016</button></li>
                   </ul>
                   <h1 className='mobile:text-xl md:text-2xl md:mb-0 lg:mb-1 text-red-600 font-semibold mt-10'>Previous Teams</h1>
                    <ul className='text-gray-300'>
                    <li className='md:pt-0 lg:pt-3'>
                        <button><a href="/team">Team 2023</a></button>
                    </li>
                    </ul>
                </div>
            </div>
            <div className='lg:col-span-3 gap-4 mobile:pl-10 lg:pl-20 lg:pr-8'>
                    <Content props={year}/>
                    {/* <Carousel props={year}/> */}
                    <Pastspeakers props={year}/>
            </div>
        </div>
    </div>
  )
}

export default Previousthemes