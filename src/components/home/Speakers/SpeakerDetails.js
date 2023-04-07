import React from "react";

export default function SpeakerDetails(props) {
    return (
        <div className="m-2">
            <button
                className="bg-black hover:bg-red-600 text-gray-800 font-semibold py-2 px-4 border border-red-600 rounded shadow"
            >
                <img style={{borderRadius: "15px 30px"}} className="w-60" src={props.image} alt={props.name} />
                <h1 className="text-xl text-white">{ props.name }</h1>
            </button>
        </div>
    );
}
