import React from 'react'
import SpeakerDetails from './SpeakerDetails'
import SuryaPrakashGajjalla from '../../../assets/SuryaPrakashGajjalla.png'
import RaghuKarumanchi from '../../../assets/RaghuKarumanchi.png'
import AditiSharma from '../../../assets/AditiSharma.png'

const SpeakersInfo = [
    {
        name: 'Anveshi Jain',
        designation: 'Actor, Singer',
        image: 'https://media.licdn.com/dms/image/C4D03AQFpgDWhGj4GVg/profile-displayphoto-shrink_400_400/0/1659384665178?e=1686787200&v=beta&t=LtpQjra_gUShCfSSn9H6vAcHulmbVfkXQBOSQDYdfJI',
        description: 'Anveshi Jain is an Indian actress, model, host, MC, and social media sensation with 215K subscribers on YouTube, 19M followers on Facebook, and 6.2M followers on Instagram. She has also received the Dadasaheb Phalke Icon award in 2019 and became the most Googled person in 2020. Jain has hosted over 1,000 events and has landed lead roles in several films. She is also a motivational speaker, dating coach, and trained singer who has released several singles.',
        facebook: 'https://www.facebook.com/anveshi25',
        instagram: 'https://www.instagram.com/anveshi25/?igshid=YmMyMTA2M2Y%3D',
        linkedin: `https://www.linkedin.com/in/anveshijain/`
    },
    {
        name: 'Rishabh Singh',
        designation: 'Branding Expert and Strategist',
        image: 'https://media.licdn.com/dms/image/C5603AQEcMRU4dI9gOQ/profile-displayphoto-shrink_800_800/0/1590042808206?e=1686182400&v=beta&t=F_6UlXTVnMY0Tqj8QgEGIx59OnlNJ5rmKvZX4pH_3Kg',
        description: `Rishabh Singh, a renowned LinkedIn profile expert with 70,000 followers, who is passionate about mentoring individuals and organizations on personal and business branding, content strategies, and lead generation. With extensive experience as a brand strategist, Rishabh has delivered over 250+ talks, including at top management colleges and LinkedIn local, sharing his insights and expertise with over 20,000 people. He has helped numerous CXOs and startup founders scale their personal branding to thousands of followers with his core strengths in brand strategy, advisory, and content development.`,
        linkedin: `https://www.linkedin.com/in/rishabh-arun-singh/`
    },
    {
        name: 'Raghu Karumanchi',
        designation: 'Actor',
        image: RaghuKarumanchi,
        description: `Raghu Karumanchi is an Indian actor who primarily appears in Telugu films in comic and supporting roles. He has acted in over 150 films and several television shows, including Jabardasth. He was born and raised in Hyderabad and has an MBA degree. Raghu made his acting debut in the film Aadi and got a break with the film Adhurs. He has also received awards for producing a short film on saving the girl child in 2006.`,
        facebook: `https://www.facebook.com/RaghuKarumanchiActor`
    },
    {
        name: 'Aditi Sharma',
        designation: '',
        image: AditiSharma,
        description: '',
        instagram: 'https://www.instagram.com/aditi.mrsuniverseindia/?igshid=YmMyMTA2M2Y%3D'
    },
    {
        name: 'Sunil Mundra',
        designation: 'Author, CXO Advisor, Organizational Change and Transformation Leader',
        image: 'https://media.licdn.com/dms/image/C4D03AQEcxEfvDZ2tNg/profile-displayphoto-shrink_400_400/0/1653490294934?e=1686182400&v=beta&t=u18SP46H7HWhBKinWOeuGH6OgAVR_w7dbyPcsaQKbUs',
        description: `Sunil Mundra is an experienced IT professional and the author of "Enterprise Agility: Being Agile in a Changing World," is set to speak at TEDxVNRVJIET. With over 30 years of experience in the industry, Sunil currently works as a Principal Consultant-Advisory at Thoughtworks and has spoken at numerous conferences on Agility-related topics worldwide. He is passionate about shaping change roadmaps, improving collaboration between business and technology functions, and coaching IT delivery teams on Agile methods.`,
        linkedin: `https://www.linkedin.com/in/sunilmundra/`
    },
    {
        name: 'Amir Nair',
        designation: 'Leadership Development Expert',
        image: 'https://media.licdn.com/dms/image/D4D03AQFKKE7NAKEICA/profile-displayphoto-shrink_800_800/0/1679584645359?e=1686787200&v=beta&t=t7HnP0Nuk_sQHXSjqSJ17YubA2DbxR1TMi2xI9fNgaI',
        description: '',
        linkedin: 'https://www.linkedin.com/in/amirnair/overlay/photo/'
    },
    {
        name: 'Surya Prakash Gajjalla',
        designation: 'CEO, Archimedes Green Energys Private Limited',
        image: SuryaPrakashGajjalla,
        description: 'Surya Prakash Gajjalla has over 20 years of experience in Non Destructive Testing and inspection, with involvement in projects for companies such as Larsen & Toubro Limited and Hindustan Petroleum. He founded Advanced Engineering Studies in 2003 to develop qualified NDT professionals and has trained over 4,000 professionals from 18 countries. He is also the Director of Turbo Engineers & Consultants and is actively involved in implementing various schemes for the Department of Technical Education, while also promoting corporate social responsibility.'
    }
]

function Speakers() {
    return (
        <div className="bg-black pt-10 pb-10">
            <h1 className='text-center text-5xl text-red-600 font-bold'>Our speakers for 2023</h1>
                <div className="flex flex-wrap justify-center p-4 px-20">
                    {
                        SpeakersInfo.map((item)=>
                            <SpeakerDetails key={item.image} name={item.name} designation={item.designation} image={item.image} description={item.description} instagram={item?.instagram} linkedin={item?.linkedin} facebook={item?.facebook} />
                        )
                    }
                </div>
        </div>
    )
}

export default Speakers