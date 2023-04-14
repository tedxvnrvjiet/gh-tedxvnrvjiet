import React, { useState } from "react";
import Modal from 'react-modal';
import LinkedInLogo from "../../../assets/logos/LinkedInLogo";
import InstagramLogo from "../../../assets/logos/InstagramLogo";
import FacebookLogo from "../../../assets/logos/FacebookLogo";
import ClickIcon from "../../../assets/logos/ClickIcon";
import ButterfliesDark from '../../../assets/ButterfliesDark.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        marginRight: '-40%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `url(${ButterfliesDark})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        color: 'white',
        borderRadius: '30px'
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
        <div className="m-4 pb-10 h-60">
            <button
                className="hidden lg:block rounded-full hover:-translate-y-5 duration-300 text-gray-800 font-semibold border border-red-600 border-4 rounded shadow"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={openModal}
            >
                <img className="w-52 rounded-full" src={props.image} alt={props.name} />
                <ClickIcon className="hidden hover:block text-red-400 absolute bottom-3 right-3" />
            </button>
            <button
                className="lg:hidden rounded-full relative hover:-translate-y-5 duration-300 text-gray-800 font-semibold border border-red-600 border-4 rounded shadow"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={openModal}
            >
                <img className="w-52 rounded-full" src={props.image} alt={props.name} />
                <ClickIcon className="text-red-400 absolute bottom-3 right-3" />
            </button>
            { isHovered && 
                <>
                    <div className="text-white text-center bg-red-600 rounded-xl -mt-2 p-1">
                        { props.name }
                    </div>
                </> }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <img className="hidden sm:block w-52 rounded-full m-auto pb-2" src={props.image} alt={props.name} />
                <div className="text-center">
                    <div className="font-bold text-2xl inline mr-2">
                        { props.name }
                    </div>
                    <div className="text-xl inline mr-2 align-text-center">
                        - { props.designation }
                    </div>
                    { props?.linkedin && <a className="rounded bg-white m-1 align-text-bottom" href={props.linkedin}><LinkedInLogo /></a>}
                    { props?.instagram && <a className="rounded bg-white m-1 align-text-bottom" href={props.instagram}><InstagramLogo /></a>}
                    { props?.facebook && <a className=" m-1 align-text-bottom" href={props.facebook}><FacebookLogo /></a>}
                </div>
                <br />
                <p>{props.description}</p>
            </Modal>
        </div>
    );
}
