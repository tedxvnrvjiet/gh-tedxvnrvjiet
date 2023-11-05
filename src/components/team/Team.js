import React from 'react'
import TeamMember from './TeamMember.js'
import Manjunadh from '../../assets/team/manjunadh reddy.jpg' 
import Faizan from '../../assets/team/faizan.jpg'
import Rohan from '../../assets/team/Rohan.jpg'
import Yathin from '../../assets/team/Yathin.png'
import Deepesh from '../../assets/team/deepesh.jpg'
import Goutham from '../../assets/team/goutham.jpeg'
import Likith from '../../assets/team/ILLA LIKHITH KUMAR - Likhith illa.jpeg'
import Ananya from '../../assets/team/Ananya - KOMARAVELLI ANANYA.jpg'
import Sharabani from '../../assets/team/IMG-20230124-WA0014 - Sanibhadra Nayak.jpg'
import Amulya from '../../assets/team/M.Durga sai amulya  - Amulya Maroju.jpg'
import Likhita from '../../assets/team/LikhitaBasuthkar - Likhita Basuthkar.jpg'
import Kowshik from '../../assets/team/Kowshik_reddy_Mendu - MENDU KOWSHIK REDDY.jpg'
import Sahiti from '../../assets/team/IMG-20230107-WA0038 - N Sahiti.jpg'
import Ritesh from '../../assets/team/Ritesh - Ritesh surnar.jpg'
import Bhavani from '../../assets/team/K.Bhavani - Bhavya Sree.jpg'
import Shriya from '../../assets/team/0B0A0DA3-A910-4137-A2C9-ACF0BB667FDB - SHAIK MOHAMMAD.jpeg'
import Manya from '../../assets/team/manya@m - Manya Mudhulkar.jpg'
import Satwik from '../../assets/team/Satwik Reddy katukuri - satwik reddy.png'
import Kaif from '../../assets/team/Kaif.png'
import Harshitha from '../../assets/team/IMG_20221130_141606 - PASUPULETI HARSHITHA.jpg'
import Waseem from '../../assets/team/IMG_20221228_020312_960 - Waseem Akram.jpg'
import Apurva from '../../assets/team/GunnalleApurva  - Apurva Gunnalle.jpg'
import Shaik from '../../assets/team/Shaik Sabeeha Kouser - SHAIK SABEEHA KOUSER.jpg'
import Teja from '../../assets/team/Venkata Sai Teja - P Y VENKATA SAI.png' 
import Karthikeya from '../../assets/team/KARTHIKEYA.png'
import Abdul from '../../assets/team/SAMI - Mohammed Abdul Sami.png'
import Aseeruddin from '../../assets/team/Shaik Aseeruddin - SHAIK ASEERUDDIN.jpg'
import Akhilesh from '../../assets/team/Akhilesh Kumandan - Akhilesh Kumandan.jpeg'
import Anirudh from '../../assets/team/Anirudh Bukka - TEDx VNRVJIET.jpg'
import Vaishnav from '../../assets/team/Vaishnav - Vaishnav Arkala.png'
import Tanvi from '../../assets/team/tanvi - Kamanuri Tanvi.jpeg'
import Preeti from '../../assets/team/SaiPreetiPhoto - Sai Preeti Paruchuru.jpg'
import Rishitha from '../../assets/team/903f1820-15a1-42bf-a5a3-d6323b232ecf - Rishitha Sagar.jpg'
import Jayanth from '../../assets/team/Kodaru Jayanth (2) - jayanth kodaru.png'
import Rishikesh from '../../assets/team/Tedxpicrish - Rishi.jpg'
import Amal from '../../assets/team/Amal K - AMAL K.jpg'
import Aman from '../../assets/team/+91 96761 24977 20230327_223453 - Aman Paidlewar.jpg'
import Sanjana from '../../assets/team/Screenshot_20230405-202649_Gallery - Sanjana Mohite.jpg'
import Siri from '../../assets/team/Siri Jaka - Siri Jaka.jpg'
import Sanay from '../../assets/team/PHOTO-2022-05-16-20-57-42 - A SANAY.jpg'
import Pranav from '../../assets/team/Screenshot_2023-04-11-20-31-02-819-edit_com.miui.gallery - Pranav Guddeti.jpg'
import Tarun from '../../assets/team/Tarun - Tarun Karumanchi.jpg'

function Team() {
  const org=[
    {
      url:Manjunadh,
      name:"Satya Manjunadh",
      post:"Organizer",
      linkedin:"",
      instagram:""
    },
    {
      url:Faizan,
      name:"Faizan Hashmi",
      post:"Co-Organizer",
      linkedin:"",
      instagram:""
    }
  ]
  const tech=[
    {
      url:Rohan,
      name:"Rohan Kurella",
      post:"Technical developement",
      linkedin:"",
      instagram:""
    },
    {
      url:Deepesh,
      name:"Srinivasa Deepesh Kommineni",
      post:"Technical developement",
      linkedin:"",
      instagram:""
    },
    {
      url:Goutham,
      name:"Gautham Mallipeddi",
      post:"Technical developement",
      linkedin:"https://www.linkedin.com/in/gautham-mallipeddi-80b2b4214/",
      instagram:"https://www.instagram.com/gautham._.m/"
    },
    {
      url:Yathin,
      name:"Yathin Kumar",
      post:"Technical developement",
      linkedin:"https://www.linkedin.com/in/thota-yathin-kumar-pambal-885289220",
      instagram:"https://www.instagram.com/yathin.t"
    },
  ]
  const content=[
    { url:Likith,
      name: "ILLA LIKHITH KUMAR",
      post:"Content and Documentation",
      instagram: "https://www.instagram.com/likhith_illa/",
      linkedin: "https://www.linkedin.com/in/likhith-illa-a37357226/",
      
  },
  { url :Ananya,
    name: "Komaravelli Ananya ",
    post:"Content and Documentation",
    instagram: "https://instagram.com/_ananya_0102?igshid=ZDdkNTZiNTM=",
    linkedin: "https://www.linkedin.com/in/ananya-komaravelli123",
    
},
{ url:Sharabani,
  name: "Shrabani Sanibhadra Nayak",
  post:"Content and Documentation",
  instagram: "https://instagram.com/just_sani_things",
  linkedin: "Sanibhadra Nayak ",
  
},
{ url:Amulya,
  name: "M.Durga sai amulya ",
  post:"Content and Documentation",
  instagram: "Don't have Instagram ",
  linkedin: "https://www.linkedin.com/in/amulya-maroju-885bb7263",
  
},
{ url:Likhita,
  name: "Likhita Basuthkar",
  post:"Content and Documentation",
  instagram: "https://instagram.com/likhita__bb",
  linkedin: "https://www.linkedin.com/in/likhita-basuthkar-b2a311226",
  
},
{ url:Kowshik,
  name: "Mendu Kowshik Reddy ",
  post:"Content and Documentation",
  instagram: "https://www.instagram.com/_aliennnnnx_/",
  linkedin: "https://www.linkedin.com/in/mendu-kowshik-reddy-79463b226/",
  
},
{ url:Sahiti,
  name: "N Sahiti ",
  post:"Content and Documentation",
  instagram: "https://www.instagram.com/nsahiti04",
  linkedin: "https://www.linkedin.com/in/n-sahiti-274756227",
  
},
{ url:Ritesh,
  name: "Surnar Ritesh",
  post:"Content and Documentation",
  instagram: "https://instagram.com/riteshsurner?igshid=ZDdkNTZiNTM=",
  linkedin: "https://www.linkedin.com/in/ritesh-s-757ab5223",
  
},

  ]
  const pr=[
    { url:Bhavani,
      name: "Bhavani Kanchukommala",
      post:"Publicity and Promotions",
      instagram: "https://www.instagram.com/bhavs_333",
      linkedin: "https://www.linkedin.com/in/bhavani-kanchukommala-01292320a",
      
  },
  { url:Shriya,
    name: "Shriya",
    post:"Publicity and Promotions",
    instagram: "https://instagram.com/shriysss?igshid=YmMyMTA2M2Y=",
    linkedin: "Shriya hanumanthu",
    
},
  { url :Manya,
    name: "Manya Mudhulkar ",
    post:"Publicity and Promotions",
    instagram: "https://instagram.com/manya___22?igshid=MGNiNDI5ZTU=",
    linkedin: "https://www.linkedin.com/in/manya-mudhulkar-213323227",
    
},
{ url:Satwik,
  name: "Satwik Reddy Katukuri",
  post:"Publicity and Promotions",
  instagram: "https://instagram.com/satwik__k",
  linkedin: "https://www.linkedin.com/in/satwikk/",
  
},
  { url:Kaif,
    name: "KAIF",
    post:"Publicity and Promotions",
    instagram: "https://instagram.com/kaif____ll?igshid=YmMyMTA2M2Y=",
    linkedin: "https://www.linkedin.com/in/shaik-kaif-66695b250",
    
},
{url:Harshitha,
  name: "Pasupuleti Harshitha",
  post:"Publicity and Promotions",
  instagram: "https://instagram.com/harshitha0234",
  linkedin: "https://www.linkedin.com/in/harshitha-pasupuleti-46648726b",
  
},
{url:Waseem,
  name: "Waseem Akram",
  post:"Publicity and Promotions",
  instagram: "https://instagram.com/Yepwaseem_",
  linkedin: "Waseem Akram ",
  
},

  ]
  const design=[
    { url: Apurva,
      name: "Gunnalle Apurva ",
      post:"Design & Creativity",
      instagram: "https://www.instagram.com/apurva.gunnalle ",
      linkedin: "https://www.linkedin.com/in/apurva-g-4341791b5",
      
  },
  { url: Shaik,
    name: "Shaik Sabeeha Kouser",
    post:"Design & Creativity",
    instagram: "https://www.instagram.com/abun_dnce",
    linkedin: "https://www.linkedin.com/in/shaik-sabeeha-kouser-bbb45a205",
    
},
  { url:Teja,
    name: "P Y VENKATA SAI TEJA ",
    post:"Design & Creativity",
    instagram: "https://instagram.com/venkat.enlt?igshid=ZDdkNTZiNTM=",
    linkedin: "https://www.linkedin.com/in/venkata-sai-a57402236",
    
},
  { url:Karthikeya,
    name: "Guthikonda Karthikeya Reddy",
    post:"Design & Creativity",
    instagram: "https://instagram.com/karthikeya.guthikonda?igshid=YmMyMTA2M2Y=",
    linkedin: "https://instagram.com/karthikeya.guthikonda?igshid=YmMyMTA2M2Y=",
    
},
{ url : Abdul,
  name: "Mohammed Abdul Sami",
  post:"Design & Creativity",
  instagram: "https://instagram.com/Stfu.samxx__",
  linkedin: "mohammed-abdul-sami-911644265",
  
},
{ url:Aseeruddin,
  name: "S Aseeruddin ",
  post:"Design & Creativity",
  instagram: "https://instagram.com/aseeruddin_321",
  linkedin: "https://www.linkedin.com/in/aseeruddin-shaik-7259981b7",
  
},

  ]
  const events=[
    { url:Akhilesh,
      name: "AKHILESH KUMANDAN",
      post: "Events and Activites",
      instagram: "https://www.instagram.com/akhilesh.kumandan",
      linkedin: "https://www.linkedin.com/in/akhilesh-kumandan-418188211/",
      
  },
  { url:Anirudh,
    name: "Anirudh Bukka",
    post: "Events and Activites",
    instagram: "https://www.instagram.com/anidude09/",
    linkedin: "https://www.linkedin.com/in/anirudh-bukka/",
    
},
  { url:Vaishnav,
    name: "Vaishnav Arkala",
    post: "Events and Activites",
    instagram: "https://www.instagram.com/vaishnavarkala1108/",
    linkedin: "https://www.linkedin.com/in/vaishnav-arkala-71a2b822b/",
    
},
  { url:Tanvi,
    name: "k. tanvi reddy",
    post: "Events and Activites",
    instagram: "https://instagram.com/vi_ta.05?igshid=YmMyMTA2M2Y=",
    linkedin: "https://www.linkedin.com/in/kamanuri-tanvi-35759a25b",
    
},
{ url:Preeti,
  name: "Sai Preeti Paruchuru",
  post: "Events and Activites",
  instagram: "https://instagram.com/sai.preeti",
  linkedin: "https://www.linkedin.com/in/sai-preeti-paruchuru-8b118b228",
  
},
  {
    name: "Ambarkhana Meher Siri Prajwala",
    post: "Events and Activites",
    instagram: "https://instagram.com/prazu_25?igshid=ZDdkNTZiNTM=",
    linkedin: "https://www.linkedin.com/in/Ambarkhana Prajwala",
},
{ url:Rishitha,
  name: "Rishitha",
  post: "Events and Activites",
  instagram: "https://instagram.com/rishitha_sagar?igshid=YmMyMTA2M2Y=",
  linkedin: "https://www.linkedin.com/in/rishitha-sagar-289029242",
  
},
{ url:Jayanth,
  name: "Kodaru Jayanth ",
  post: "Events and Activites",
  instagram: "https://www.instagram.com/jayanthkodaru/",
  linkedin: "https://www.linkedin.com/in/jayanth-kodaru-b14196250/",
  
},
{ url:Rishikesh,
  name: "Kss Rishikesh Yadav ",
  post: "Events and Activites",
  instagram: "https://instagram.com/__rishikesh_yadav?igshid=ZDdkNTZiNTM=",
  linkedin: "https://www.linkedin.com/in/rishikesh-yadav-kudumula-abb33421a",
  
},
  ]
  const finance=[
    { url:Amal,
      name: "Amal K",
      post:"Finance",
      instagram: "https://www.instagram.com/_amal_012/?next=%2F",
      linkedin: "https://www.linkedin.com/in/amal-k-34b0aa1a0/",
      
  },
  { url:Aman,
    name: "Aman",
    post:"Finance",
    instagram: "https://www.instagram.com/aman_paidlewar",
    linkedin: "https://www.linkedin.com/in/aman-paidlewar-770ba7228",
    
},
  ]
  const hospitality=[
    { url:Sanjana,
      name: "Sanjana Mohite ",
      post:"Hospitality",
      instagram: "https://www.instagram.com/ll.sanjana.ll ",
      linkedin: "https://www.linkedin.com/in/sanjana-mohite-718920263",
      
  },
  ]
  const networking=[
    { url:Anirudh,
      name: "Anirudh Bukka",
      post:"Network and Communication",
      instagram: "https://www.instagram.com/anidude09/",
      linkedin: "https://www.linkedin.com/in/anirudh-bukka/",
      
  },
  { url:Siri,
    name: "Siri Jaka ",
    post:"Network and Communication",
    instagram: "https://www.instagram.com/siri_11",
    linkedin: "https://www.linkedin.com/in/siri-jaka-704820265",
    
},
  { url:Sanay,
    name: "Sanay kumar ",
    post:"Network and Communication",
    instagram: "https://www.instagram.com/sanay_10",
    linkedin: "Sanay kumar ",
    
},
  { url:Pranav,
    name: "G.Pranav Kumar",
    instagram: "prannu_13",
    post:"Network and Communication",
    linkedin: "https://www.linkedin.com/in/pranav-guddeti-461253228",
    
},
{ url:Tarun,
  name: "Karumanchi Tarun",
  post:"Network and Communication",
  instagram: "https://instagram.com/tarun_karumanchi?igshid=ZDdkNTZiNTM=",
  linkedin: "https://in.linkedin.com/in/tarun-karumanchi-6a626022b",
  
},

  ]
  return (
    <div className='mt-20 profile'>
        <p className='text-red-600 font-bold text-3xl mt-10 mb-10 text-center'>Organizers</p>
        <div class="flex flex-col md:flex-row justify-center align-center">
        {
          org.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Technical Developement</p>
      <div class="flex flex-col md:flex-row justify-center align-center">
        {
          tech.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Events and Activites</p>
      <div class="flex flex-col flex-wrap md:flex-row justify-center align-center">
        {
          events.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Finance</p>
      <div class="flex flex-col md:flex-row justify-center align-center">
        {
          finance.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Design & Creativity</p>
      <div class="flex flex-col flex-wrap md:flex-row justify-center align-center">
        {
          design.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Hospitality</p>
      <div class="flex flex-col flex-wrap md:flex-row justify-center align-center">
        {
          hospitality.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Content & Documentation</p>
      <div class="flex flex-col flex-wrap md:flex-row justify-center align-center">
        {
          content.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Network and Communication</p>
      <div class="flex flex-col flex-wrap md:flex-row justify-center align-center">
        {
          networking.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>
      <p className='text-red-600 font-bold text-3xl my-10 text-center'>Publicity and Promotions</p>
      <div class="flex flex-col flex-wrap md:flex-row justify-center align-center">
        {
          pr.map((ar,index)=><TeamMember key={index} ar={ar}/>)
        }
      </div>

      
    </div>

  )
}

export default Team