import React from 'react'
import SpeakerDetails from './SpeakerDetails'
import SuryaPrakashGajjalla from '../../../assets/SuryaPrakashGajjalla.png'

const SpeakersInfo = [
    {
        name: 'Anveshi Jain',
        image: 'https://media.licdn.com/dms/image/C4D03AQFpgDWhGj4GVg/profile-displayphoto-shrink_400_400/0/1659384665178?e=1686787200&v=beta&t=LtpQjra_gUShCfSSn9H6vAcHulmbVfkXQBOSQDYdfJI',
        description: 'Anveshi Jain is an Indian actor and singer born in Khajuraho. She became the most googled actress after her first web release with 30 Million google searches overnight. She is also a singer and a dating coach. She has been a TedEx Speaker and hosted quite a lot of corporate events and shows.',
        instagram: 'https://www.instagram.com/anveshi25/?igshid=YmMyMTA2M2Y%3D',
        linkedin: `https://www.linkedin.com/in/anveshijain/`
    },
    {
        name: 'Sunil Mundra',
        image: 'https://media.licdn.com/dms/image/C4D03AQEcxEfvDZ2tNg/profile-displayphoto-shrink_400_400/0/1653490294934?e=1686182400&v=beta&t=u18SP46H7HWhBKinWOeuGH6OgAVR_w7dbyPcsaQKbUs',
        description: `Sunil Mundra is an experienced IT professional and the author of "Enterprise Agility: Being Agile in a Changing World," is set to speak at TEDxVNRVJIET. With over 30 years of experience in the industry, Sunil currently works as a Principal Consultant-Advisory at Thoughtworks and has spoken at numerous conferences on Agility-related topics worldwide. He is passionate about shaping change roadmaps, improving collaboration between business and technology functions, and coaching IT delivery teams on Agile methods.`,
        linkedin: `https://www.linkedin.com/in/sunilmundra/`
    },
    {
        name: 'Rishabh Singh',
        image: 'https://media.licdn.com/dms/image/C5603AQEcMRU4dI9gOQ/profile-displayphoto-shrink_800_800/0/1590042808206?e=1686182400&v=beta&t=F_6UlXTVnMY0Tqj8QgEGIx59OnlNJ5rmKvZX4pH_3Kg',
        description: `Rishabh Singh, a renowned LinkedIn profile expert with 70,000 followers, who is passionate about mentoring individuals and organizations on personal and business branding, content strategies, and lead generation. With extensive experience as a brand strategist, Rishabh has delivered over 250+ talks, including at top management colleges and LinkedIn local, sharing his insights and expertise with over 20,000 people. He has helped numerous CXOs and startup founders scale their personal branding to thousands of followers with his core strengths in brand strategy, advisory, and content development.`,
        linkedin: `https://www.linkedin.com/in/rishabh-arun-singh/`
    },
    {
        name: 'Surya Prakash Gajjalla',
        image: SuryaPrakashGajjalla,
        description: 'Surya Prakash Gajjalla has over 20 years of experience in Non Destructive Testing and inspection, with involvement in projects for companies such as Larsen & Toubro Limited and Hindustan Petroleum. He founded Advanced Engineering Studies in 2003 to develop qualified NDT professionals and has trained over 4,000 professionals from 18 countries. He is also the Director of Turbo Engineers & Consultants and is actively involved in implementing various schemes for the Department of Technical Education, while also promoting corporate social responsibility.'
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