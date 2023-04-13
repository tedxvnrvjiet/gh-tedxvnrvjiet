import React from 'react'
import TeamMember from './TeamMember.js'
function Team() {
  const arr1=[
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
  const arr2=[
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
  const arr3=[
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
      <p className='mx-8 my-8 font-sans font-bold text-4xl '>Cat-1</p>
        <div class="flex flex-wrap my-8">
        {
          arr1.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='mx-16 my-8 font-sans font-bold text-4xl'>Cat-2</p>
        <div class="flex flex-wrap my-8">
        {
          arr2.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='mx-16 my-8 font-sans font-bold text-4xl'>Cat-3</p>
        <div class="flex flex-wrap my-8">
        {
          arr3.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
    </div>
    

  )
}

export default Team
