import React, { useState, useEffect } from 'react';
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
    color: #EB0028;
    `;

    const Label = styled.div`
    font-size: 20px;
    color: #EB0028;
    `;

    const [time, setTime] = useState(new Date('2023-05-02'));

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div>Countdown completed!</div>;
        } 
        else {
            return (
                <CountdownWrapper>
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
                // <div>
                //     <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                // </div>
            );
        }
    };

    return <Countdown date={time} renderer={renderer} />;
};

export default Timer;
