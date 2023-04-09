import React from 'react'
import TeamMember from './TeamMember.js'
function Team() {
  const arr=[
    {
      url:"https://picsum.photos/130/130?image=1027",
      name:"Michele Miller",
      post:"Web Developer"
    },
    {
      url:"https://picsum.photos/130/130?image=1027",
      name:"Michele Miller",
      post:"Web Developer"
    },
    {
      url:"https://picsum.photos/130/130?image=1027",
      name:"Michele Miller",
      post:"Web Developer"
    },
    {
      url:"https://picsum.photos/130/130?image=1027",
      name:"Michele Miller",
      post:"Web Developer"
    },
    {
      url:"https://picsum.photos/130/130?image=1027",
      name:"Michele Miller",
      post:"Web Developer"
    },
    {
      url:"https://picsum.photos/130/130?image=1027",
      name:"Michele Miller",
      post:"Web Developer"
    }
  ]
  return (
    <div class="ml-32">
        <div class="flex flex-wrap my-8">
        {
          arr.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
    </div>
    

  )
}

export default Team
