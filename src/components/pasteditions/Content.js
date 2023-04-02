import React from 'react'

function Content({props}) {
    let data=[
        {
            "year":2016,
            "theme":"Unshelling",
            "description":"As long as we let the constraints rule us, as long as we choose to sit in our little bubbles of comfort, we are stuck in a rut. we have to break the shell that is trapping us, taking on one layer at a time. we have to UNSHELL."
        },
        {
            "year":2017,
            "theme":"Paradigm Shift",
            "description":"So many situations and issues around us in the everyday world that need a makeover, so many patterns and molds that have been around for ages and have to be broken, so many old and irrelevant mindsets and cultures for which extinction is overdue. If we want to bring about a phenomenal change to the status quo, we should start questioning the ‘paradigms’. This is the sort of change that is disruptive!"
        },
        {
            "year":2018,         
            "theme":"Prism",
            "description":"The third edition of TEDxVNRVJIET was held on the 24th of March 2018 and the theme for the event was ‘Prism’. Prism being the converging influence of colours was symbolic of the TEDxVNRVJIET community being the confluence of various ideas and opinions. The theme also served to transform small dreams into bigger realities and irrationalities to rationalities."
        }
    ]
    let obj=data.find(o=>o.year===props);
  return (
    <div>
            {/* <hr className='border-0 h-1 ml-16 mb-4 rounded w-1/6  bg-white'/> */}
            <div>
                <div className='pl-28 pr-10'>
                        <h1 className='text-4xl mb-5 text-red-700 font-semibold'>{obj.theme} | {obj.year}</h1>
                        <p className='text-gray-300 font-medium pr-6'>{obj.description}</p>
                </div>
            </div>
    </div>
  )
}

export default Content