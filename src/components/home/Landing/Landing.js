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
            {/* <button class="mt-10 text-xl bg-gray-100 hover:opacity-95 hover:shadow-white hover:bg-red-600 hover:text-gray-100 text-red-600 font-semibold py-2 px-4 border-2 border-gray-100 shadow-lg shadow-red-400 hover:border-gray-100 rounded shadow">
                <a href="/register">Get your tickets now!</a>
            </button> */}
        </div>
    )
}

export default Landing