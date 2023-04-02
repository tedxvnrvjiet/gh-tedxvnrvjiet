import React,{useState} from 'react'
import Content from './Content'
import Carousel from './Carousel'
function Previousthemes() {
    
    const [year,setYear]=useState(2018)
    const [video,setVideo]=useState(0);

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
                    {/* <iframe id="vid_frame"
                    src="https://www.youtube.com/embed/ADBhj5oSM5c?enablejsapi=1&rel=0&showinfo=0&autohide=1"
                    frameborder="0" width="560" height="315"></iframe> */}
                    <Carousel props={year}/>
            </div>
        </div>
    </div>
  )
}

export default Previousthemes