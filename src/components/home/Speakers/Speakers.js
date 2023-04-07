import React from 'react'
import SpeakerDetails from './SpeakerDetails'

const SpeakersInfo = [
    {
        name: 'Sunil',
        image: 'https://media.licdn.com/dms/image/C4D03AQEcxEfvDZ2tNg/profile-displayphoto-shrink_400_400/0/1653490294934?e=1686182400&v=beta&t=u18SP46H7HWhBKinWOeuGH6OgAVR_w7dbyPcsaQKbUs',
        description: 'Sunil Mundra'
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