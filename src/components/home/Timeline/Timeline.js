import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGifts} from "react-icons/fa"
import {SiBytedance} from 'react-icons/si'
import {IoFastFoodSharp} from "react-icons/io5"
import {MdStickyNote2} from "react-icons/md"
// import {TbBrandComedyCentral} from "react-icons/tb"
import {BsFillMicFill} from "react-icons/bs"
import { FaDoorOpen } from "react-icons/fa";
import { GiMagicSwirl } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { GiTheaterCurtains } from "react-icons/gi";
import { FaSurprise } from "react-icons/fa";

function Timeline() {
  return (
    <div className='bg-black mobile:pt-8  '>
        <h1 className="text-center text-5xl text-red-600 font-bold mb-10 tedx_heading pt-12">
            Event Timeline
        </h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="8:30 am - 9:20 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<FaDoorOpen />}
            >
                <p style={{marginTop:".1rem"}}>
                Audience Arrival, Registration, and Welcome
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="9:25 am - 9:40 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<SiBytedance/>}
            >
                <p style={{marginTop:".1rem"}}>
                Inaugural: Classical Dance by Nritya Tarang
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="9:45 am - 10:05 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 01: Ms Vanitha Datla
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="10:10 am - 10:30 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 02: Mr Shrenik Shah 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="10:35 am - 10:55 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 03: Mr B V R Mohan Reddy
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="11:00 am - 11:15 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<GiMagicSwirl />}
            >
                <p style={{marginTop:".1rem"}}>
                Magic Show by Mr Maruti Joshi
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="11:20 am - 11:40 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 04: Mr Sunith Reddy
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="11:45 am - 11:55 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 05: Mr Mimicry Srinivos
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="12:00 pm - 12:20 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 06: Mr Neehar Bisabathini
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="12:25 pm - 1:10 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<IoFastFoodSharp/>}
            >
                <p style={{marginTop:".1rem"}}>
                Networking Lunch
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="1:15 pm - 1:30 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<FaMusic/>}
            >
                <p style={{marginTop:".1rem"}}>
                Music Performance by Crescendo
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="1:35 pm - 1:55 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 07: Mr Durgaprasad Kode
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="2:00 pm - 2:20 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 08: Ms Sravya Manasa
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="2:25 pm - 2:45 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<GiTheaterCurtains />}
            >
                <p style={{marginTop:".1rem"}}>
                Mimicry and Ventriloquism by Mr Mimicry Srinivos
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="2:50 pm - 3:10 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 09: Mr Harish Uthaman
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="3:15 pm - 3:35 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 10: Ms Noorul Zain Durrani
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="3:40 pm - 3:50 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<FaSurprise />}
            >
                <p style={{marginTop:".1rem"}}>
                Watch out for a surprise!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="3:55 pm - 4:15 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 11: Mr Jatin Wahane
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="4:20 pm - 4:40 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Talk 12: Mr Srinath Maganti
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="4:45 pm - 5:00 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<MdStickyNote2/>}
            >
                <p style={{marginTop:".1rem"}}>
                End Salutations and Vote of Thanks
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Timeline