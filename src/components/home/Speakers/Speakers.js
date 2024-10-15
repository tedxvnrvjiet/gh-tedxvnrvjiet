import React from 'react'
import SpeakerDetails from './SpeakerDetails'
import Vanita from '../../../assets/speakers24/Vanita.png'
import Reddy from '../../../assets/speakers24/Reddy.jpg'

const SpeakersInfo = [
        
    {
        name: 'Dr. BVR Mohan Reddy',
        designation: 'Founder of Cyient and Former Chairperson of NASSCOM',
        image: Reddy,
        description: `Dr. Reddy will share his remarkable journey of innovation, leadership, and impact on the global tech and education landscape. A pioneer in engineering services and a visionary leader, he has transformed industries, fostered talent, and championed India’s IT revolution and he continues to shape the future of technology education in India through his roles at various prestigious institutions. His insights into entrepreneurship, technology, and education will inspire you to think beyond boundaries and challenge the status quo`,
        facebook: ``
    },
    {
        name: 'Vanita',
        designation: '',
        image: Vanita,
        description: 'Aditi Sharma is the winner of the Mrs. Universe India and Mrs. Universe Photogenic titles in 2022. She is a mother, homemaker, educator, and strong woman who inspires others through her social media platform. Aditi promotes the message that anything is possible if you work towards your dreams.',
        instagram: 'https://www.instagram.com/aditi.mrsuniverseindia/?igshid=YmMyMTA2M2Y%3D'
    }
    
]

function Speakers() {
    return (
        <div className="bg-black pt-10 pb-10">
            <div className="speaker_title">
                <h1 className='text-center text-5xl text-red-600 font-bold '><span style={{ color: "white" }}>OUR</span> <span>SPEAKERS</span></h1>
            </div>
                <div className="flex flex-wrap justify-center p-4 px-20">
                    {
                        SpeakersInfo.map((item)=>
                            <SpeakerDetails key={item.image} name={item.name} designation={item.designation} image={item.image} description={item.description} instagram={item?.instagram} linkedin={item?.linkedin} facebook={item?.facebook} />
                        )
                    }
                </div>
            <hr className="border-1 border-gray-600 mx-40"/>
        </div>
    )
}

export default Speakers