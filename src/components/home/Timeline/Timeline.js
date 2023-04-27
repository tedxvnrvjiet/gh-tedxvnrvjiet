import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGifts} from "react-icons/fa"
import {SlSpeech} from "react-icons/sl"
import {SiBytedance} from 'react-icons/si'
import {IoFastFoodSharp} from "react-icons/io5"
import {MdStickyNote2} from "react-icons/md"
import {TbBrandComedyCentral} from "react-icons/tb"
function Timeline() {
  return (
    <div className='bg-black'>
        <h1 className="text-center text-5xl text-red-600 font-bold mb-10 tedx_heading">
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
                Reporting time and goodies collection
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="10:00 am - 10:15 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                Introduction Speech
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
                Dance performance by Nritya Tarang
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="10:30 am - 11:00 am"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Rishab Signh
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="11:00 am - 11:30 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Sunil Mudra
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
                Standup Comedy
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="12:00 am - 12:30 am"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Anveshi Jain
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="12:30 am - 1:45 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<IoFastFoodSharp/>}
            >
                <p style={{marginTop:".1rem"}}>
                Lunch and Experince zone
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="1:50 pm - 2:20 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Raghu Karumanchi
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="2:20 pm - 2:50 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Amir Nair
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#A30000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A30000' }}
                date="2:50 pm - 3:20 pm"
                iconStyle={{ background: '#D10000', color: '#fff', }}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Aditi Sharma
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work h-16"
                textClassName='h-20'
                contentStyle={{ background: '#fff', color: '#ff0000',borderColor:"#A30000" }}
                date="3:20 pm - 3:50 pm"
                dateClassName="!font-bold"
                iconStyle={{ background: '#D10000', color: '#fff'}}
                icon={<SlSpeech/>}
            >
                <p style={{marginTop:".1rem"}}>
                TED Talk by Surya Prakash Gajjalla
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
                Singing performce by Anveshi Jain
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
                End Note
                </p>
            </VerticalTimelineElement>
            
            
        </VerticalTimeline>
    </div>
  )
}

export default Timeline