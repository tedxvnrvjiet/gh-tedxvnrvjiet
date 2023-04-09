import React, { useState } from "react";
import Modal from 'react-modal';
import LinkedInLogo from "../../../assets/logos/LinkedInLogo";
import InstagramLogo from "../../../assets/logos/InstagramLogo";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        marginRight: '-40%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        color: 'white'
    },
};

export default function SpeakerDetails(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleHover = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    return (
        <div className="m-4 pb-10">
            <button
                className="rounded-full hover:bg-red-600 hover:-translate-y-5 duration-300 text-gray-800 font-semibold border border-red-600 border-4 rounded shadow"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={openModal}
            >
                <img className="w-52 rounded-full" src={props.image} alt={props.name} />
            </button>
            { isHovered && <div className="text-white text-center bg-red-600 rounded-xl -mt-2 p-1">{ props.name }</div> }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="text-center">
                    <div className="font-bold text-2xl inline mr-2">
                        { props.name }
                    </div>
                    <div className="text-xl inline mr-2 align-text-center">
                        - { props.designation }
                    </div>
                    { props?.linkedin && <a className="rounded bg-white m-1 align-text-bottom" href={props.linkedin}><LinkedInLogo /></a>}
                    { props?.instagram && <a className="rounded bg-white m-1 align-text-bottom" href={props.instagram}><InstagramLogo /></a>}
                </div>
                <br />
                <p>{props.description}</p>
            </Modal>
        </div>
    );
}
