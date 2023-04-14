import React ,{useState} from 'react'
import Modal from 'react-modal'
import { AiFillYoutube } from "react-icons/ai";
import cvanand from '../images/year2018/cvanand.jpg'
import akanshabumb from '../images/year2018/akanshabumb.png'
import rameshkumar from '../images/year2018/rameshkumar.png'
import arshadquadri from '../images/year2018/arshadquadri.png'
import jagadeeshkumar from '../images/year2018/jagadeeshkumar.png'
import rakeshkumar from '../images/year2018/rakeshkumar.png'
import akhilagopalakrishnan from '../images/year2017/akhilagopalakrishnan.png'
import anuradhanaik from '../images/year2017/anuradhanaik.png'
import carolyntheresa from '../images/year2017/carolyntheresa.png'
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
import nageswararao from "../images/year2016/nageswararao.png"
import paruvuharimohan from "../images/year2016/paruvuharimohan.png"
import prasadkantamaneni from "../images/year2016/prasadkantamaneni.png"
import ramanagogula from "../images/year2016/ramanagogula.png"
import rameshloganthan from "../images/year2016/rameshloganthan.png"
import sandhyakode from "../images/year2016/sandhyakode.png"
import sanjayenishetty from "../images/year2016/sanjayenishetty.png"
import seetamurthy from "../images/year2016/seetamurthy.png"
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
                    "name":"Arshad Quadri",
                    "designation":"Calligrapher",
                    "video":"https://youtube.com/embed/mZ9mj-BDNMM",
                    "image":arshadquadri,
                },
                {
                    "name":"R. Jagadeesh Kumar ",
                    "designation":"Chairman, Sri Guru Deva Charitable Trust" ,
                    "video":"https://youtube.com/embed/X0fuX1R1UfY",
                    "image":jagadeeshkumar,
                },
                {
                    "name":"Rakesh Kumar Renukuntala",
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
                    "name":"Jawwad Patel",
                    "designation":" Founder Jawwad Patel Labs",
                    "video":"https://youtube.com/embed/AuVAcIOQ0sU",
                    "image":jawwadpatel,
                },
                {
                    "name":"Mohana Krishna Indraganti",
                    "designation":"Film director & Screen writer",
                    "video":"https://youtube.com/embed/h3NGfp-2tQw",
                    "image":mohanakrishna,
                },
                {
                    "name":"Prashant Dhawan",
                    "designation":"Co-Founder of BiomimicryIndia & head of Biomimicry lab",
                    "video":"https://youtube.com/embed/doVRMBPUOhA",
                    "image":prashantdhawan,
                },
                {
                    "name":"Sagarika Melkote",
                    "designation":"Vice-President, Hyderabad Runners",
                    "video":"https://youtube.com/embed/t1AFNc4oujM",
                    "image":sagarikamelkote,
                },
                {
                    "name":"Saima Afreen",
                    "designation":"Poet",
                    "video":"https://youtube.com/embed/quxmuicUlLw",
                    "image":saimaafreen,
                },
                {
                    "name":"Sangeeta Isvaran",
                    "designation":"Bharatanatyam Dancer",
                    "video":"https://youtube.com/embed/lCmyOGssh3c",
                    "image":sangeethaisvarann,
                },
                {
                    "name":"Suresh Reddy",
                    "designation":"Chairman and CEO",
                    "video":"https://youtube.com/embed/blS64Pbzazc",
                    "image":sureshreddy,
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
                    "name":"Band Rooh",
                    "designation":"Fusion Band",
                    "video":"https://youtube.com/embed/yxo7DYT-9C4",
                    "image":bandrooh,
                },
                {
                    "name":"Gandhi KPC",
                    "designation":"Forensic Scientist",
                    "video":"https://youtube.com/embed/QJLPla3cQPo",
                    "image":gandhikpc,
                },
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
                    "designation":"Musician, Entrepreneur",
                    "video":"https://youtube.com/embed/-xZFQEN2CCA",
                    "image":ramanagogula,
                },
                {
                    "name":"Ramesh Loganathan",
                    "designation":"Vice president at Progress software",
                    "video":"https://youtube.com/embed/ncTY1hUBhuA",
                    "image":rameshloganthan,
                },
                {
                    "name":"Sandhya Kode",
                    "designation":"Leader,Entrepreneur,Educator",
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
                    "name":"Seeta Murty",
                    "designation":"School Principal,Author",
                    "video":"https://youtube.com/embed/JggZuQR3-2U",
                    "image":seetamurthy,
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
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            bottom: 'auto',
            marginRight: '-40%',
            backgroundColor:"black",
            transform: 'translate(-50%, -50%)',
            color: 'white'
        },
    };
  return (
    <div className=''>
        <h1 className='mobile:text-2xl  md:text-3xl lg:text-4xl mb-8 text-red-700 font-semibold mt-6'>Speakers</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12 mobile:ml-8 lg:ml-0">
            {obj.map((s)=>(
            <div className="mb-12 pt-6 pb-6 duration-200 rounded-xl bg-black-800  hover:bg-zinc-900 transition ease-in-out delay-150 hover:scale-110" style={{width:"220px"}} key={s.video}>
                <img src={s['image']} className="rounded-lg shadow-lg mb-6 mx-auto" alt="" style={{width:"150px",height:"140px"} }/>
        
                <p className="font-semibold mb-2 text-red-600 mx-auto text-center text-lg">{s['name']}</p>
                <p className="text-gray-400 mx-auto text-center">{s['designation']}</p>
                {s.video && 
                <div>
                    <button
                    className="hidden lg:block rounded-full hover:-translate-y-5 duration-300 text-gray-800 font-semibold border border-red-600 border-4 rounded shadow"
                    onClick={openModal}
                    >
                        {/* <img className="w-52 rounded-full" src={props.image} alt={props.name} /> */}
                        <AiFillYoutube className=" text-red-400  w-7" />
                        Talk
                    </button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        ariaHideApp={false}
                    >
                        <iframe id="vid_frame" height="400px" width="700px" src={s.video} title={s['name']} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Modal>
                </div>
                }
            </div>
            ))}
    
        </div>
    </div>
  )
}

export default Pastspeakers