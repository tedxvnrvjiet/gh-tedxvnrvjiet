import React, { useState } from "react";

export default function SpeakerDetails(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="m-4 pb-10">
            <button
                className="rounded-full hover:bg-red-600 hover:-translate-y-5 duration-300 text-gray-800 font-semibold border border-red-600 border-4 rounded shadow"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <img className="w-52 rounded-full" src={props.image} alt={props.name} />
            </button>
            { isHovered && <div className="text-white text-center bg-red-600 rounded-xl -mt-2 p-1">{ props.name }</div> }
        </div>
    );
}
