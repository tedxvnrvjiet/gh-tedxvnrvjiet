import React, { useState } from 'react';
import Countdown from 'react-countdown';
import styled from "styled-components";
import './Timer.css'

const Timer = () => {

    const CountdownWrapper = styled.div`
    display: flex;
    justify-content: center;
    /* background-color: rgb(0, 0, 0, 0.5); */
    `;


    const TimerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    background
    `;

    const Number = styled.div`
    font-size: 50px;
    @media (max-width: 768px) {
        font-size: 30px;   
    }
    font-weight: bold;
    color: white;
    `;

    const Label = styled.div`
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
    color: white;
    `;

    const [time] = useState(new Date('2023-05-02'));

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div>Countdown completed!</div>;
        } 
        else {
            return (
                <div className='tclass'>
                    <h1 className="text-red-600 font-bold">
                        Live in
                    </h1>
                    <CountdownWrapper className='mb-5'>
                        <TimerBox>
                            <Number>{days}</Number>
                            <Label>Days</Label>
                        </TimerBox>
                        <TimerBox>
                            <Number>{hours}</Number>
                            <Label>Hours</Label>
                        </TimerBox>
                        <TimerBox>
                            <Number>{minutes}</Number>
                            <Label>Minutes</Label>
                        </TimerBox>
                        <TimerBox>
                            <Number>{seconds}</Number>
                            <Label>Seconds</Label>
                        </TimerBox>
                    </CountdownWrapper>
                </div>
            );
        }
    };

    return <Countdown date={time} renderer={renderer} />;
};

export default Timer;
