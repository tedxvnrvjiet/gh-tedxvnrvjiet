import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGifts} from "react-icons/fa"
import {SiBytedance} from 'react-icons/si'
import {IoFastFoodSharp} from "react-icons/io5"
import {MdStickyNote2} from "react-icons/md"
import {TbBrandComedyCentral} from "react-icons/tb"
import {BsFillMicFill} from "react-icons/bs"
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
                date="8:00 am - 9:50 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<FaGifts/>}
            >
                <p style={{marginTop:".1rem"}}>
                Reporting Time and Goodies Collection
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="10:00 am - 10:15 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Welcome Speech
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="10:15 am - 10:30 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<SiBytedance/>}
            >
                <p style={{marginTop:".1rem"}}>
                Cultural Performance by Nritya Tarang
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="10:30 am - 11:00 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                First Speaker, Rishabh Singh
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="11:00 am - 11:30 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Second speaker, Sunil Mundra
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="11:30 am - 12:00 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<TbBrandComedyCentral/>}
            >
                <p style={{marginTop:".1rem"}}>
                Standup performance
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="12:00 am - 12:30 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Third speaker, Amir Nair
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="12:30 am - 1:00 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Fourth speaker, Anveshi Jain
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="1:00 pm - 2:15 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<IoFastFoodSharp/>}
            >
                <p style={{marginTop:".1rem"}}>
                Lunch Break and Interaction
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="2:20 pm - 2:50 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Fifth speaker, Raghu Karumanchi
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="2:50 pm - 3:20 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Penultimate speaker, Aditi Sharma
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="3:20 pm - 3:50 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<BsFillMicFill/>}
            >
                <p style={{marginTop:".1rem"}}>
                Culminating speaker, Surya Prakash Gajjalla
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="3:50 pm - 4:20 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<SiBytedance/>}
            >
                <p style={{marginTop:".1rem"}}>
                Lively singing performance by Anveshi Jain
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="4:20 pm - 4:30 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<MdStickyNote2/>}
            >
                <p style={{marginTop:".1rem"}}>
                Closing keynote
                </p>
            </VerticalTimelineElement>
            
            
        </VerticalTimeline>
    </div>
  )
}

export default Timeline