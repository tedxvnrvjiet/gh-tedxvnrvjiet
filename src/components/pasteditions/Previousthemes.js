import React,{useState} from 'react'
import Content from './Content'
import Carousel from './Carousel'
import Pastspeakers from './Pastspeakers'
function Previousthemes() {
    
    const [year,setYear]=useState(2018)

  return (
    <div style={{position:"relative",zIndex:"6"}}>
        <div className='pt-24 pr-10 grid grid-cols-4 divide-x-2 divide-gray-500'>
            <div>
            {/* <hr className='border-0 h-1 ml-14 mb-4 rounded w-1/6  bg-white'/> */}
                <div className='gap-4 pl-20'>
                    <h1 className='text-2xl mb-5 text-red-600 font-semibold'>Previous Themes</h1>
                    <ul className='text-gray-300 '>
                        <li className='pt-3'><button onClick={()=>setYear(2018)}>Prism | 2018</button></li>
                        <li className='pt-3'><button onClick={()=>setYear(2017)}>Paradigm Shift | 2017</button></li>
                        <li className='pt-3'><button onClick={()=>setYear(2016)}>Unshelling | 2016</button></li>
                   </ul>
                </div>
            </div>
            <div className='col-span-3'>
                    <Content props={year}/>
                    {/* <Carousel props={year}/> */}
                    <Pastspeakers props={year}/>
            </div>
        </div>
    </div>
  )
}

export default Previousthemes