import React from 'react'
import TeamMember from './TeamMember.js'
import Manjunadh from '../../assets/team/manjunadh reddy.jpg' 
import Faizan from '../../assets/team/faizan.jpg'

function Team() {
  const arr1=[
    {
      url:Manjunadh,
      name:"Satya Manjunadh",
      post:"Organizer"
    },
    {
      url:Faizan,
      name:"Faizan Hashmi",
      post:"Co-Organizer"
    }
  ]
  
  return (
    <div className='mt-40 profile'>
        <div class="flex flex-col md:flex-row justify-center align-center">
        {
          arr1.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
    </div>

  )
}

export default Team