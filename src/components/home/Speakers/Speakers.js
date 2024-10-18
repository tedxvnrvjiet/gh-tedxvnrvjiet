import React from 'react'
import SpeakerDetails from './SpeakerDetails'
import Vanita from '../../../assets/speakers24/Vanita.png'
import Reddy from '../../../assets/speakers24/Reddy.jpg'
import Shrenik from '../../../assets/speakers24/Shrenik.JPG'
import Neehar from '../../../assets/speakers24/Neehar.png'
import Noorul from '../../../assets/speakers24/Noorul.png'
import Jatin from '../../../assets/speakers24/Jatin.jpg'
import Hidden from'../../../assets/speakers24/Hidden.png'
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
    },
    {
        name: 'Mr Shrenik Shah',
        designation: 'Patient Ambassador, Indian Cancer Society, Global Ca-Larynx Speaker, Cancer survivor',
        image: Shrenik,
        description: ' Mr. Shrenik Shah, Patient Ambassador for the Indian Cancer Society, who will share his inspiring journey as a cancer survivor and motivational speaker. After a 26-year battle with cancer, he transformed his struggles into a powerful message of hope, delivering over 8,000 hours of talks that have touched more than 100,000 lives worldwide.',
        instagram: ''
    },
    {
        name: 'Mr. Neehar Bisabathini',
        designation: 'Founder of Churrolto',
        image: Neehar,
        description: "At just 19 years old, driven by his two passions, food and technology, Neehar started a brand that has transformed dessert culture with its focus on quality and innovation. He not only built a thriving business but also fostered a strong culture at Churrolto that drives its success. His belief? Even if he's not there, Churrolto will thrive! His goal? To feed a billion!!  Beyond food, Neehar’s passion for technology led him to start Zasa Media Pvt. Ltd., combining creativity and tech expertise to create impactful marketing solutions. His journey, from an idea on the streets to building multimillion-dollar brands, shows how ambition and resilience lead to success.From a dream to a legacy, his story shows true success is building something that thrives beyond you.",
        instagram: ''
    },
    {
        name: 'Ms. Noorul Zain',
        designation: "Telangana's first UNICEF Youth Delegate",
        image: Noorul,
        description: "Ms. Noorul Zain, a trailblazer in mental health advocacy and healthcare innovation! As Telangana's first UNICEF Youth Delegate, she has represented India on global platforms like the G20 Summit and the United Nations. Noorul has significantly influenced national policies related to mental health and education while advocating for children's rights and educational equity. At just 19, her journey includes being a G20 Delegate, contributing to the National Curriculum Framework, and winning the 'Champions of Change' Award at the Girl Up India Leadership Summit.",
        instagram: ''
    },
    {
        name: 'Mr. Jatin Wahane',
        designation: 'Young Rocket Scientist',
        image: Jatin,
        description: "Mr. Jatin Wahane, a young rocket scientist who has been honoured with the Karmaveer Chakra and Global Fellowship for his groundbreaking contributions to the space industry. As the Head of Investment and Lead - Tech and Business at Abyom SpaceTech, Jatin is driving transformative innovation and strategic investment, playing a crucial role in shaping the future of space exploration.In his talk, Jatin will share his insights on the powerful connection between technology, investment, and the limitless possibilities of space From science to strategy, his journey shows that innovation knows no boundaries.",
        instagram: ''
    },
    {
        name: 'Mystery Guest',
        designation: 'Guess the awesome mystery guest',
        image: Hidden,
        description: "",
        instagram: ''
    },
    {
        name: 'Mystery Guest',
        designation: 'Guess the awesome mystery guess',
        image: Hidden,
        description: "",
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