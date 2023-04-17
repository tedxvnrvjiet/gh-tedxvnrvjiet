import React ,{useState} from 'react'
import Videobutton from './Videobutton';
import cvanand from '../images/year2018/cvanand.jpg'
import akanshabumb from '../images/year2018/akanshabumb.jpg'
import rameshkumar from '../images/year2018/rameshkumar.png'
import arshadquadri from '../images/year2018/arshadquadri.jpg'
import jagadeeshkumar from '../images/year2018/jagadeeshkumar.jpg'
import rakeshkumar from '../images/year2018/rakeshkumar.jpg'
import akhilagopalakrishnan from '../images/year2017/akhilagopalakrishnan.png'
import anuradhanaik from '../images/year2017/anuradhanaik.jpg'
import carolyntheresa from '../images/year2017/carolyntheresa.jpg'
import jawwadpatel from '../images/year2017/jawwadpatel.png'
import mohanakrishna from '../images/year2017/mohanakrishna.png'
import prashantdhawan from '../images/year2017/prashantdhawan.png'
import sagarikamelkote from '../images/year2017/sagarikamelkote.png'
import saimaafreen from '../images/year2017/saimaafreen.jpg'
import sangeethaisvarann from '../images/year2017/sangeethaisvaran.png'
import sureshreddy from '../images/year2017/sureshreddy.jpg'
import tisramband from '../images/year2017/tisramband.jpg'
import bandrooh from "../images/year2016/bandrooh.png"
import gandhikpc from "../images/year2016/gandhikpc.png"
import nageswararao from "../images/year2016/nageswararao.jpg"
import paruvuharimohan from "../images/year2016/paruvuharimohan.png"
import prasadkantamaneni from "../images/year2016/prasadkantamaneni.png"
import ramanagogula from "../images/year2016/ramanagogula.jpg"
import rameshloganthan from "../images/year2016/rameshloganthan.png"
import sandhyakode from "../images/year2016/sandhyakode.jpg"
import sanjayenishetty from "../images/year2016/sanjayenishetty.png"
import seetamurthy from "../images/year2016/seetamurthy.jpg"
import theodorejonnalagadda from "../images/year2016/theodorejonnalagadda.png"
import voicebox from "../images/year2016/voicebox.png"

function Pastspeakers({props}) {
    const pastSpeakers=[
        {
            "year":2018,
            "speakers":[
                {
                    "name":"Akanksha Bumb",
                    "designation":" Co-founder and COO of F5 Travel Escapades" ,
                    "video":"https://youtube.com/embed/8o-bsZ7cYYg",
                    "image":akanshabumb,
                },
                {
                    "name":"C.V. Anand",
                    "designation":"IPS Officer",            
                    "video":"https://www.youtube.com/embed/rKrYLtif9pY",
                    "image":cvanand,
                },
                {
                    "name":"Dr. Ramesh Kumar Mishra",
                    "designation":"Neurocognitive Linguistic",
                    "video":"https://youtube.com/embed/gK7OPnEUZFc",
                    "image":rameshkumar,
                },
                {
                    "name":"R. Jagadeesh Kumar ",
                    "designation":"Chairman, Sri Guru Deva Charitable Trust" ,
                    "video":"https://www.youtube.com/embed/X0fuX1R1UfY",
                    "image":jagadeeshkumar,
                },
                {
                    "name":"Arshad Quadri",
                    "designation":"Calligrapher",
                    "video":"https://youtube.com/embed/mZ9mj-BDNMM",
                    "image":arshadquadri,
                },
                {
                    "name":"Rakesh Kumar R",
                    "designation":"Entrepreneur, VFX" ,
                    "video":"",
                    "image":rakeshkumar,
                },
            ]
        },
        {
            "year":2017,
            "speakers":[
                {
                    "name":"Anuradha Naik",
                    "designation":"Conservation Architect & Architectural Historian",
                    "video":"https://youtube.com/emebed/G5xEgqG2HrA",
                    "image":anuradhanaik,
                },
                {
                    "name":"Carolyn Theresa",
                    "designation":"Food Blogger",
                    "video":"https://youtube.com/embed/InTY-_a6O1Y",
                        "image":carolyntheresa,
                },
                
                {
                    "name":"Mohana Krishna Indraganti",
                    "designation":"Film director & Screen writer",
                    "video":"https://youtube.com/embed/h3NGfp-2tQw",
                    "image":mohanakrishna,
                },
                {
                    "name":"Suresh Reddy",
                    "designation":"Chairman and CEO",
                    "video":"https://youtube.com/embed/blS64Pbzazc",
                    "image":sureshreddy,
                },
                {
                    "name":"Sagarika Melkote",
                    "designation":"Vice-President, Hyderabad Runners",
                    "video":"https://youtube.com/embed/t1AFNc4oujM",
                    "image":sagarikamelkote,
                },
                {
                    "name":"Sangeeta Isvaran",
                    "designation":"Bharatanatyam Dancer",
                    "video":"https://youtube.com/embed/lCmyOGssh3c",
                    "image":sangeethaisvarann,
                },
                {
                    "name":"Prashant Dhawan",
                    "designation":"Co-Founder of BiomimicryIndia & head of Biomimicry lab",
                    "video":"https://youtube.com/embed/doVRMBPUOhA",
                    "image":prashantdhawan,
                },
                {
                    "name":"Jawwad Patel",
                    "designation":" Founder Jawwad Patel Labs",
                    "video":"https://youtube.com/embed/AuVAcIOQ0sU",
                    "image":jawwadpatel,
                },
                {
                    "name":"Saima Afreen",
                    "designation":"Poet",
                    "video":"https://youtube.com/embed/quxmuicUlLw",
                    "image":saimaafreen,
                },
                {
                    "name":"Tisram Band",
                    "designation":"Musicians",
                    "video":"https://youtube.com/embed/yiIwXtYOgVQ",
                    "image":tisramband,
                },
                {
                    "name":"Akila Gopalakrishnan",
                    "designation":"Poet",
                    "video":"",
                    "image":akhilagopalakrishnan,
                },
            ]
        },
        {
            "year":2016,
            "speakers":[
                {
                    "name":"Nageshwara Rao Dukkipati",
                    "designation":"Innovator",
                    "video":"https://youtube.com/embed/crZrM2_wbOY",
                    "image":nageswararao,
                },
                {
                    "name":"Paruvu Harimohan",
                    "designation":"Writer, Cricket analyst",
                    "video":"https://youtube.com/embed/joVith2YdXA",
                    "image":paruvuharimohan,
                },
                {
                    "name":"Prasad Kantamaneni",
                    "designation":"Founder of UX Reactor. Expert at Eye tracking platform",
                    "video":"https://youtube.com/embed/9ygp8P717vQ",
                    "image":prasadkantamaneni,
                },
                {
                    "name":"Ramana Gogula",
                    "designation":"Musician , Entrepreneur",
                    "video":"https://youtube.com/embed/-xZFQEN2CCA",
                    "image":ramanagogula,
                },
                {
                    "name":"Seeta Murty",
                    "designation":"School Principal,Author",
                    "video":"https://youtube.com/embed/JggZuQR3-2U",
                    "image":seetamurthy,
                },
                {
                    "name":"Band Rooh",
                    "designation":"Fusion Band",
                    "video":"https://youtube.com/embed/yxo7DYT-9C4",
                    "image":bandrooh,
                },
                {
                    "name":"Ramesh Loganathan",
                    "designation":"Vice president at Progress software",
                    "video":"https://youtube.com/embed/ncTY1hUBhuA",
                    "image":rameshloganthan,
                },
                {
                    "name":"Sandhya Kode",
                    "designation":"Leader , Entrepreneur, Educator",
                    "video":"https://youtube.com/embed/kLmTuRXOa14",
                    "image":sandhyakode,
                },
                {
                    "name":"Sanjay Enishetty",
                    "designation":"Entrepreneur",
                    "video":"https://youtube.com/embed/qIhcXTzQGJQ",
                    "image":sanjayenishetty,
                },
                
                {
                    "name":"Gandhi KPC",
                    "designation":"Forensic Scientist",
                    "video":"https://youtube.com/embed/QJLPla3cQPo",
                    "image":gandhikpc,
                },
                {
                    "name":"Theodore Jonnalagadda",
                    "designation":"Musician,Rapper",
                    "video":"https://youtube.com/embed/S13ZwB2qnIE",
                    "image":theodorejonnalagadda,
                },
                {
                    "name":"Voice Box",
                    "designation":"Beatboxers,Students",
                    "video":"https://youtube.com/embed/G7sXUGkpJ4Q",
                    "image":voicebox,
                },
            ]
        }
    ]
    let obj=pastSpeakers.find(o=>o.year===props);
    obj=obj["speakers"];
    // console.log(obj)
   
  return (
    <div className=''>
        <h1 className='mobile:text-2xl  md:text-3xl lg:text-4xl mb-4 text-red-700 font-semibold mt-6  '>Speakers</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  lg:gap-xl-12">
            {obj.map((s)=>(
            <div className=" rounded-xl mb-4 duration-200   hover:bg-zinc-900 transition ease-in-out delay-150 hover:scale-105 p-6 mobile:w-68 lg:w-80">
                <img src={s['image']} className="rounded-lg shadow-lg mb-4 mx-auto" alt="" style={{width:"195px",height:"180px"} }/>
        
                <p className="font-semibold mb-3 text-red-600 mx-auto text-center text-lg h-6">{s['name']}</p>
                <p className="text-gray-400 mx-auto text-center h-14">{s['designation']}</p>
                {s.video!="" && <Videobutton props={s.video}/>}
            </div>
            ))}
    
        </div>
    </div>
  )
}

export default Pastspeakers