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
        name: 'Ms Vanitha Datla',
        designation: 'Vice Chairperson and Managing Director of Elico Ltd',
        image: Vanita,
        description: 'Ms Vanitha Datla, Vice Chairperson and Managing Director of Elico Ltd as well as Elico Healthcare Services Ltd, will be speaking at TEDˣ VNRVJIET 2024. With nearly three decades of experience across industries like Financial Services, Instrumentation, and Healthcare, Vanitha brings a wealth of knowledge and insight. Her work focusing on women in business and finance, including her past experience at Confederation of Indian Industry (CII) as its Chairperson, has led her to found Divershefy, a startup focused to create gender diversity in the Boards and Leadership teams. As a champion of diversity and women empowerment, Vanitha has led initiatives to enhance corporate inclusion and supports education for underprivileged children.',
        instagram: ''
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