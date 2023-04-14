import React, { useState } from 'react';
import Countdown from 'react-countdown';
import styled from "styled-components";

const Timer = () => {

    const CountdownWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
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
    font-weight: bold;
    color: white;
    `;

    const Label = styled.div`
    font-size: 20px;
    color: white;
    `;

    const [time] = useState(new Date('2023-05-02'));

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div>Countdown completed!</div>;
        } 
        else {
            return (
                <div className='bg-black pb-1 pt-10'>
                    <h1 className="text-center text-5xl text-red-600 font-bold mb-10">
                        The Countdown Begins for a Day of Innovation and Inspiration!
                    </h1>
                    <CountdownWrapper className='mb-20'>
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
