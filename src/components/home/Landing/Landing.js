import React from 'react'
import './Landing.css'
import Timer from '../Timer/Timer'

function Landing() {
    let index = 0,
    interval = 1000

    const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const animate = star => {
            star.style.setProperty('--star-left', `${rand(-10, 100)}%`)
        star.style.setProperty('--star-top', `${rand(-40, 80)}%`)
        star.style.animation = "none";
        star.style.animation = "";
    }

    for(const star of document.getElementsByClassName('magic-star')){
    setTimeout(()=>{
        animate(star)
        setInterval(()=> {
        animate(star)
        }, 1000);    
    }, index++ * (interval / 3))

    }
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} className='scroller'>
        
            <div className="scroll-window">
                <div className="scroll-container">
                    <div className="scrolling magic-text">IDEAS</div>
                    <div className="scrolling magic-text">WORTH</div>
                    <div className="scrolling magic-text">SPREADING</div>
                    <div className="scrolling magic-text">TEDx</div>
                    <div className="scrolling magic-text">IDEAS</div>
                </div>
            </div>
            <div className="containerr">
                <Timer />
            </div>
        </div>
    )
}

export default Landing