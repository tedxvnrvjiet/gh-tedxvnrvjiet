import React from 'react'
import FacultyMems from './FacultyMems.js'

import Principal from '../../assets/faculty/Principal.png'
import Padmasai from '../../assets/faculty/Padmasai.jpeg'
import Director from '../../assets/faculty/Director.png'
import Priyanka from '../../assets/faculty/Priyanka.png'
import Amjad from '../../assets/faculty/Amjad.png'
import Kiran from '../../assets/faculty/Kiran.png'
function Faculty() {
  const org=[
    {
      url:Principal,
      name:"Dr.C.D.Naidu",
      post:"Principal, VNRVJIET",
      linkedin:"",
      instagram:""
    },
    {
      url:Director,
      name:"Dr. B Chennakesava Rao",
      post:"Director Of Advancement Dean",
      linkedin:"",
      instagram:""
    },
    {
      url:Padmasai,
      name:"Dr.Yarlagadda Padma Sai",
      post:"Dean Students Progression",
      linkedin:""
    }
  ]

  const org2 =[
    {
      url:Kiran,
      name:"Dr.Kiran Chakravarthula",
      post:"Associate Professor",
      linkedin:"https://www.linkedin.com/in/kirandotc/?originalSubdomain=in",
      instagram:""
    },
    {
      url:Priyanka,
      name:"Dr. Priyanka Veeramosu",
      post:" Assistant Professor, ECE",
      linkedin:"",
      instagram:""
    },
    {
      url:Amjad,
      name:"Dr.Shaik Amjad",
      post:"Professor & HOD, Automobile Engineering",
      linkedin:"https://www.linkedin.com/in/amjad-shaik-aa945526/",
      },
  ]
  return (
    <div className='mt-20 profile'>
        <p className='text-red-600 font-bold text-3xl mt-10 mb-10 text-center'>Faculty </p>
        <div class="flex flex-col md:flex-row justify-center align-center">
        {
          org.map((ar,index)=><FacultyMems key={index} ar={ar}/>)
        }
      </div>
      <div class="flex flex-col md:flex-row justify-center align-center">
        {
          org2.map((ar,index)=><FacultyMems key={index} ar={ar}/>)
        }
      </div>
    </div>

  )
}

export default Faculty