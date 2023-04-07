import React from 'react'
import SpeakerDetails from './SpeakerDetails'

const SpeakersInfo = [
    {
        name: 'Sunil Mundra',
        image: 'https://media.licdn.com/dms/image/C4D03AQEcxEfvDZ2tNg/profile-displayphoto-shrink_400_400/0/1653490294934?e=1686182400&v=beta&t=u18SP46H7HWhBKinWOeuGH6OgAVR_w7dbyPcsaQKbUs',
        description: [`TEDxVNRVJIET is proud to introduce, Mr. Sunil Mundra, an accomplished professional with over three decades of experience in the IT industry. Mr. Mundra is also a best-selling author whose book, "Enterprise Agility: Being Agile in a Changing World," received the #1 rating in two categories on Amazon's 'Hot New Releases' list.`,
            `As a Principal Consultant-Advisory at Thoughtworks, Mr. Mundra is passionate about shaping and executing roadmaps for change, enhancing collaboration between business and technology functions, and coaching IT delivery teams to embrace Agile methods. His expertise has made him a trusted advisor to major enterprises in various industries such as retail, healthcare, finance, and government.`,
            `With more than 30 speaking engagements on Agility-related topics across six continents, Mr. Mundra has international experience in coaching and consulting organizations on Agile/Lean adoption, transformation, governance, change management, client involvement, stakeholder management, and leadership coaching. He is also adept at conducting Agile Maturity Assessments. We are thrilled to have him as a speaker at TEDxVNRVJIET.`
        ]
    },
    {
        name: 'Rishabh Singh',
        image: 'https://media.licdn.com/dms/image/C5603AQEcMRU4dI9gOQ/profile-displayphoto-shrink_800_800/0/1590042808206?e=1686182400&v=beta&t=F_6UlXTVnMY0Tqj8QgEGIx59OnlNJ5rmKvZX4pH_3Kg',
        description: [`Meet our next featured TEDx speakers, a talented individual with expertise in personal and business branding, content strategies, and lead generation. With over 70,000 followers on LinkedIn, he has become an accomplished profile expert and a mentor to individuals and organizations.`,
            `Having extensive experience as a brand strategist, he has delivered talks at top management colleges and trained employees of startups and mid-sized organizations. As a TEDx Co-Organizer and Harvard delegate, he has gained a reputation as a dynamic and engaging speaker who inspires audiences to unlock their full potential and establish a strong brand identity.`,
            `He is one of the youngest speakers to deliver more than 250 talks, including prestigious institutions like IIM Lucknow, IIM Jammu, IIM Sambalpur, IIT Bombay, and Tata Institute of Social Sciences, as well as LinkedIn Local events. He has shared his insights and expertise with over 20,000 people, helping them achieve their business goals and establish a powerful brand presence on LinkedIn.`,
            `With his core strengths in brand strategy, advisory, and content development, he has helped numerous CXOs and startup founders achieve their objectives and scale their personal branding to thousands of followers. Mr. Rishabh is one of the finest in the industry and has proven to be pivotal in the lives of those who aim to simplify the complexities of personal and business branding.`
        ]
    }
]

function Speakers() {
    return (
        <div className="bg-black">
            <h1 className='pl-4 text-5xl text-white'>Our speakers</h1>
            <div className="flex flex-wrap justify-center p-4">
                {
                    SpeakersInfo.map((item)=>
                        <SpeakerDetails key={item.image} name={item.name} image={item.image} description={item.description} />
                    )
                }
            </div>
        </div>
    )
}

export default Speakers