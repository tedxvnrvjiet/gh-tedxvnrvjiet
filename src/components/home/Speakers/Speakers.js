import React from 'react'
import SpeakerDetails from './SpeakerDetails'

const SpeakersInfo = [
    {
        name: 'Anveshi Jain',
        image: 'https://media.licdn.com/dms/image/C4D03AQFpgDWhGj4GVg/profile-displayphoto-shrink_400_400/0/1659384665178?e=1686787200&v=beta&t=LtpQjra_gUShCfSSn9H6vAcHulmbVfkXQBOSQDYdfJI',
        description: '',
        instagram: 'https://www.instagram.com/anveshi25/?igshid=YmMyMTA2M2Y%3D',
        linkedin: `https://www.linkedin.com/in/anveshijain/`
    },
    {
        name: 'Sunil Mundra',
        image: 'https://media.licdn.com/dms/image/C4D03AQEcxEfvDZ2tNg/profile-displayphoto-shrink_400_400/0/1653490294934?e=1686182400&v=beta&t=u18SP46H7HWhBKinWOeuGH6OgAVR_w7dbyPcsaQKbUs',
        description: `TEDxVNRVJIET is excited to announce speaker Mr. Sunil Mundra, who has over 30 years of experience in the IT industry and is the author of the best-selling book "Enterprise Agility: Being Agile in a Changing World." Currently working as a Principal Consultant-Advisory at Thoughtworks, he has a passion for shaping and executing change roadmaps, improving collaboration between business and technology functions, and coaching IT delivery teams on Agile methods. He has spoken at over 30 conferences across 6 continents on Agility-related topics and has international expertise in coaching, consulting organizations on Agile/lean adoption, transformation, governance, change management, client involvement, stakeholder management, and leadership coaching, as well as conducting Agile Maturity Assessments.`,
        linkedin: `https://www.linkedin.com/in/sunilmundra/`
    },
    {
        name: 'Rishabh Singh',
        image: 'https://media.licdn.com/dms/image/C5603AQEcMRU4dI9gOQ/profile-displayphoto-shrink_800_800/0/1590042808206?e=1686182400&v=beta&t=F_6UlXTVnMY0Tqj8QgEGIx59OnlNJ5rmKvZX4pH_3Kg',
        description: `TEDxVNRVJIET is excited to announce speaker Mr. Rishabh Singh, an accomplished LinkedIn profile expert with 70,000 followers. He has a passion for mentoring individuals and organizations on personal and business branding, content strategies, and lead generation. With extensive experience as a brand strategist, delivering talks at top management colleges, and training startups and mid-size organization employees, he has gained a reputation as a dynamic and engaging speaker who inspires audiences to unlock their full potential and establish a strong brand identity. Rishabh has delivered over 250+ talks, including at IIM Lucknow, IIM Jammu, IIM Sambalpur, IIT Bombay, Tata Institute of Social Sciences, and LinkedIn local, sharing his insights and expertise with over 20,000 people. He has helped numerous CXOs and startup founders achieve their objectives and scale their personal branding to thousands of followers with his core strengths in brand strategy, advisory, and content development.`,
        linkedin: `https://www.linkedin.com/in/rishabh-arun-singh/`
    }
]

function Speakers() {
    return (
        <div className="bg-black">
            <h1 className='pl-4 text-5xl text-white'>Our speakers</h1>
            <div className="flex flex-wrap justify-center p-4">
                {
                    SpeakersInfo.map((item)=>
                        <SpeakerDetails key={item.image} name={item.name} image={item.image} description={item.description} instagram={item?.instagram} linkedin={item?.linkedin} />
                    )
                }
            </div>
        </div>
    )
}

export default Speakers